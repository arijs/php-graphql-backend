import { fileURLToPath } from 'url'
import { join as pathJoin } from 'path'
// import { streams as ariStreams, openDir } from '@arijs/frontend/server/utils/index'
import {
	// TransformObject,
	// StringToLines,
	// tryOpenReadPromise,
	tryOpenWritePromise,
	tryWriteStreamEnd,
} from '@arijs/frontend/server/utils/streams'
import {
	openDirArrayPromise,
} from '@arijs/frontend/server/utils/open-dir'
import {
	snakeToCamel,
	snakeToPascal,
	simplifyType,
} from './lib.mjs'

const dirname = fileURLToPath(new URL('../src', import.meta.url)).replace(/\/+$/,'')

const modelDirName = `Model`
const csvStreamOpt = {
	encoding: 'utf8',
	highWaterMark: 1024,
}

async function openModelDir() {
	await openDirArrayPromise(dirname, [modelDirName])
}

function printModelFile(table) {
	const tablePascal = snakeToPascal(table.props.name.text)

	return `<?php

namespace App\\Model;

class ${tablePascal}
{
${table.columns.map(c => {
	return `\tpublic $${snakeToCamel(c.props.name.text)};`
}).join('\n')}

	public function exchangeArray(array $data)
	{
${table.columns.map(c => {
	const cn = c.props.name.text
	const val = `$data['${cn}'] ?? ${colEmptyValue(c)}`
	const dval = colIsDate(c)
		? `_Util::checkDate(${val})`
		: val
	return `\t\t$this->${snakeToCamel(cn)} = ${dval};`
}).join('\n')}
	}

	public function toArray()
	{
${table.columns.map(c => {
	if (colIsDate(c)) {
		const ccn = snakeToCamel(c.props.name.text)
		return `		$${ccn} = $this->${ccn};
		$${ccn} = $${ccn}['original'] ?? null;
`
	}
}).filter(Boolean).join('\n')}		$data = [
${table.columns.map(c => {
	const cn = c.props.name.text
	const ccn = snakeToCamel(cn)
	return `			'${cn}' => ${colIsDate(c) ? `$${ccn}` : `$this->${ccn}`},`
}).filter(Boolean).join('\n')}
		];
		return $data;
	}
}`
}

function getTablePk(table) {
	const tableRaw = table.props.name.text
	const pkIndex = table.indices.find(i => 'PRIMARY' === i.props?.indexType?.text)
	const pkCols = pkIndex.columns.map(ic =>
		table.columns.find(c =>
			c.attr.id === ic.props.referencedColumn.link
		)
	)
	const pkColNames = pkCols.map(c => c.props?.name?.text)
	if (!pkColNames[0]) {
		throw new Error(`Erro em ${JSON.stringify(tableRaw)}: O nome da coluna chave primária está vazio ${JSON.stringify(pkColNames)}`)
	}
	if ('string' !== typeof pkColNames[0]) {
		throw new Error(`Erro em ${JSON.stringify(tableRaw)}: O nome da coluna chave primária não é uma string ${JSON.stringify(pkColNames)}`)
	}
	if (pkColNames.length !== 1) {
		throw new Error(`Erro em ${JSON.stringify(tableRaw)}: Chave primária não tem só uma coluna ${JSON.stringify(pkColNames)}`)
	}
	return {
		col: pkCols[0],
		colName: pkColNames[0],
	}
}

function printTableFile(table) {
	const tableRaw = table.props.name.text
	const tablePascal = snakeToPascal(tableRaw)
	const {
		col: pkCol,
		colName: pkName,
	} = getTablePk(table)
	const pkIsNumber = colIsNumber(pkCol)
	const pkIsAutoInc = colIsAutoInc(pkCol)

	return `<?php

namespace App\\Model;

class ${tablePascal}Table extends _BaseTable
{
	private $tableGateway;

	public static $model = ${tablePascal}::class;
	public static $tableName = '${tableRaw}';
	public static $pkName = '${pkName}';
	public static $pkIsNumber = ${pkIsNumber ? `true` : `false`};
	public static $pkIsAutoInc = ${pkIsAutoInc ? `true` : `false`};

	public function get${tablePascal}($${pkName})
	{
		$rowset = $this->tableGateway->select(['${pkName}' => ${pkIsNumber ? `(int) ` : ``}$${pkName}]);
		$row = $rowset->current();
		if (! $row) {
			throw new RuntimeException(sprintf(
				'Could not find row with identifier %d',
				$id
			));
		}

		return $row;
	}

	public function save${tablePascal}(${tablePascal} $${tableRaw})
	{
		$${pkName} = ${pkIsNumber ? `(int) ` : ``}$${tableRaw}->${pkName};

		if ($id === 0) {
			return $this->insert${tablePascal}($${tableRaw});
		}

		return $this->update${tablePascal}($${tableRaw});
	}

	public function insert${tablePascal}(${tablePascal} $${tableRaw})
	{
		$this->tableGateway->insert($${tableRaw}->toArray());
${pkIsAutoInc ? `		$${tableRaw}->${pkName} = $this->tableGateway->getLastInsertValue();
` : ``}	}

	public function update${tablePascal}(${tablePascal} $${tableRaw})
	{
		$this->tableGateway->update(
			$${tableRaw}->toArray(),
			['${pkName}' => ${pkIsNumber ? `(int) ` : ``}$${tableRaw}->${pkName}]
		);
	}

	public function update${tablePascal}Array($${pkName}, array $update)
	{
		$this->tableGateway->update(
			$update,
			['${pkName}' => ${pkIsNumber ? `(int) ` : ``}$${pkName}]
		);
	}

	public function delete${tablePascal}($${pkName})
	{
		$this->tableGateway->delete(['${pkName}' => ${pkIsNumber ? `(int) ` : ``}$${pkName}]);
	}
}`
}

export async function writeModels(schema) {
	await openModelDir()

	const plist = []

	schema.tables.forEach(t => {

		plist.push((async t => {
			const ws = await tryOpenWritePromise(
				pathJoin(dirname, modelDirName, `${snakeToPascal(t.props.name.text)}.php`),
				csvStreamOpt
			)
			const data = printModelFile(t)
			await tryWriteStreamEnd(ws, data)
		})(t))

		plist.push((async t => {
			const ws = await tryOpenWritePromise(
				pathJoin(dirname, modelDirName, `${snakeToPascal(t.props.name.text)}Table.php`),
				csvStreamOpt
			)
			const data = printTableFile(t)
			await tryWriteStreamEnd(ws, data)
		})(t))

	})

	await Promise.all(plist)
}

function colEmptyValue(c) {
	const def = c.props.defaultValue.text
	const defNull = c.props.defaultValueIsNull.text
	switch (simplifyType(c.props.simpleType.link)) {
		case 'int':
		case 'smallint':
		case 'tinyint':
		case 'float':
			return defNull ? 'null' :
				null == def ? '0' :
				def
		case 'varchar':
		case 'tinytext':
		case 'text':
		case 'char':
			return defNull ? 'null' :
				null == def ? '""' :
				JSON.stringify(def)
		case 'date':
		case 'datetime_f':
			return 'null'
	}
	throw new Error(`Unknown type ${JSON.stringify(c.props.simpleType.link)}`)
}

function colIsDate(c) {
	switch (simplifyType(c.props.simpleType.link)) {
		case 'date':
		case 'datetime_f':
			return true
	}
	return false
}

function colIsNumber(c) {
	switch (simplifyType(c.props.simpleType.link)) {
		case 'int':
		case 'tinyint':
		case 'smallint':
		case 'mediumint':
			return true
	}
	return false
}

function colIsAutoInc(c) {
	return c.props.autoIncrement.text === '1'
}

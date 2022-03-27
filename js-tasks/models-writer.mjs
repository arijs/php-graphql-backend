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

const dirname = fileURLToPath(new URL('.', import.meta.url)).replace(/\/+$/,'')

const modelDirName = `Models`
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

export async function writeModels(schema) {
	await openModelDir()

	await Promise.all(schema.tables.map(async t => {

		const ws = await tryOpenWritePromise(
			pathJoin(dirname, modelDirName, `${snakeToPascal(t.props.name.text)}.php`),
			csvStreamOpt
		)
		const data = printModelFile(t)
		await tryWriteStreamEnd(ws, data)

	}))
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

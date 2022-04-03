import {
	getTablePk,
	snakeToCamel,
	snakeToPascal,
	colIsInteger,
	colIsAutoInc,
} from '../../lib.mjs'

export function getFileName(table) {
	return `${snakeToPascal(table.props.name.text)}.php`
}

export function printFile(table) {
	const tableRaw = table.props.name.text
	const tablePascal = snakeToPascal(tableRaw)
	const {
		col: pkCol,
		colName: pkName,
	} = getTablePk(table)
	const pkIsInteger = colIsInteger(pkCol)
	const pkIsAutoInc = colIsAutoInc(pkCol)

	return `<?php

namespace App\\Model;

class ${tablePascal}Table extends _BaseTable
{
	private $tableGateway;

	public static $model = ${tablePascal}::class;
	public static $tableName = '${tableRaw}';
	public static $pkName = '${pkName}';
	public static $pkIsInteger = ${pkIsInteger ? `true` : `false`};
	public static $pkIsAutoInc = ${pkIsAutoInc ? `true` : `false`};

	public function get${tablePascal}($${pkName})
	{
		$rowset = $this->tableGateway->select(['${pkName}' => ${pkIsInteger ? `(int) ` : ``}$${pkName}]);
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
		$${pkName} = ${pkIsInteger ? `(int) ` : ``}$${tableRaw}->${pkName};

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
			['${pkName}' => ${pkIsInteger ? `(int) ` : ``}$${tableRaw}->${pkName}]
		);
	}

	public function update${tablePascal}Array($${pkName}, array $update)
	{
		$this->tableGateway->update(
			$update,
			['${pkName}' => ${pkIsInteger ? `(int) ` : ``}$${pkName}]
		);
	}

	public function delete${tablePascal}($${pkName})
	{
		$this->tableGateway->delete(['${pkName}' => ${pkIsInteger ? `(int) ` : ``}$${pkName}]);
	}
}`
}

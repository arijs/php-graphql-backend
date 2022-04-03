import {
	snakeToCamel,
	snakeToPascal,
	colEmptyValue,
	colIsDate,
} from '../../lib.mjs'

export function getFileName(table) {
	return `${snakeToPascal(table.props.name.text)}.php`
}

export function printFile(table) {
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

import {
	snakeToCamel,
	snakeToPascal,
	colEmptyValue,
	colIsDate,
	colIsIndex,
	colIsInteger,
	colIsFloat,
	colIsString,
	simplifyType,
	colIsNotNull,
	colIsAutoInc,
} from '../../lib.mjs'

export function getFileName(table) {
	return `${snakeToPascal(table.props.name.text)}.graphqls`
}

function colGraphQLType(c, table) {
	switch (true) {
		case colIsIndex(c, table): return `ID`
		case colIsInteger(c): return `Int`
		case colIsDate(c): return `DateTime`
		case colIsFloat(c): return `Float`
		case colIsString(c): return `String`
		default:
			throw new Error(`Unknown column type ${JSON.stringify(colType(c))} of column ${JSON.stringify(c.props.name.text)} in table ${JSON.stringify(table.props.name.text)}`)
	}
}

export function printFile(table) {
	const tablePascal = snakeToPascal(table.props.name.text)

	return `
# ${tablePascal}

type ${tablePascal} {
${table.columns.map(c => {
	const name = snakeToCamel(c.props.name.text)
	const type = colGraphQLType(c, table)
	const nn = colIsNotNull(c) ? `!` : ``
	return `\t${name}: ${type}${nn}`
}).join('\n')}
}

type ${tablePascal}Connection {
	nodes: [${tablePascal}!]!
	totalCount: Int!
}

enum ${tablePascal}FieldsEnum {
${table.columns.map(c => {
	const name = String(c.props.name.text).toUpperCase()
	return `\t${name}`
}).join('\n')}
}

input ${tablePascal}FilterInput {
${table.columns.map(c => {
	const name = snakeToCamel(c.props.name.text)
	const type = colGraphQLType(c, table)
	const index = colIsIndex(c, table)
	const fiType = index ? `ID` : `${type}FilterInput`
	return `\t${name}: ${fiType}`
}).join('\n')}
}

input ${tablePascal}CreateInput {
${table.columns.map(c => {
	const name = snakeToCamel(c.props.name.text)
	const type = colGraphQLType(c, table)
	const nn = colIsNotNull(c) ? `!` : ``
	const ai = colIsAutoInc(c)
	return ai ? undefined : `\t${name}: ${type}${nn}`
}).filter(Boolean).join('\n')}
}

input ${tablePascal}SortInput {
	field: ${tablePascal}FieldsEnum!
	order: SortOrderEnum
}
`
}

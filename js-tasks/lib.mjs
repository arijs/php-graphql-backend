
export function tablePkIndex(table) {
	return table.indices.find(i => 'PRIMARY' === i.props?.indexType?.text)
}

export function colIsPK(c, table) {
	const cid = c.attr.id
	const pkIndex = tablePkIndex(table)
	return pkIndex?.columns.some(ic =>
		cid === ic.props.referencedColumn.link
	)
}

export function colIsFK(c, table) {
	const cid = c.attr.id
	return table.foreign.some(f =>
		f.props.columns.list.some(fc => cid  === fc.link)
	)
}

export function colIsIndex(c, table) {
	return colIsPK(c, table) || colIsFK(c, table)
}

export function getTablePk(table) {
	const tableRaw = table.props.name.text
	const pkIndex = tablePkIndex(table)
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

const reTypePrefix = /^com\.mysql\.rdbms\.mysql\.datatype\./i
export function simplifyType(t) {
	return String(t).replace(reTypePrefix, '')
}

export function colType(c) {
	return simplifyType(c.props.simpleType.link)
}

export function ucFirst(s) {
	return s.substring(0, 1).toUpperCase() + s.substring(1)
}
export function lcFirst(s) {
	return s.substring(0, 1).toLowerCase() + s.substring(1)
}
const reUnder = /_+/
export function snakeToPascal(s) {
	return String(s).split(reUnder).map(ucFirst).join('')
}
export function snakeToCamel(s) {
	return lcFirst(snakeToPascal(s))
}

export function colEmptyValue(c) {
	const def = c.props.defaultValue.text
	const defNull = c.props.defaultValueIsNull.text
	switch (colType(c)) {
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

export function colIsDate(c) {
	switch (colType(c)) {
		case 'date':
		case 'datetime_f':
			return true
	}
	return false
}

export function colIsInteger(c) {
	switch (colType(c)) {
		case 'int':
		case 'tinyint':
		case 'smallint':
		case 'mediumint':
			return true
	}
	return false
}

export function colIsFloat(c) {
	switch (colType(c)) {
		case 'float':
			return true
	}
	return false
}

export function colIsString(c) {
	switch (colType(c)) {
		case 'varchar':
		case 'tinytext':
		case 'text':
		case 'char':
			return true
	}
	return false
}


export function colIsAutoInc(c) {
	return c.props.autoIncrement.text === '1'
}

export function colIsNotNull(c) {
	return c.props.isNotNull === '1'
}

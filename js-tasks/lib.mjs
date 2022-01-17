
const reTypePrefix = /^com\.mysql\.rdbms\.mysql\.datatype\./i
export function simplifyType(t) {
	return String(t).replace(reTypePrefix, '')
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

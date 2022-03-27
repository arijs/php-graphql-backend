import { fileURLToPath } from 'url'
import { join as pathJoin } from 'path'
import {
	TransformObject,
	// StringToLines,
	tryOpenReadPromise,
	// tryOpenWritePromise,
} from '@arijs/frontend/server/utils/streams'
import { XMLParser, TreeMatcher, elementDefault } from '@arijs/stream-xml-parser'
import { simplifyType } from './lib.mjs'
import { writeModels } from './models-writer.mjs'

const dirname = fileURLToPath(new URL('..', import.meta.url)).replace(/\/+$/,'')

const xmlStreamOpt = {
	encoding: 'utf8',
	highWaterMark: 1024,
}

const writeModelsFromSchema = false //'name_of_schema'

const reGuid = /^\{?[0-9a-f]{8}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{4}-?[0-9a-f]{12}\}?$/i
const isGuid = str => reGuid.test(str)

Object.prototype.with = function(fn) {
	return fn(this)
}

main()

async function main() {
	try {
		await run()
		console.log(`process finished`)
	} catch (err) {
		console.error(`process error`, err)
	}
}

function run () {
	return new Promise(async (resolve, reject) => {
		const rs = await tryOpenReadPromise(
			pathJoin(dirname, 'etc/modelo.mwb.xml'),
			xmlStreamOpt,
		)

		// const pc = new StringToLines()

		const elHandler = elementDefault()
		const bc = fnBreadcrumb(elHandler)
		const assGuid = fnAssoc()
		const assOther = fnAssoc()
		const bs = fnBuildSchema(elHandler)
		bc.onTagOpen.on(function (tag, tagPath) {
			const gn = this.getNode
			const node = gn(tag)
			const path = tagPath.map(gn)
			if (!node || path.some(x => !x)) {
				console.error(`[E.BSTAG]`, node, path, tag, tagPath)
				throw new Error(`run(bs.onTagOpen): node is empty or path contain empty nodes`)
			}
			bs.tagOpen(node, path, tag.attr)
		})
		bc.onTagClose.on(function (tag, tagPath) {
			const gn = this.getNode
			const node = gn(tag)
			const path = tagPath.map(gn)
			if (!node || path.some(x => !x)) {
				console.error(`[E.BSTAG]`, node, path, tag, tagPath)
				throw new Error(`run(bs.onTagClose): node is empty or path contain empty nodes`)
			}
			bs.tagClose(node, path, tag.attr)
		})
		bc.onText.on(function (text, tagPath) {
			const gn = this.getNode
			const path = tagPath.map(gn)
			if (path.some(x => !x)) {
				console.error(`[E.BSTAG]`, node, path, tag, tagPath)
				throw new Error(`run(bs.onText): path contain empty nodes`)
			}
			bs.text(text, path)
		})
		const xp = new XMLParser(ev => xpEvent(ev, bc, assGuid, assOther));

		const work = new TransformObject({ process: (row, push) => {
			xp.write(row)
		} })

		rs.on('data', (chunk) => work.write(chunk))
		rs.on('end', () => work.end())

		// const ws = await tryOpenWritePromise(
		// 	pathJoin(dirname, `ddsoft-serials-out.csv`),
		// 	xmlStreamOpt,
		// )

		work.on('data', () => {/*console.log(`output event data`, r.length, r[0])*/})
		work.on('end', () => {
			const { get: gGet, set: gSet } = assGuid.getMaps()
			const { get: oGet, set: oSet } = assOther.getMaps()
			const gSetKeys = Object.keys(gSet)
			const oSetKeys = Object.keys(oSet)
			const assSchemas = fnAssoc()
			const assTables = fnAssoc()
			const assColumns = fnAssoc()
			const assForeign = fnAssoc()
			const assIndices = fnAssoc()
			if (false) {
				console.log(`getKeys Guid =========`, gGet)
				console.log(`setKeys Guid =========`, gSetKeys.length, gSetKeys.slice(0, 10).map(key => {
					const { name, attr } = gSet[key]
					return { key, name, attr }
				}))
			}
			if (true) {
				console.log(`getKeys Other =========`)
				Object.entries(oGet).forEach(([k, vlist]) => {
					console.log(`  ${k} - (`, vlist.length, `)`)
					// vlist.forEach(({link, tag}) => {
					// 	console.log(`    link attr`, link.attr)
					// 	console.log(`      tag attr`, tag.attr)
					// })
				})
				console.log(`setKeys Other =========`, oSetKeys.length, oSetKeys.slice(0, 10).map(key => {
					const { name, attr } = oSet[key]
					return { key, name, attr }
				}))
			}
			if (true) {
				const schemas = bs.getSchemas()
				schemas.forEach(sc => {
					assSchemas.set(sc.attr.id, sc)
					sc.tables.forEach(t => {
						assTables.set(t.attr.id, t)
						t.columns.forEach(c => {
							assColumns.set(c.attr.id, c)
						})
						t.foreign.forEach(f => {
							assForeign.set(f.attr.id, f)
						})
						t.indices.forEach(i => {
							assIndices.set(i.attr.id, i)
						})
					})
				})
				const { set: mapTables } = assTables.getMaps()
				const { set: mapColumn } = assColumns.getMaps()
				schemas.forEach(sc => {
					// ddsoft_adianti_ddsoft
					console.log(`schema name =========`, sc.props?.name?.text)
					console.log(`schema attrs =========`, sc.attr)
					console.log(`schema props =========`, sc.props)
					sc.tables.forEach(t => {
						console.log(`table name ---------`, t.props?.name?.text)
						// console.log(`table attrs ---------`, t.attr)
						// console.log(`table props ---------`, t.props)
						t.columns.forEach(c => {
							// console.log(`column name - - - - -`, c.props?.name?.text)
							// console.log(`column attrs - - - - -`, c.attr)
							// console.log(`column props - - - - -`, c.props)
							console.log(`col:`, printColumn(c))
						})
						t.indices.forEach(i => {
							const it = i.props?.indexType?.text
							console.log(`index name - - - - -`, i.props?.name?.text, `(${it})`)
							// console.log(`index attrs - - - - -`, i.attr)
							// console.log(`index props - - - - -`, i.props)
							// console.log(`  . index columns - - - - -`)
							i.columns.forEach(c => {
								console.log(`    .`, printColumn(mapColumn[c.props.referencedColumn.link]))
								// console.log(`index column name - - - - -`, c.props?.name?.text)
								// console.log(`index column attrs - - - - -`, c.attr)
								// console.log(`index column props - - - - -`, c.props)
							})
						})
						t.foreign.forEach(f => {
							const {
								referencedTable,
								columns,
								referencedColumns,
								// ...otherProps
							} = f.props
							const refTable = mapTables[referencedTable.link]
							console.log(`foreign name . . . . .`, f.props?.name?.text)
							// console.log(`foreign attrs - - - - -`, f.attr)
							// console.log(`foreign props - - - - -`, otherProps)
							// console.log(`foreign table - - - - -`, referencedTable)
							// console.log(`  .`, mapTables[referencedTable.link])
							columns?.list.forEach(c => {
								console.log(`  . foreign columns - - - - -`)//, c
								console.log(`      .`, printColumn(mapColumn[c.link]))
							})
							referencedColumns?.list.forEach(r => {
								console.log(`  . foreign ref columns - - - - -`)//, r
								console.log(`      . ${refTable.props.name.text}.${printColumn(mapColumn[r.link])}`)
							})
						})
					})
				})
			}
			console.log(`work end`)
			xp.end()
			let scdd = undefined
			if (writeModelsFromSchema) {
				bs.getSchemas().forEach(sc => {
					// ddsoft_adianti_ddsoft
					if (sc.props?.name?.text === writeModelsFromSchema) {
						scdd = sc
					}
				})
				if (scdd) {
					writeModels(scdd).then(resolve, reject)
				} else {
					console.log(`schema to write not found`)
					resolve()
				}
			} else {
				console.log(`No schema to write models specified`)
				resolve()
			}
		})
		work.on('error', reject)
		// ws.on('error', reject)
		// ws.on('close', resolve)

		// rs
			// .pipe(pc)
			// .pipe(work)
			//.pipe(ws)
	})
}

async function processRow({row, rowIndex}, push) {
	// if (0 === rowIndex) return;
	const cols = row.split('\t')
	const id = cols[0]
	const dt = new Date(2022, rowIndex)
	const year = dt.getFullYear().toFixed(0).padStart(4, '0')
	const month = dt.getMonth().with(x => x+1).toFixed(0).padStart(2, '0')
	const out = `${year[0]}${id[0]}${year[1]}${id[1]}${year[2]}${id[2]}${year[3]}${id[3]}${month[0]}${id[4]}${month[1]}\n`
	console.log(`-`, rowIndex, id, cols.slice(1), year, month, out)
	push(out)
}

function fnEvent() {
	const listeners = []
	return { on, off, fire }
	function on(fn) {
		if (!(fn instanceof Function)) {
			console.error(`[E.EVT]`, fn)
			throw new Error(`fnEvent on(): listener is not a function`)
		}
		listeners.push(fn)
	}
	function off(fn) {
		if (fn) {
			const index = listeners.indexOf(fn)
			if (-1 !== index) listeners.splice(index, 1)
		} else {
			listeners.splice(0, listeners.length)
		}
	}
	function fire() {
		for (const f of listeners) f.apply(this, arguments)
	}
}

function fnBreadcrumb(elHandler) {
	const path = []
	let tagDef = undefined
	let onCurrentTagEnd = fnEvent()
	let onTagOpen = fnEvent()
	let onTagClose = fnEvent()
	let onTagSelf = fnEvent()
	let onText = fnEvent()
	const specialTag = { selfClose: true }
	const getNode = tag => tag.node
	const api = { getNode }
	return {
		tagStart,
		tagName,
		tagAttr,
		tagEnd,
		tagSpecial,
		text,
		onCurrentTagEnd,
		onTagOpen,
		onTagClose,
		onTagSelf,
		onText,
		getPath,
		getFromLast,
		assertEmpty,
		printPath,
		getNode,
	}
	function _error(msg, ...vars) {
		console.error(`[E.BC] `, ...vars)
		throw new Error(msg)
	}
	function tagStart() {
		if (tagDef) _error(`fnBreadcrumb: cannot start tag because another tag is open`, tagDef)
		tagDef = {
			name: undefined,
			node: undefined,
			attr: {},
			attrKeys: [],
		}
	}
	function tagName(tag) {
		if (!tagDef) _error(`fnBreadcrumb: cannot put name because tag is undefined`, tag)
		if (tagDef.name != null) _error(`fnBreadcrumb: cannot put name because tag is already named`, tag, tagDef.name)
		tagDef.name = tag.name
		if (!tag.close) {
			tagDef.node = elHandler && elHandler.initName(tag.name)
		}
	}
	function tagAttr(tag, attr) {
		if (!tagDef) _error(`fnBreadcrumb: cannot put attribute because tag is undefined`, tag, attr)
		const { name, value } = attr
		tagDef.attr[name] = value
		tagDef.attrKeys.push(name)
		elHandler && elHandler.attrsAdd(tagDef.node, attr)
	}
	function tagEnd(tag) {
		if (!tagDef) _error(`fnBreadcrumb: cannot end tag because tag is undefined`, tag)
		let pathCopy
		if (tag.selfClose) {
			pathCopy = path.slice()
			onTagSelf.fire.call(api, tagDef, pathCopy)
		} else if (tag.close) {
			const lastPos = path.length - 1
			if (-1 === lastPos) _error(`fnBreadcrumb: cannot close tag because path is empty`, tag)
			const last = path[lastPos]
			if (last.name !== tagDef.name) _error(`fnBreadcrumb: cannot close tag because last open tag was different`, tag, last.name)
			path.splice(lastPos, 1)
			pathCopy = path.slice()
			onTagClose.fire.call(api, last, pathCopy)
		} else {
			pathCopy = path.slice()
			path.push(tagDef)
			onTagOpen.fire.call(api, tagDef, pathCopy)
		}
		onCurrentTagEnd.fire.call(api, tagDef, pathCopy)
		onCurrentTagEnd.off()
		tagDef = undefined
	}
	function tagSpecial() {
		return tagEnd(specialTag)
	}
	function text(text) {
		if (tagDef) _error(`fnBreadcrumb: cannot emit text while a tag is currently open`, tagDef)
		const pathCopy = path.slice()
		onText.fire.call(api, text, pathCopy)
	}
	function getPath() {
		return path.slice()
	}
	function getFromLast(n) {
		const plen = path.length
		const lastPos = plen - n
		if (0 <= lastPos && lastPos < plen) return path[lastPos]
	}
	function assertEmpty() {
		if (0 !== path.length) _error(`fnBreadcrumb: assertEmpty: path is not empty`, path)
	}
	function printPath() {
		const lastPos = path.length - 1
		let str = ''
		for (let i = 0; i <= lastPos; i++) {
			const tag = path[i]
			str += tag.name
			if (i === lastPos) {
				str += `(${tag.attrKeys.join(',')})`
			} else {
				str += '>'
			}
		}
		return str
	}
}

function fnAssoc() {
	const mapGet = {}
	const mapSet = {}
	return {
		get,
		set,
		getMaps,
	}
	function _error(msg, ...vars) {
		console.error(`[E.AS] `, ...vars)
		throw new Error(msg)
	}
	function get(k, tag) {
		const mapK = mapGet[k] = mapGet[k] || []
		mapK.push(tag)
	}
	function set(k, tag) {
		const prev = mapSet[k]
		if (prev) _error(`fnAssoc: cannot set key because it is already defined by another object`, k, prev, tag)
		mapSet[k] = tag
	}
	function getMaps() {
		return {
			get: mapGet,
			set: mapSet,
		}
	}
}

function fnMatchStruct(structName, elHandler) {
	return TreeMatcher.from([
		'value',
		[
			['type', 'object'],
			['struct-name', structName],
			['id', str => isGuid(String(str).trim())],
			// ['struct-checksum', null],
		],
	], elHandler)
}

function fnMatchTypeObject(elHandler) {
	return TreeMatcher.from([
		'value',
		[
			['type', 'object'],
		],
	], elHandler)
}

function fnMatchProperty(elHandler) {
	return TreeMatcher.from([
		'value',
		[
			['type', val => val !== 'list'],
			['key', null],
			[null, null, '<0>'],
		],
	], elHandler)
}

function fnMatchLink(elHandler) {
	return TreeMatcher.from([
		'link',
		[
			['type', null],
			['struct-name', null],
			['key', null],
			[null, null, '<0>'],
		],
	], elHandler)
}

function fnMatchPropertyList(elHandler) {
	return TreeMatcher.from([
		'value',
		[
			['type', 'list'],
			['key', null],
			['content-type', null],
			['content-struct-name', null],
			['_ptr_', null, '<?>'],
			[null, null, '<0>'],
		],
	], elHandler)
}

function fnMatchPropertyListLink(elHandler) {
	return TreeMatcher.from([
		'link',
		[
			['type', null],
			[null, null, '<0>'],
		],
	], elHandler)
}

function fnBuildSchema(elHandler) {
	const schemas = []
	let currentSchema = undefined
	let currentTable = undefined
	let currentColumn = undefined
	let currentForeign = undefined
	let currentIndex = undefined
	let currentIndexColumn = undefined
	let currentProperty = undefined
	let currentLink = undefined
	let currentPropertyList = undefined
	let currentPropertyListLink = undefined
	const matchSchema = fnMatchStruct('db.mysql.Schema', elHandler)
	const matchTable = fnMatchStruct('db.mysql.Table', elHandler)
	const matchColumn = fnMatchStruct('db.mysql.Column', elHandler)
	const matchForeign = fnMatchStruct('db.mysql.ForeignKey', elHandler)
	const matchIndex = fnMatchStruct('db.mysql.Index', elHandler)
	const matchIndexColumn = fnMatchStruct('db.mysql.IndexColumn', elHandler)
	const matchProperty = fnMatchProperty(elHandler)
	const matchLink = fnMatchLink(elHandler)
	const matchPropertyList = fnMatchPropertyList(elHandler)
	const matchPropertyListLink = fnMatchPropertyListLink(elHandler)
	// const matchObject = fnMatchTypeObject(elHandler)
	return {
		getSchemas,
		tagOpen,
		tagClose,
		text,
	}
	function getSchemas() {
		return schemas
	}
	function tagOpen(node, path, attr) {
		// const testSchema = 
		// const testTable = 
		// const testColumn = 
		// const testObject = matchObject.testAll(node, path)
		// const tests = [
		// 	testSchema,
		// 	testTable,
		// 	testColumn,
		// ]
		// const testsName = tests.filter(t => t.name.success)
		// const testsAll = tests.filter(t => t.success)
		// if (testObject.success) {
		// 	console.log(`- - - - - - - - -\nbs.tagOpen`, node)
		// 	if (testsAll.length) {
		// 		testsAll.forEach(t => console.log(`[OK!]`, t.attr))
		// 	} else {
		// 		testsName.forEach(t => console.log(`[-]`, t.attr))
		// 	}
		// }
		switch (true) {
			case matchSchema.testAll(node, path).success:
				schemaStart(node, path, attr);
				return;
			case matchTable.testAll(node, path).success:
				tableStart(node, path, attr);
				return;
			case matchColumn.testAll(node, path).success:
				columnStart(node, path, attr);
				return;
			case matchForeign.testAll(node, path).success:
				foreignStart(node, path, attr);
				return;
			case currentIndex
				&& matchIndexColumn.testAll(node, path).success:
				indexColumnStart(node, path, attr);
				return;
			case currentTable
				&& matchIndex.testAll(node, path).success:
				indexStart(node, path, attr);
				return;
			case currentSchema // pro Table e pro Column estarem ativos, o Schema precisa estar
				&& !currentProperty
				&& matchProperty.testAll(node, path).success:
				propertyStart(node, path, attr);
				return;
			case currentSchema
				// && !currentLink
				&& matchLink.testAll(node, path).success:
				linkStart(node, path, attr);
				return;
			case (currentForeign || currentIndexColumn)
				// && !currentPropertyList
				&& matchPropertyList.testAll(node, path).success:
				propertyListStart(node, path, attr);
				return;
			case (currentForeign || currentIndexColumn)
				// && currentPropertyList
				// && !currentPropertyListLink
				&& matchPropertyListLink.testAll(node, path).success:
				propertyListLinkStart(node, path, attr);
				return;
		}
	}
	function tagClose(node, path, attr) {
		switch (true) {
			case matchSchema.testAll(node, path).success:
				schemaEnd(node, path, attr);
				return;
			case matchTable.testAll(node, path).success:
				tableEnd(node, path, attr);
				return;
			case matchColumn.testAll(node, path).success:
				columnEnd(node, path, attr);
				return;
			case matchForeign.testAll(node, path).success:
				foreignEnd(node, path, attr);
				return;
			case currentIndex
				&& matchIndexColumn.testAll(node, path).success:
				indexColumnEnd(node, path, attr);
				return;
			case currentTable
				&& matchIndex.testAll(node, path).success:
				indexEnd(node, path, attr);
				return;
			case currentSchema
				&& currentProperty
				&& matchProperty.testAll(node, path).success:
				propertyEnd(node, path, attr);
				return;
			case currentSchema
				// && currentLink
				&& matchLink.testAll(node, path).success:
				linkEnd(node, path, attr);
				return;
			case currentForeign
				// && currentPropertyList
				&& matchPropertyList.testAll(node, path).success:
				propertyListEnd(node, path, attr);
				return;
			case currentForeign
				// && currentPropertyList
				// && currentPropertyListLink
				&& matchPropertyListLink.testAll(node, path).success:
				propertyListLinkEnd(node, path, attr);
				return;
		}
	}
	function text(text, path) {
		if (currentPropertyListLink) {
			if (currentPropertyListLink.link) {
				console.error('[E.BLSC]', currentPropertyListLink, text, path)
				throw new Error(`fnBuildSchema: cannot set property list link text because link already has another text`)
			}
			currentPropertyListLink.link = text
		} else if (currentLink) {
			if (currentLink.link) {
				console.error('[E.BLSC]', currentLink, text, path)
				throw new Error(`fnBuildSchema: cannot set link text because link already has another text`)
			}
			currentLink.link = text
		} else if (currentProperty) {
			if (currentProperty.text) {
				console.error('[E.BLSC]', currentProperty, text, path)
				throw new Error(`fnBuildSchema: cannot set property text because property already has another text`)
			}
			currentProperty.text = text
		}
	}
	function schemaStart(node, path, attr) {
		if (currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot create new schema while another is already open`)
		}
		currentSchema = {
			tables: [],
			node,
			attr,
			props: {},
			pathIndex: path.length,
		}
	}
	function schemaEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end schema because none is currently open`)
		}
		if (node !== currentSchema.node) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end schema because closing node is not the same as the opening node`)
		}
		schemas.push(currentSchema)
		currentSchema = undefined
	}
	function tableStart(node, path, attr) {
		if (currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot create new table while another is already open`)
		}
		currentTable = {
			columns: [],
			foreign: [],
			indices: [],
			node,
			attr,
			props: {},
			pathIndex: path.length,
		}
	}
	function tableEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end table because no schema is currently open`)
		}
		if (!currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end table because none is currently open`)
		}
		if (node !== currentTable.node) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end table because closing node is not the same as the opening node`)
		}
		currentSchema.tables.push(currentTable)
		currentTable = undefined
	}
	function columnStart(node, path, attr) {
		if (currentColumn) {
			console.error('[E.BLSC]', currentColumn, node, path)
			throw new Error(`fnBuildSchema: cannot create new column while another is already open`)
		}
		currentColumn = {
			node,
			attr,
			props: {},
			pathIndex: path.length,
		}
	}
	function columnEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end column because no schema is currently open`)
		}
		if (!currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end column because no table is currently open`)
		}
		if (!currentColumn) {
			console.error('[E.BLSC]', currentColumn, node, path)
			throw new Error(`fnBuildSchema: cannot end column because none is currently open`)
		}
		if (node !== currentColumn.node) {
			console.error('[E.BLSC]', currentColumn, node, path)
			throw new Error(`fnBuildSchema: cannot end column because closing node is not the same as the opening node`)
		}
		currentTable.columns.push(currentColumn)
		currentColumn = undefined
	}
	function foreignStart(node, path, attr) {
		if (currentForeign) {
			console.error('[E.BLSC]', currentForeign, node, path)
			throw new Error(`fnBuildSchema: cannot create new foreign column while another is already open`)
		}
		currentForeign = {
			node,
			attr,
			props: {},
			pathIndex: path.length,
		}
	}
	function foreignEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end foreign column because no schema is currently open`)
		}
		if (!currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end foreign column because no table is currently open`)
		}
		if (!currentForeign) {
			console.error('[E.BLSC]', currentForeign, node, path)
			throw new Error(`fnBuildSchema: cannot end foreign column because none is currently open`)
		}
		if (node !== currentForeign.node) {
			console.error('[E.BLSC]', currentForeign, node, path)
			throw new Error(`fnBuildSchema: cannot end foreign column because closing node is not the same as the opening node`)
		}
		currentTable.foreign.push(currentForeign)
		currentForeign = undefined
	}
	function indexStart(node, path, attr) {
		if (currentIndex) {
			console.error('[E.BLSC]', currentIndex, node, path)
			throw new Error(`fnBuildSchema: cannot create new index while another is already open`)
		}
		currentIndex = {
			node,
			attr,
			props: {},
			columns: [],
			pathIndex: path.length,
		}
	}
	function indexEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end index because no schema is currently open`)
		}
		if (!currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end index because no table is currently open`)
		}
		if (!currentIndex) {
			console.error('[E.BLSC]', currentIndex, node, path)
			throw new Error(`fnBuildSchema: cannot end index because none is currently open`)
		}
		if (node !== currentIndex.node) {
			console.error('[E.BLSC]', currentIndex, node, path)
			throw new Error(`fnBuildSchema: cannot end index because closing node is not the same as the opening node`)
		}
		currentTable.indices.push(currentIndex)
		currentIndex = undefined
	}
	function indexColumnStart(node, path, attr) {
		if (currentIndexColumn) {
			console.error('[E.BLSC]', currentIndexColumn, node, path)
			throw new Error(`fnBuildSchema: cannot create new index column while another is already open`)
		}
		currentIndexColumn = {
			node,
			attr,
			props: {},
			pathIndex: path.length,
		}
	}
	function indexColumnEnd(node, path) {
		if (!currentSchema) {
			console.error('[E.BLSC]', currentSchema, node, path)
			throw new Error(`fnBuildSchema: cannot end index column because no schema is currently open`)
		}
		if (!currentTable) {
			console.error('[E.BLSC]', currentTable, node, path)
			throw new Error(`fnBuildSchema: cannot end index column because no table is currently open`)
		}
		if (!currentIndex) {
			console.error('[E.BLSC]', currentIndex, node, path)
			throw new Error(`fnBuildSchema: cannot end index column because no index is currently open`)
		}
		if (!currentIndexColumn) {
			console.error('[E.BLSC]', currentIndexColumn, node, path)
			throw new Error(`fnBuildSchema: cannot end index column because none is currently open`)
		}
		if (node !== currentIndexColumn.node) {
			console.error('[E.BLSC]', currentIndexColumn, node, path)
			throw new Error(`fnBuildSchema: cannot end index column because closing node is not the same as the opening node`)
		}
		currentIndex.columns.push(currentIndexColumn)
		currentIndexColumn = undefined
	}
	function propertyStart(node, path, attr) {
		if (currentProperty) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot create new property while another is already open`)
		}
		if (currentLink) {
			console.error('[E.BLSC]', currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot create new property while a link is already open`)
		}
		currentProperty = {
			attr,
			node,
			target: currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema,
			pathIndex: path.length,
			text: null,
		}
	}
	function propertyEnd(node, path) {
		const currentActive = currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema
		if (!currentActive) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property because no column, foreign key, index, index column, table or schema is currently open`)
		}
		if (!currentProperty) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property because no property is currently open`)
		}
		if (currentLink) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end property while a link is currently open`)
		}
		if (node !== currentProperty.node) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end property because closing node is not the same as the opening node`)
		}
		if (currentActive !== currentProperty.target) {
			console.error('[E.BLSC]', currentActive, currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end property because current column, foreign column, table or schema is not the same as the opening column, foreign column, table or schema`)
		}
		const {
			key: attrKey,
			...otherAttrs
		} = currentProperty.attr
		currentActive.props[
			attrKey || Object.keys(currentActive.props).length
		] = {
			...otherAttrs,
			text: currentProperty.text,
		}
		currentProperty = undefined
	}
	function linkStart(node, path, attr) {
		if (currentLink) {
			console.error('[E.BLSC]', currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot create new link while another is already open`)
		}
		if (currentProperty) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot create new link while a property is already open`)
		}
		currentLink = {
			attr,
			node,
			target: currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema,
			pathIndex: path.length,
			link: null,
		}
	}
	function linkEnd(node, path) {
		const currentActive = currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema
		if (!currentActive) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end link because no column, table or schema is currently open`)
		}
		if (!currentLink) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end link because no link is currently open`)
		}
		if (currentProperty) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end link while a property is currently open`)
		}
		if (node !== currentLink.node) {
			console.error('[E.BLSC]', currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot end link because closing node is not the same as the opening node`)
		}
		if (currentActive !== currentLink.target) {
			console.error('[E.BLSC]', currentActive, currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot end link because current column, foreign column, table or schema is not the same as the opening column, foreign column, table or schema`)
		}
		const {
			key: attrKey,
			...otherAttrs
		} = currentLink.attr
		currentActive.props[
			attrKey || Object.keys(currentActive.props).length
		] = {
			...otherAttrs,
			link: currentLink.link,
		}
		currentLink = undefined
	}
	function propertyListStart(node, path, attr) {
		if (currentPropertyList) {
			console.error('[E.BLSC]', currentPropertyList, node, path)
			throw new Error(`fnBuildSchema: cannot create new property list while another is already open`)
		}
		if (currentProperty) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot create new property list while a property is already open`)
		}
		if (currentLink) {
			console.error('[E.BLSC]', currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot create new property list while a link is already open`)
		}
		currentPropertyList = {
			attr,
			node,
			target: currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema,
			pathIndex: path.length,
			list: [],
		}
	}
	function propertyListEnd(node, path) {
		const currentActive = currentForeign || currentIndexColumn || currentIndex || currentColumn || currentTable || currentSchema
		if (!currentActive) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property list because no column, foreign key, index, index column, table or schema is currently open`)
		}
		if (!currentPropertyList) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property list because no property list is currently open`)
		}
		if (currentProperty) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property list while a property is currently open`)
		}
		if (currentLink) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end property list while a link is currently open`)
		}
		if (node !== currentPropertyList.node) {
			console.error('[E.BLSC]', currentPropertyList, node, path)
			throw new Error(`fnBuildSchema: cannot end property list because closing node is not the same as the opening node`)
		}
		if (currentActive !== currentPropertyList.target) {
			console.error('[E.BLSC]', currentActive, currentPropertyList, node, path)
			throw new Error(`fnBuildSchema: cannot end property list because current column, foreign column, table or schema is not the same as the opening column, foreign column, table or schema`)
		}
		const {
			key: attrKey,
			...otherAttrs
		} = currentPropertyList.attr
		currentActive.props[
			attrKey || Object.keys(currentActive.props).length
		] = {
			...otherAttrs,
			list: currentPropertyList.list,
		}
		currentPropertyList = undefined
	}
	function propertyListLinkStart(node, path, attr) {
		if (currentPropertyListLink) {
			console.error('[E.BLSC]', currentLink, node, path)
			throw new Error(`fnBuildSchema: cannot create new property list link while another is already open`)
		}
		if (!currentPropertyList) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot create new property list link because no property list is currently open`)
		}
		currentPropertyListLink = {
			attr,
			node,
			target: currentPropertyList,
			pathIndex: path.length,
			link: null,
		}
	}
	function propertyListLinkEnd(node, path) {
		const currentActive = currentPropertyList
		if (!currentActive) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property list link because no property list is currently open`)
		}
		if (!currentPropertyListLink) {
			console.error('[E.BLSC]', node, path)
			throw new Error(`fnBuildSchema: cannot end property list link because no property list link is currently open`)
		}
		if (currentProperty) {
			console.error('[E.BLSC]', currentProperty, node, path)
			throw new Error(`fnBuildSchema: cannot end property list link while a property is currently open`)
		}
		if (node !== currentPropertyListLink.node) {
			console.error('[E.BLSC]', currentPropertyListLink, node, path)
			throw new Error(`fnBuildSchema: cannot end property list link because closing node is not the same as the opening node`)
		}
		if (currentActive !== currentPropertyListLink.target) {
			console.error('[E.BLSC]', currentActive, currentPropertyListLink, node, path)
			throw new Error(`fnBuildSchema: cannot end property list link because current property list is not the same as the opening property list`)
		}
		const {
			// key: attrKey,
			...otherAttrs
		} = currentPropertyListLink.attr
		currentActive.list.push({
			...otherAttrs,
			link: currentPropertyListLink.link,
		})
		currentPropertyListLink = undefined
	}
}

function simpleTag(tag) {
	return {
		name: tag.name,
		attr: tag.attr,
	}
}

function xpEvent(ev, bc, assGuid, assOther) {
	var tag = ev.tag;
	var attr = ev.attr;
	var buf = ev.buffered;
	var xp = ev.parser;
	let ak, av, text, last1, last2;
	let printLog = false;
	switch (ev.name) {
		case 'startTag': bc.tagStart(); break;
		case 'tagName': bc.tagName(tag); break;
		case 'tagAttribute':
			ak = attr.name;
			av = attr.value.trim()
			if (ak === 'struct-checksum') {
				break;
			}
			bc.tagAttr(tag, attr);
			if (ak === 'id') {
				if (isGuid(av)) {
					bc.onCurrentTagEnd.on(tag => assGuid.set(av, simpleTag(tag)))
				} else {
					// console.error(`[E.XPEV]`, JSON.stringify(av))
					// throw new Error(`xpEvent: tag with attr ID: value is not a guid`)
					bc.onCurrentTagEnd.on(tag => assOther.set(av, simpleTag(tag)))
				}
			}
			break;
		case 'endTag': bc.tagEnd(tag); break;
		case 'endInstruction': bc.tagSpecial(); break;
		case 'text':
			last1 = bc.getFromLast(1);
			text = ev.text.trim();
			if (!text.length) break;
			bc.text(text);
			if (last1 && last1.name === 'link') {
				last2 = bc.getFromLast(2);
				if (last2) {
					if (isGuid(text)) {
						assGuid.get(text, { link: last1, tag: last2 })
					} else {
						// console.error(`[E.XPEV]`, JSON.stringify(text), last1)
						// throw new Error(`xpEvent: text of tag link is not a guid`)
						assOther.get(text, { link: last1, tag: last2 })
					}
				} else {
					console.error(`[E.XPEV]`, text, last1)
					throw new Error(`xpEvent: tag link with ID does not have a parent tag`)
				}
			}
			break;
	}
	if (printLog) console.log(xp.c, xp.line, xp.column, xp.endColumn, xp.pos,
		[
			ev.name,
			ev.id,
			!tag ? '' :
			tag.selfClose ? 'selfClose' :
			ev.id === '20' ? '' :
			tag.close ? 'close' :
			'open',
			ev.info ? [
				ev.info.strictOpenEvent ? 'sOpenEv' : '',
				ev.info.strictCloseEvent ? 'sCloseEv' : '',
			].filter(function(x) {return x;}).join(',') : '',
			buf ? [
				buf.line, buf.column, buf.endColumn, buf.pos,
			].join('.') : '',
		].join(':'),
		tag ? (
			'endInstruction' === ev.name ? tag.text :
			'endDeclaration' === ev.name ? tag.text :
			'endComment' === ev.name ? tag.textComment :
			'endCdata' === ev.name ? tag.textCdata :
			tag.name || ''
		) : ev.name === 'text' ? ev.text : '',
		attr && [attr.name, attr.value].join('=') || '',
		ev.sopen ? 'Strict «'+ev.sopen+'»' : '',
		bc.printPath(),
	);
}

function printColumn(c) {
	const len = c.props.length.text
	const lenStr = '-1' === len ? '' : `(${len})`
	const nn = c.props.isNotNull === '1'
	const nullStr = nn ? 'NOT NULL' : 'NULL'
	const def = c.props.defaultValue.text
	const defNull = c.props.defaultValueIsNull.text
	const defStr = defNull ? 'DEFAULT NULL' :
		null == def ? 'DEFAULT ""' :
		`DEFAULT ${JSON.stringify(def)}`
	const ai = c.props.autoIncrement.text === '1'
	const aiStr = ai ? 'AUTO_INC' : ''
	return `${c.props.name.text} ${simplifyType(c.props.simpleType.link)}${lenStr} ${nullStr} ${defStr} ${aiStr}`
}

function printIndex(i) {

}

function parseFile(fpath, callback) {

	var xp = new XMLParser(xpEvent);

	// var fpath = '../examples/not-pretty.xml';
	// var fpath = '../examples/test.html';
	var rs = fs.createReadStream(fpath, {
		encoding: 'utf8',
		highWaterMark: 256
	});

	rs.on('end', function() {
		xp.end();
		console.log('finished reading '+fpath, getStateName(xp), JSON.stringify(xp.buffer));
		callback instanceof Function && callback();
	});
	rs.on('data', function(text) {
		xp.write(text);
	});

}

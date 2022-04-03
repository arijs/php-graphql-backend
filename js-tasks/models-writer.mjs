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
import * as laminasDbModel from './model-writers/laminas-db/model.mjs'
import * as laminasDbTable from './model-writers/laminas-db/table.mjs'
import * as graphQLDefinition from './model-writers/graph-ql/definition.mjs'

const dirname = fileURLToPath(new URL('../src', import.meta.url)).replace(/\/+$/,'')

const modelDirName = `GraphQL/Definition`
const csvStreamOpt = {
	encoding: 'utf8',
	highWaterMark: 1024,
}

async function openModelDir() {
	await openDirArrayPromise(dirname, [modelDirName])
}

async function writeFile(table, { getFileName, printFile }) {
	const ws = await tryOpenWritePromise(
		pathJoin(dirname, modelDirName, getFileName(table)),
		csvStreamOpt
	)
	const data = printFile(t)
	await tryWriteStreamEnd(ws, data)
}

export async function writeModels(schema) {
	await openModelDir()

	const plist = []

	schema.tables.forEach(t => {

		// plist.push(writeFile(t, laminasDbModel))

		// plist.push(writeFile(t, laminasDbTable))

		plist.push(writeFile(t, graphQLDefinition))

	})

	await Promise.all(plist)
}

import {test} from "ava";
import {ImportExportKind} from "../src/service/interface/ISimpleLanguageService";
import {fileName, parse, service} from "./util/Setup";

test(`getExportDeclarations() -> Detects export declarations correctly. #1`, t => {

	const code = `
		export {Foo} from "${fileName}";
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #2`, t => {

	const code = `
		const Foo = "hello";
		const Bar = 2;
		export {Foo, Bar} from "${fileName}";
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(Object.keys(exportDeclarations[0].bindings).length === 2);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #3`, t => {

	const code = `
		export const Foo = "hello";
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #4`, t => {

	const code = `
		const Foo = "hello";
		export default Foo;
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1 && exportDeclarations[0].bindings["default"].kind === ImportExportKind.DEFAULT);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #5`, t => {

	const code = `
		export const foo = "hello";
		export const bar = 2;
		export * from "${fileName}";
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations[2] != null && Object.keys(exportDeclarations[2].bindings["*"].payload).length === 2);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #6`, t => {

	const code = `
		export default function foo () {};
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1 && exportDeclarations[0].bindings["default"].kind === ImportExportKind.DEFAULT);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #7`, t => {

	const code = `
		export default class Foo () {};
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1 && exportDeclarations[0].bindings["default"].kind === ImportExportKind.DEFAULT);
});

test(`getExportDeclarations() -> Detects export declarations correctly. #8`, t => {

	const code = `
		export default 2;
	`;

	const statements = parse(code);
	const exportDeclarations = service.getExportDeclarations(statements);
	t.true(exportDeclarations.length === 1 && exportDeclarations[0].bindings["default"].kind === ImportExportKind.DEFAULT);
});
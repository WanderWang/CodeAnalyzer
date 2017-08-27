import {test} from "ava";
import {ICodeAnalyzer} from "../src/code-analyzer/i-code-analyzer";
import {CodeAnalyzer} from "../src/code-analyzer/code-analyzer";

let codeAnalyzer: ICodeAnalyzer;
test.beforeEach(() => codeAnalyzer = new CodeAnalyzer());

test("foo", t => {
	const expressions = codeAnalyzer.getClassesForFile("./test/static/call-expressions");
	expressions.forEach(expression => {
		console.log(expression.toString());
	});
	t.true(true);
});
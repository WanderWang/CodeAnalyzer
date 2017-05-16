import {Expression, Node, Statement, SyntaxKind} from "typescript";
import {INameGetter} from "../getter/interface/INameGetter";
import {ISourceFilePropertiesGetter} from "../getter/interface/ISourceFilePropertiesGetter";
import {isArrowFunction, isClassDeclaration, isClassExpression, isFunctionDeclaration, isFunctionExpression, isMethodDeclaration, isPropertyDeclaration, isSourceFile} from "../predicate/PredicateFunctions";
import {ICallExpression, ICodeAnalyzer, IIdentifier, IIdentifierMap, IImportExportBinding, IParameter} from "../service/interface/ICodeAnalyzer";
import {Config} from "../static/Config";
import {ITracer} from "./interface/ITracer";

export class Tracer implements ITracer {

	constructor (private languageService: ICodeAnalyzer,
							 private nameGetter: INameGetter,
							 private sourceFilePropertiesGetter: ISourceFilePropertiesGetter) {
	}

	/**
	 * Finds matching declarations for the given identifier and returns the one that is nearest to the given statement.
	 * @param {Statement|Expression|Node} from
	 * @param {string} block
	 * @param {string} identifier
	 * @param {IIdentifierMap} clojure
	 * @returns {IIdentifier|null}
	 */
	public findNearestMatchingIdentifier (from: Statement|Expression|Node, block: string, identifier: string, clojure: IIdentifierMap): IIdentifier|null {

		const allMatches: IIdentifier[] = [];
		const functionMatch = clojure.functions[identifier];
		const enumMatch = clojure.enums[identifier];
		const variableMatch = clojure.variables[identifier];
		const classMatch = clojure.classes[identifier];

		let parameterMatches: IParameter[] = [];

		if (this.isChildOfAnyOfKinds([SyntaxKind.FunctionExpression, SyntaxKind.FunctionDeclaration], block, from)) {
			Object.keys(clojure.functions).forEach(key => {
				const parameters = clojure.functions[key].parameters.parametersList;
				const parameter = parameters.find(parameter => parameter.name.some(part => part === identifier));
				if (parameter != null) parameterMatches.push(parameter);
			});
		}

		if (this.isChildOfKind(SyntaxKind.MethodDeclaration, block, from)) {
			Object.keys(clojure.classes).forEach(key => {
				const methods = clojure.classes[key].methods;
				Object.keys(methods).forEach(methodName => {
					const parameters = methods[methodName].parameters.parametersList;
					const parameter = parameters.find(parameter => parameter.name.some(part => part === identifier));
					if (parameter != null) parameterMatches.push(parameter);
				});
			});
		}

		if (this.isChildOfKind(SyntaxKind.ArrowFunction, block, from)) {
			// TODO: Add this functionality.
		}

		const requireMatches: ICallExpression[] = [];
		if (identifier === "require") {
			clojure.callExpressions.forEach(callExpression => {
				if (callExpression.identifier === "require") requireMatches.push(callExpression);
			});
		}

		const importBindingMatches: IImportExportBinding[] = [];
		clojure.imports.forEach(importDeclaration => {
			const match = importDeclaration.bindings[identifier];
			if (match != null) importBindingMatches.push(match);
		});

		const exportBindingMatches: IImportExportBinding[] = [];
		clojure.exports.forEach(exportDeclaration => {
			const match = exportDeclaration.bindings[identifier];
			if (match != null) exportBindingMatches.push(match);
		});

		if (functionMatch != null) allMatches.push(functionMatch);
		if (enumMatch != null) allMatches.push(enumMatch);
		if (variableMatch != null) allMatches.push(variableMatch);
		if (classMatch != null) allMatches.push(classMatch);

		importBindingMatches.forEach(match => allMatches.push(match));
		exportBindingMatches.forEach(match => allMatches.push(match));
		requireMatches.forEach(match => allMatches.push(match));
		parameterMatches.forEach(parameterMatch => allMatches.push(parameterMatch));

		const closest = allMatches.sort((a, b) => {
			const aDistanceFromStart = from.pos - a.startsAt;
			const bDistanceFromStart = from.pos - b.startsAt;
			if (aDistanceFromStart < bDistanceFromStart) return -1;
			if (aDistanceFromStart > bDistanceFromStart) return 1;
			return 0;
		})[0];

		if (identifier === "require") {

		}

		return closest == null ? null : closest;
	}

	/**
	 * Attempts to find the variable, class, function, import, enum, export, etc that is related to the given identifier.
	 * It starts from the given file.
	 * @param {string} identifier
	 * @param {Statement|Expression|Node} from
	 * @param {string|null} scope
	 * @returns {IIdentifier|null}
	 */
	public traceIdentifier (identifier: string, from: Statement|Expression|Node, scope: string|null): IIdentifier|null|string {
		if (identifier === "this" && scope == null) throw new ReferenceError(`${this.traceIdentifier.name} could not trace the context of 'this' when no scope was given!`);
		const lookupIdentifier = identifier === "this" && scope != null && scope !== Config.name.global ? scope : identifier;

		const clojure = this.traceClojure(from);
		const block = this.traceBlockScopeName(from);
		return typeof clojure === "string" ? clojure : this.findNearestMatchingIdentifier(from, block, lookupIdentifier, clojure);
	}

	/**
	 * Attempts to find the identifying name for 'this' in the given context from the given statement.
	 * @param {Statement|Expression|Node} statement
	 * @returns {string}
	 */
	public traceThis (statement: Statement|Expression|Node): string {
		return this.traceBlock(statement, block => {

			if (isSourceFile(block)) {
				return Config.name.global;
			}

			if (
				isFunctionExpression(block) ||
				isFunctionDeclaration(block)
			) {
				const name = block.name == null ? block.parent == null ? Config.name.global : this.traceThis(block.parent) : this.nameGetter.getName(block);
				return name == null ? Config.name.global : name;
			}

			if (
				isClassDeclaration(block) ||
				isClassExpression(block)
			) {
				const name = this.nameGetter.getName(block);
				return name == null ? Config.name.global : name;
			}

			if (
				isMethodDeclaration(block) ||
				isPropertyDeclaration(block)
			) {
				if (block.parent == null) {
					const name = this.nameGetter.getName(block);
					return name == null ? Config.name.global : name;
				}
				return this.traceThis(block.parent);
			}

			if (isArrowFunction(block)) {
				return block.parent == null ? Config.name.global : this.traceThis(block.parent);
			}

			throw new TypeError(`${this.traceThis.name} could not trace a 'this' value for a statement of kind ${SyntaxKind[statement.kind]}`);
		});
	}

	/**
	 * Traces the clojure (snapshots the available state) from the given statement (e.g. which identifiers it has access to)
	 * and returns an IIdentifierMap.
	 * @param {Statement|Expression|Node|string} from
	 * @returns {IIdentifierMap}
	 */
	public traceClojure (from: Statement|Expression|Node|string): IIdentifierMap|string {
		const filePath = typeof from === "string" ? from : this.sourceFilePropertiesGetter.getSourceFileProperties(from).filePath;
		if (Config.builtIns.has(filePath)) {
			return filePath;
		}

		// TODO: We shouldn't go deep and get ALL identifiers (which will ignore concepts such as conditional branches or even if the statement has access to the statement).
		return this.languageService.getAllIdentifiersForFile(filePath, true);
	}

	/**
	 * Attempts to find the proper name for the block scope that the current statement lives within.
	 * @param {Statement|Expression|Node} statement
	 * @returns {string}
	 */
	public traceBlockScopeName (statement: Statement|Expression|Node): string {
		return this.traceBlock(statement, block => {

			if (isSourceFile(block)) {
				return Config.name.global;
			}

			if (
				isFunctionExpression(block) ||
				isFunctionDeclaration(block) ||
				isMethodDeclaration(block) ||
				isClassDeclaration(block) ||
				isClassExpression(block)
			) {
				const name = this.nameGetter.getName(block);
				return name == null ? Config.name.global : name;
			}

			if (
				isPropertyDeclaration(block)
			) {
				if (block.parent == null) {
					const name = this.nameGetter.getName(block);
					return name == null ? Config.name.global : name;
				}
				return this.traceBlockScopeName(block.parent);
			}

			if (isArrowFunction(block)) {
				return Config.name.anonymous;
			}

			throw new TypeError(`${this.traceBlockScopeName.name} could not trace a block scope of a statement of knd ${SyntaxKind[statement.kind]}`);
		});
	}

	/**
	 * Finds the nearest relevant block and calls the given extractor function with it.
	 * @param {Statement|Expression|Node} statement
	 * @param {(statement: Statement|Expression|Node) => string} extractor
	 * @returns {string}
	 */
	private traceBlock (statement: Statement|Expression|Node, extractor: (statement: Statement|Expression|Node) => string): string {
		let current: Statement|Expression|Node = statement;

		while (
			!isClassDeclaration(current) &&
			!isClassExpression(current) &&
			!isFunctionExpression(current) &&
			!isFunctionDeclaration(current) &&
			!isMethodDeclaration(current) &&
			!isArrowFunction(current) &&
			!isPropertyDeclaration(current) &&
			!isSourceFile(current)) {
			if (current.parent == null) break;
			current = current.parent;
		}

		return extractor(current);
	}

	/**
	 * Returns true if the given statement is child of a statement of any of the provided kinds.
	 * @param {SyntaxKind[]} kinds
	 * @param {string} identifier
	 * @param {Statement|Expression|Node} from
	 * @returns {boolean}
	 */
	private isChildOfAnyOfKinds (kinds: SyntaxKind[], identifier: string, from: Statement|Expression|Node): boolean {
		return kinds.some(kind => this.isChildOfKind(kind, identifier, from));
	}

	/**
	 * Returns true if the given statement is child of a statement of the provided kind.
	 * @param {SyntaxKind} kind
	 * @param {string} identifier
	 * @param {Statement|Expression|Node} from
	 * @returns {boolean}
	 */
	private isChildOfKind (kind: SyntaxKind, identifier: string, from: Statement|Expression|Node): boolean {
		let current: Statement|Expression|Node|undefined = from;
		while (current != null) {
			if (current.kind === kind && this.nameGetter.getName(current) === identifier) return true;
			current = current.parent;
		}
		return false;
	}
}
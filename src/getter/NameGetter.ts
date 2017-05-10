import {IMarshaller} from "@wessberg/marshaller";
import {DeclarationName, Expression, Node, Statement, SyntaxKind, TypeNode, TypeReferenceNode, Identifier} from "typescript";
import {INameGetter} from "./interface/INameGetter";
import {ArbitraryValue} from "../interface/ISimpleLanguageService";
import {isArrayLiteralExpression, isBindingElement, isCallExpression, isClassDeclaration, isClassExpression, isComputedPropertyName, isDecorator, isElementAccessExpression, isEnumDeclaration, isEnumMember, isExportSpecifier, isExpressionWithTypeArguments, isExternalModuleReference, isFirstLiteralToken, isFunctionDeclaration, isFunctionExpression, isIdentifierObject, isImportSpecifier, isMethodDeclaration, isNamespaceImport, isObjectLiteralExpression, isParameterDeclaration, isParenthesizedExpression, isPropertyAccessExpression, isPropertyAssignment, isPropertyDeclaration, isPropertyName, isPropertySignature, isRegularExpressionLiteral, isStringLiteral, isThisKeyword, isTypeAssertionExpression, isTypeReference, isVariableDeclaration, isTemplateMiddle, isTemplateHead, isNumericLiteral, isTemplateExpression, isTemplateTail, isTypeReferenceNode} from "../PredicateFunctions";
import {BindingIdentifier} from "../BindingIdentifier";

export class NameGetter implements INameGetter {

	constructor (private marshaller: IMarshaller) {}

	public getName (statement: Statement | Expression | Node | TypeNode | TypeReferenceNode): string | null {
		if (
			isBindingElement(statement) ||
			isParameterDeclaration(statement) ||
			isPropertySignature(statement) ||
			isPropertyDeclaration(statement) ||
			isPropertyAssignment(statement) ||
			isVariableDeclaration(statement) ||
			isFunctionDeclaration(statement) ||
			isFunctionExpression(statement) ||
			isClassDeclaration(statement) ||
			isClassExpression(statement) ||
			isMethodDeclaration(statement) ||
			isPropertyAccessExpression(statement) ||
			isEnumDeclaration(statement) ||
			isEnumMember(statement) ||
			isImportSpecifier(statement) ||
			isExportSpecifier(statement) ||
			isNamespaceImport(statement)
		) {
			return statement.name == null ? null : <string>this.getNameOfMember(statement.name, false, true);
		}

		if (isIdentifierObject(statement)) {
			return <string>this.getNameOfMember(statement, false, true);
		}

		if (
			(isTypeReferenceNode(statement) || isTypeReference(statement)) &&
			isIdentifierObject(statement.typeName)
		) {
			return <string>this.getNameOfMember(statement.typeName, false, true);
		}

		if (
			isExpressionWithTypeArguments(statement) ||
			isCallExpression(statement) ||
			isDecorator(statement) ||
			isExternalModuleReference(statement)
		) {
			return statement.expression == null ? null : <string>this.getNameOfMember(statement.expression, false, true);
		}
		return null;
	}

	/**
	 * Detects the name/key of a member of something (for example, an ObjectLiteral). If the second argument is truthy,
	 * the name may also be a non-string entity.
	 * @param {DeclarationName} name
	 * @param {boolean} [allowNonStringNames=false]
	 * @param {boolean} [forceNoBindingIdentifier=false]
	 * @returns {ArbitraryValue}
	 */
	public getNameOfMember (name: DeclarationName | Expression, allowNonStringNames: boolean = false, forceNoBindingIdentifier: boolean = false): ArbitraryValue {

		if (isTypeAssertionExpression(name)) {
			return this.getNameOfMember(name.expression, allowNonStringNames, forceNoBindingIdentifier);
		}

		if (isComputedPropertyName(name)) {
			if (isPropertyName(name.expression)) {
				if (isComputedPropertyName(name.expression)) return this.getNameOfMember(name.expression, allowNonStringNames, false);
				return this.getNameOfMember(name.expression, allowNonStringNames, false);
			}

			if (isCallExpression(name.expression)) {
				return this.getNameOfMember(name.expression.expression, allowNonStringNames, forceNoBindingIdentifier);
			}

			throw new TypeError(`${this.getNameOfMember.name} could not compute the name of a ${SyntaxKind[name.kind]}: It wasn't a PropertyName or a CallExpression. Instead, it was a ${SyntaxKind[name.expression.kind]}`);
		}

		if (isIdentifierObject(name)) {
			const marshalled = this.marshaller.marshal<string, ArbitraryValue>(name.text, allowNonStringNames ? undefined : "");

			if (this.memberHasNoBindingIdentifier(name)) {
				// Then this is the key of a property-assignment. We already know it isn't computed, so it can't be an identifier to another variable.
				return marshalled;
			}

			// Otherwise, it most likely is a reference to a variable or other Identifier unless it is a global symbol like "Infinity" or "Nan".
			if (this.marshaller.getTypeOf(this.marshaller.marshal<ArbitraryValue, ArbitraryValue>(name.text)) === "string" && !forceNoBindingIdentifier) {
				return new BindingIdentifier(name.text);
			}
			return marshalled;
		}

		if (isFirstLiteralToken(name)) {
			return this.marshaller.marshal<string, ArbitraryValue>(name.text, allowNonStringNames ? undefined : "");
		}

		if (isStringLiteral(name)) {
			return name.text;
		}

		if (isThisKeyword(name)) {
			return new BindingIdentifier("this");
		}

		if (isRegularExpressionLiteral(name)) {
			return this.marshaller.marshal<string, RegExpConstructor>(name.text, RegExp);
		}

		if (isPropertyAccessExpression(name)) {
			const baseName = <string>this.getNameOfMember(name.expression, false, false);

			return new BindingIdentifier(baseName.toString());
		}

		if (isCallExpression(name)) {
			return this.getNameOfMember(name.expression, allowNonStringNames, forceNoBindingIdentifier);
		}

		if (isParenthesizedExpression(name)) {
			return this.getNameOfMember(name.expression, allowNonStringNames, forceNoBindingIdentifier);
		}

		if (isFunctionExpression(name)) {
			return name.name == null ? null : this.getNameOfMember(name.name, allowNonStringNames, forceNoBindingIdentifier);
		}

		if (isElementAccessExpression(name)) {
			const baseName = <string>this.getNameOfMember(name.expression, false, false);

			return new BindingIdentifier(baseName.toString());
		}

		throw new TypeError(`${this.getNameOfMember.name} could not compute the name of a ${SyntaxKind[name.kind]}.`);
	}

	/**
	 * Returns true if the name of an identifier cannot be computed or refer to another identifier.
	 * @param {Statement} statement
	 * @returns {boolean}
	 */
	private memberHasNoBindingIdentifier (statement: Statement | Identifier): boolean {
		const parent = statement.parent;
		if (parent == null) return false;


		// If this is an identifier and the parent is a property access expression on a
		// parenthesized, array or object literal expression (e.g. (something || []).concat(otherThing)),
		// The right-hand side property access should never be attached to a BindingIdentifier.
		if (
			isIdentifierObject(statement) &&
			isPropertyAccessExpression(parent) &&
			(
				isCallExpression(parent.expression) ||
				isParenthesizedExpression(parent.expression) ||
				isStringLiteral(parent.expression) ||
				isNumericLiteral(parent.expression) ||
				isTemplateExpression(parent.expression) ||
				isTemplateHead(parent.expression) ||
				isTemplateMiddle(parent.expression) ||
				isTemplateTail(parent.expression) ||
				isArrayLiteralExpression(parent.expression) ||
				isObjectLiteralExpression(parent.expression) ||
				isPropertyAccessExpression(parent.expression)
			)
		) return true;

		// If this is the name of a method, function or parameter, it cannot be a BindingIdentifier.
		if (
			isIdentifierObject(statement) &&
			(
				isMethodDeclaration(parent) ||
				isFunctionDeclaration(parent) ||
				isFunctionExpression(parent) ||
				isParameterDeclaration(parent)
			)
		) return true;

		return false;
	}
}
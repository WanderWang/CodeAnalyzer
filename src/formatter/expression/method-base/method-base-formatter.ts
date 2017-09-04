import {IMethodBaseFormatter} from "./i-method-base-formatter";
import {MethodDeclaration, SyntaxKind} from "typescript";
import {AstMapperGetter} from "../../../mapper/ast-mapper/ast-mapper-getter";
import {FormattedExpressionKind, IFormattedMethodBase} from "@wessberg/type";
import {PropertyNameFormatterGetter} from "../property-name/property-name-formatter-getter";
import {FunctionLikeFormatterGetter} from "../function-like/function-like-formatter-getter";
import {FormattedExpressionFormatter} from "../formatted-expression/formatted-expression-formatter";
import {DecoratorFormatterGetter} from "../decorator/decorator-formatter-getter";
import {TypeParameterFormatterGetter} from "../../type/type-parameter-formatter/type-parameter-formatter-getter";
import {ParameterFormatterGetter} from "../parameter/parameter-formatter-getter";

/**
 * An abstract class that can format MethodDeclarations
 */
export abstract class MethodBaseFormatter extends FormattedExpressionFormatter implements IMethodBaseFormatter {
	constructor (protected astMapper: AstMapperGetter,
							 private functionLikeFormatter: FunctionLikeFormatterGetter,
							 private propertyNameFormatter: PropertyNameFormatterGetter,
							 private decoratorFormatter: DecoratorFormatterGetter,
							 private parameterFormatter: ParameterFormatterGetter,
							 private typeParameterFormatter: TypeParameterFormatterGetter) {
		super();
	}

	/**
	 * Formats the given MethodDeclaration into a IFormattedMethodBase
	 * @param {MethodDeclaration} expression
	 * @returns {IFormattedMethodBase}
	 */
	public format (expression: MethodDeclaration): IFormattedMethodBase {
		const result: IFormattedMethodBase = {
			...this.functionLikeFormatter().format(expression),
			...super.format(expression),
			name: this.propertyNameFormatter().format(expression.name),
			parameters: expression.parameters.map(parameter => this.parameterFormatter().format(parameter)),
			decorators: expression.decorators == null ? [] : expression.decorators.map(decorator => this.decoratorFormatter().format(decorator)),
			async: expression.modifiers == null ? false : expression.modifiers.find(modifier => modifier.kind === SyntaxKind.AsyncKeyword) != null,
			typeParameters: expression.typeParameters == null ? [] : expression.typeParameters.map(typeParameter => this.typeParameterFormatter().format(typeParameter)),
			expressionKind: FormattedExpressionKind.METHOD
		};

		// Override the 'toString()' method
		result.toString = () => this.stringify(result);
		return result;
	}

	/**
	 * Generates a string representation of the IFormattedMethodBase
	 * @param {IFormattedMethodBase} formatted
	 * @returns {string}
	 */
	protected stringify (formatted: IFormattedMethodBase): string {
		let str = "";
		// Add decorators in top
		str += `${formatted.decorators.map(decorator => decorator.toString()).join("\\n")}\n`;
		if (formatted.async) str += "async ";
		str += `${formatted.name.toString()} `;
		if (formatted.typeParameters.length > 0) {
			str += `<${formatted.typeParameters.map(parameter => parameter.toString()).join(", ")}>`;
		}
		str += `(${formatted.parameters.map(parameter => parameter.toString()).join(", ")}) `;

		if (formatted.body != null) {
			// Add the opening bracket
			str += "{";
			str += formatted.body.toString();
			// Add the closing bracket
			str += "}";
		} else str += ";";
		return str;
	}

}
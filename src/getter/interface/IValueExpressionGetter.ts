import {Expression, Node, Statement} from "typescript";
import {InitializationValue} from "../../interface/ISimpleLanguageService";

export interface IValueExpressionGetter {
	getValueExpression (rawStatement: Statement | Expression | Node): InitializationValue;
}
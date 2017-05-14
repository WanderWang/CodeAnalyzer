import {ArrayBindingPattern, ArrayLiteralExpression, ArrayTypeNode, ArrowFunction, AwaitExpression, BinaryExpression, BindingElement, BindingName, BindingPattern, Block, BooleanLiteral, BreakStatement, CallExpression, CaseBlock, CaseClause, CatchClause, ClassDeclaration, ClassExpression, ComputedPropertyName, ConditionalExpression, ConstructorDeclaration, ContinueStatement, Declaration, DeclarationName, Decorator, DefaultClause, DeleteExpression, DoStatement, ElementAccessExpression, EmptyStatement, EntityName, EnumDeclaration, EnumMember, ExportAssignment, ExportDeclaration, ExportSpecifier, Expression, ExpressionStatement, ExpressionWithTypeArguments, ExternalModuleReference, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, HeritageClause, Identifier, IfStatement, ImportClause, ImportDeclaration, ImportEqualsDeclaration, ImportSpecifier, IndexSignatureDeclaration, IntersectionTypeNode, KeywordTypeNode, LabeledStatement, MethodDeclaration, Modifier, NamedImports, NamespaceImport, NewExpression, Node, NoSubstitutionTemplateLiteral, NumericLiteral, ObjectBindingPattern, ObjectLiteralExpression, OmittedExpression, ParameterDeclaration, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, PropertyAssignment, PropertyDeclaration, PropertyName, PropertySignature, RegularExpressionLiteral, ReturnStatement, ShorthandPropertyAssignment, SourceFile, SpreadAssignment, SpreadElement, Statement, StringLiteral, SwitchStatement, SyntaxKind, TemplateExpression, TemplateHead, TemplateMiddle, TemplateSpan, TemplateTail, ThisExpression, ThrowStatement, Token, TryStatement, TupleTypeNode, TypeAliasDeclaration, TypeAssertion, TypeLiteralNode, TypeNode, TypeOfExpression, TypeReferenceNode, UnionTypeNode, VariableDeclaration, VariableDeclarationList, VariableStatement, WhileStatement} from "typescript";
import {ArbitraryValue, IClassDeclaration, IdentifierMapKind, IEnumDeclaration, IExportableIIdentifier, IFunctionDeclaration, IIdentifier, IImportExportBinding, IParameter, ITypeBinding, IVariableAssignment, LiteralExpression, NamespacedModuleMap} from "../service/interface/ICodeAnalyzer";

/**
 * A predicate function that returns true if the given Statement is an ObjectLiteralExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isObjectLiteralExpression (statement: Statement | Declaration | Expression | Node): statement is ObjectLiteralExpression {
	return statement.kind === SyntaxKind.ObjectLiteralExpression;
}

/**
 * A predicate function that returns true if the given Statement is a VariableStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isVariableStatement (statement: Statement | Declaration | Expression | Node): statement is VariableStatement {
	return statement.kind === SyntaxKind.VariableStatement;
}

/**
 * A predicate function that returns true if the given Statement is a VariableDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isVariableDeclaration (statement: Statement | Declaration | Expression | Node): statement is VariableDeclaration {
	return statement.kind === SyntaxKind.VariableDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a PropertyAccessExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPropertyAccessExpression (statement: Statement | Declaration | Expression | Node): statement is PropertyAccessExpression {
	return statement.kind === SyntaxKind.PropertyAccessExpression;
}

/**
 * A predicate function that returns true if the given Statement is a PropertyDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPropertyDeclaration (statement: Statement | Declaration | Expression | Node): statement is PropertyDeclaration {
	return statement.kind === SyntaxKind.PropertyDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a PropertySignature.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPropertySignature (statement: Statement | Declaration | Expression | Node): statement is PropertySignature {
	return statement.kind === SyntaxKind.PropertySignature;
}

/**
 * A predicate function that returns true if the given Statement is an ElementAccessExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isElementAccessExpression (statement: Statement | Declaration | Expression | Node): statement is ElementAccessExpression {
	return statement.kind === SyntaxKind.ElementAccessExpression;
}

/**
 * A predicate function that returns true if the given Statement is any literal expression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isLiteralExpression (statement: Statement | Declaration | Expression | Node): statement is LiteralExpression {
	switch (statement.kind) {
		case SyntaxKind.ArrayLiteralExpression:
		case SyntaxKind.StringLiteral:
		case SyntaxKind.NumericLiteral:
		case SyntaxKind.TrueKeyword:
		case SyntaxKind.FalseKeyword:
		case SyntaxKind.NoSubstitutionTemplateLiteral:
		case SyntaxKind.RegularExpressionLiteral:
		case SyntaxKind.ObjectLiteralExpression:
			return true;
		default:
			return false;
	}
}

/**
 * A predicate function that returns true if the given Statement is an ArrayLiteralExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isArrayLiteralExpression (statement: Statement | Declaration | Expression | Node): statement is ArrayLiteralExpression {
	return statement.kind === SyntaxKind.ArrayLiteralExpression;
}

/**
 * A predicate function that returns true if the given Statement is a TypeAssertion.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTypeAssertionExpression (statement: Statement | Declaration | Expression | Node): statement is TypeAssertion {
	return statement.kind === SyntaxKind.TypeAssertionExpression;
}

/**
 * A predicate function that returns true if the given Statement is an ExternalModuleReference.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExternalModuleReference (statement: Statement | Declaration | Expression | Node): statement is ExternalModuleReference {
	return statement.kind === SyntaxKind.ExternalModuleReference;
}

/**
 * A predicate function that returns true if the given Statement is an NoSubstitutionTemplateLiteral.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNoSubstitutionTemplateLiteral (statement: Statement | Declaration | Expression | Node): statement is NoSubstitutionTemplateLiteral {
	return statement.kind === SyntaxKind.NoSubstitutionTemplateLiteral;
}

/**
 * A predicate function that returns true if the given Statement is a a TemplateExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateExpression (statement: Statement | Declaration | Expression | Node): statement is TemplateExpression {
	return statement.kind === SyntaxKind.TemplateExpression || statement.kind === SyntaxKind.TaggedTemplateExpression;
}

/**
 * A predicate function that returns true if the given Statement is a an ArrowFunction.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isArrowFunction (statement: Statement | Declaration | Expression | Node): statement is ArrowFunction {
	return statement.kind === SyntaxKind.ArrowFunction;
}

/**
 * A predicate function that returns true if the given Statement is a a LabeledStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isLabeledStatement (statement: Statement | Declaration | Expression | Node): statement is LabeledStatement {
	return statement.kind === SyntaxKind.LabeledStatement;
}

/**
 * A predicate function that returns true if the given Statement is a FunctionExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isFunctionExpression (statement: Statement | Declaration | Expression | Node): statement is FunctionExpression {
	return statement.kind === SyntaxKind.FunctionExpression;
}

/**
 * A predicate function that returns true if the given Statement is a FunctionDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isFunctionDeclaration (statement: Statement | Declaration | Expression | Node): statement is FunctionDeclaration {
	return statement.kind === SyntaxKind.FunctionDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is an AwaitExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isAwaitExpression (statement: Statement | Declaration | Expression | Node): statement is AwaitExpression {
	return statement.kind === SyntaxKind.AwaitExpression;
}

/**
 * A predicate function that returns true if the given Statement is an TemplateSpan.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateSpan (statement: Statement | Declaration | Expression | Node): statement is TemplateSpan {
	return statement.kind === SyntaxKind.TemplateSpan;
}

/**
 * A predicate function that returns true if the given Statement is an ConditionalExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isConditionalExpression (statement: Statement | Declaration | Expression | Node): statement is ConditionalExpression {
	return statement.kind === SyntaxKind.ConditionalExpression;
}

/**
 * A predicate function that returns true if the given Statement is an CallExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isCallExpression (statement: Statement | Declaration | Expression | Node): statement is CallExpression {
	return statement.kind === SyntaxKind.CallExpression;
}

/**
 * A predicate function that returns true if the given Statement is a PrefixUnaryExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPrefixUnaryExpression (statement: Statement | Declaration | Expression | Node): statement is PrefixUnaryExpression {
	return statement.kind === SyntaxKind.PrefixUnaryExpression;
}

/**
 * A predicate function that returns true if the given Statement is a PostfixUnaryExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPostfixUnaryExpression (statement: Statement | Declaration | Expression | Node): statement is PostfixUnaryExpression {
	return statement.kind === SyntaxKind.PostfixUnaryExpression;
}

/**
 * A predicate function that returns true if the given Statement is a TypeOfExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTypeOfExpression (statement: Statement | Declaration | Expression | Node): statement is TypeOfExpression {
	return statement.kind === SyntaxKind.TypeOfExpression;
}

/**
 * A predicate function that returns true if the given Statement is a TryStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTryStatement (statement: Statement | Declaration | Expression | Node): statement is TryStatement {
	return statement.kind === SyntaxKind.TryStatement;
}

/**
 * A predicate function that returns true if the given Statement is a CatchClause.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isCatchClause (statement: Statement | Declaration | Expression | Node): statement is CatchClause {
	return statement.kind === SyntaxKind.CatchClause;
}

/**
 * A predicate function that returns true if the given Statement is a ParenthesizedExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 */
export function isParenthesizedExpression (statement: Statement | Declaration | Expression | Node): statement is ParenthesizedExpression {
	return statement.kind === SyntaxKind.ParenthesizedExpression;
}

/**
 * A predicate function that returns true if the given Statement is a ParameterDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isParameterDeclaration (statement: Statement | Declaration | Expression | Node): statement is ParameterDeclaration {
	return statement.kind === SyntaxKind.Parameter;
}

/**
 * A predicate function that returns true if the given Statement is a BinaryExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBinaryExpression (statement: Statement | Declaration | Expression | Node): statement is BinaryExpression {
	return statement.kind === SyntaxKind.BinaryExpression;
}

/**
 * A predicate function that returns true if the given Statement is an ImportDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isImportDeclaration (statement: Statement | Declaration | Expression | Node): statement is ImportDeclaration {
	return statement.kind === SyntaxKind.ImportDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a NamespaceImport.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNamespaceImport (statement: Statement | Declaration | Expression | Node): statement is NamespaceImport {
	return statement.kind === SyntaxKind.NamespaceImport;
}

/**
 * A predicate function that returns true if the given Statement is an ImportClause.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isImportClause (statement: Statement | Declaration | Expression | Node): statement is ImportClause {
	return statement.kind === SyntaxKind.ImportClause;
}

/**
 * A predicate function that returns true if the given Statement is an ImportEqualsDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isImportEqualsDeclaration (statement: Statement | Declaration | Expression | Node): statement is ImportEqualsDeclaration {
	return statement.kind === SyntaxKind.ImportEqualsDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is an IfStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isIfStatement (statement: Statement | Declaration | Expression | Node): statement is IfStatement {
	return statement.kind === SyntaxKind.IfStatement;
}

/**
 * A predicate function that returns true if the given Statement is an EnumDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isEnumDeclaration (statement: Statement | Declaration | Expression | Node): statement is EnumDeclaration {
	return statement.kind === SyntaxKind.EnumDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is an EnumMember.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isEnumMember (statement: Statement | Declaration | Expression | Node): statement is EnumMember {
	return statement.kind === SyntaxKind.EnumMember;
}

/**
 * A predicate function that returns true if the given Statement is an ImportSpecifier.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isImportSpecifier (statement: Statement | Declaration | Expression | Node): statement is ImportSpecifier {
	return statement.kind === SyntaxKind.ImportSpecifier;
}

/**
 * A predicate function that returns true if the given Statement is an ExportSpecifier.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExportSpecifier (statement: Statement | Declaration | Expression | Node): statement is ExportSpecifier {
	return statement.kind === SyntaxKind.ExportSpecifier;
}

/**
 * A predicate function that returns true if the given Statement is an ExportAssignment.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExportAssignment (statement: Statement | Declaration | Expression | Node): statement is ExportAssignment {
	return statement.kind === SyntaxKind.ExportAssignment;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'true'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTrueKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is BooleanLiteral {
	return statement.kind === SyntaxKind.TrueKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'static'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isStaticKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is Modifier {
	return statement.kind === SyntaxKind.StaticKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'false'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isFalseKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is BooleanLiteral {
	return statement.kind === SyntaxKind.FalseKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'undefined'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isUndefinedKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.UndefinedKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'null'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNullKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.NullKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'string'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isStringKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.StringKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'symbol'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isSymbolKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.SymbolKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'void'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isVoidKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.VoidKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'any'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isAnyKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.AnyKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'boolean'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBooleanKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.BooleanKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'never'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNeverKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.NeverKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'number'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNumberKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.NumberKeyword;
}

/**
 * A predicate function that returns true if the given Statement is a NumericLiteral.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNumericLiteral (statement: TypeNode | Statement | Declaration | Expression | Node): statement is NumericLiteral {
	return statement.kind === SyntaxKind.NumericLiteral;
}

/**
 * A predicate function that returns true if the given Statement is an ObjectBindingPattern.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isObjectBindingPattern (statement: TypeNode | Statement | Declaration | Expression | Node): statement is ObjectBindingPattern {
	return statement.kind === SyntaxKind.ObjectBindingPattern;
}

/**
 * A predicate function that returns true if the given Statement is an ArrayBindingPattern.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isArrayBindingPattern (statement: TypeNode | Statement | Declaration | Expression | Node): statement is ArrayBindingPattern {
	return statement.kind === SyntaxKind.ArrayBindingPattern;
}

/**
 * A predicate function that returns true if the given Statement is an OmittedExpression.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isOmittedExpression (statement: TypeNode | Statement | Declaration | Expression | Node): statement is OmittedExpression {
	return statement.kind === SyntaxKind.OmittedExpression;
}

/**
 * A predicate function that returns true if the given Statement is a BindingElement.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBindingElement (statement: TypeNode | Statement | Declaration | Expression | Node): statement is BindingElement {
	return statement.kind === SyntaxKind.BindingElement;
}

/**
 * A predicate function that returns true if the given Statement is an ArrayBindingPattern.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBindingPattern (statement: TypeNode | Statement | Declaration | Expression | Node): statement is BindingPattern {
	return isObjectBindingPattern(statement) || isArrayBindingPattern(statement);
}

/**
 * A predicate function that returns true if the given Statement is a PropertyName.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPropertyName (statement: Expression | Node): statement is PropertyName {
	return isIdentifierObject(statement) ||
		isStringLiteral(statement) ||
		isNumericLiteral(statement) ||
		isComputedPropertyName(statement);
}

/**
 * A predicate function that returns true if the given Statement is a DeclarationName.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isDeclarationName (statement: Expression | Node): statement is DeclarationName {
	return isPropertyName(statement) || isBindingPattern(statement);
}

/**
 * A predicate function that returns true if the given Statement is a TemplateHead.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateHead (statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateHead {
	return statement.kind === SyntaxKind.TemplateHead;
}

/**
 * A predicate function that returns true if the given Statement is a TemplateMiddle.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateMiddle (statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateMiddle {
	return statement.kind === SyntaxKind.TemplateMiddle;
}

/**
 * A predicate function that returns true if the given Statement is a TemplateTail.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateTail (statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateTail {
	return statement.kind === SyntaxKind.TemplateTail;
}

/**
 * A predicate function that returns true if the given Statement is a StringLiteral.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isStringLiteral (statement: TypeNode | Statement | Declaration | Expression | Node): statement is StringLiteral {
	return statement.kind === SyntaxKind.StringLiteral;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'object'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isObjectKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode {
	return statement.kind === SyntaxKind.ObjectKeyword;
}

/**
 * A predicate function that returns true if the given Statement is the keyword 'this'.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isThisKeyword (statement: Statement | Declaration | Expression | Node): statement is ThisExpression {
	return statement.kind === SyntaxKind.ThisKeyword;
}

/**
 * A predicate function that returns true if the given Statement is a ForStatement
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isForStatement (statement: Statement | Declaration | Expression | Node): statement is ForStatement {
	return statement.kind === SyntaxKind.ForStatement;
}

/**
 * A predicate function that returns true if the given Statement is a ForOfStatement
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isForOfStatement (statement: Statement | Declaration | Expression | Node): statement is ForOfStatement {
	return statement.kind === SyntaxKind.ForOfStatement;
}

/**
 * A predicate function that returns true if the given Statement is a ForInStatement
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isForInStatement (statement: Statement | Declaration | Expression | Node): statement is ForInStatement {
	return statement.kind === SyntaxKind.ForInStatement;
}

/**
 * A predicate function that returns true if the given Statement is a SwitchStatement.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isSwitchStatement (statement: Statement | Declaration | Expression | Node): statement is SwitchStatement {
	return statement.kind === SyntaxKind.SwitchStatement;
}

/**
 * A predicate function that returns true if the given Statement is a CaseBlock.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isCaseBlock (statement: Statement | Declaration | Expression | Node): statement is CaseBlock {
	return statement.kind === SyntaxKind.CaseBlock;
}

/**
 * A predicate function that returns true if the given Statement is a WhileStatement.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isWhileStatement (statement: Statement | Declaration | Expression | Node): statement is WhileStatement {
	return statement.kind === SyntaxKind.WhileStatement;
}

/**
 * A predicate function that returns true if the given Statement is a VariableDeclarationList.
 * @param {TypeNode|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isVariableDeclarationList (statement: Statement | Declaration | Expression | Node): statement is VariableDeclarationList {
	return statement.kind === SyntaxKind.VariableDeclarationList;
}

/**
 * A predicate function that returns true if the given Statement is a TypeNode
 * @param {ParameterDeclaration|TypeAliasDeclaration|TypeNode} statement
 * @returns {boolean}
 */
export function isTypeNode (statement: ParameterDeclaration | TypeAliasDeclaration | TypeNode): statement is TypeNode {
	return isThisKeyword(statement) ||
		isArrayTypeNode(statement) ||
		isTupleTypeNode(statement) ||
		isIntersectionTypeNode(statement) ||
		isUnionTypeNode(statement) ||
		isObjectKeyword(statement) ||
		isNumberKeyword(statement) ||
		isNeverKeyword(statement) ||
		isBooleanKeyword(statement) ||
		isAnyKeyword(statement) ||
		isVoidKeyword(statement) ||
		isSymbolKeyword(statement) ||
		isStringKeyword(statement) ||
		isNullKeyword(statement) ||
		isUndefinedKeyword(statement) ||
		isTrueKeyword(statement) ||
		isFalseKeyword(statement);
}

/**
 * A predicate function that returns true if the given Statement is a PropertyAssignment.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isPropertyAssignment (statement: Statement | Declaration | Expression | Node): statement is PropertyAssignment {
	return statement.kind === SyntaxKind.PropertyAssignment;
}

/**
 * A predicate function that returns true if the given Statement is a ExpressionStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExpressionStatement (statement: Statement | Declaration | Expression | Node): statement is ExpressionStatement {
	return statement.kind === SyntaxKind.ExpressionStatement;
}

/**
 * A predicate function that returns true if the given Statement is a SpreadAssignment.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isSpreadAssignment (statement: Statement | Declaration | Expression | Node): statement is SpreadAssignment {
	return statement.kind === SyntaxKind.SpreadAssignment;
}

/**
 * A predicate function that returns true if the given Statement is a SpreadElement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isSpreadElement (statement: Statement | Declaration | Expression | Node): statement is SpreadElement {
	return statement.kind === SyntaxKind.SpreadElement;
}

/**
 * A predicate function that returns true if the given Statement is a TypeReferenceNode.
 * @param {Statement|Expression|Node|ParameterDeclaration|TypeReferenceNode|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isTypeReference (statement: Statement | Expression | Node | ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is TypeReferenceNode {
	return statement.kind === SyntaxKind.TypeReference;
}

/**
 * A predicate function that returns true if the given Statement is an ExpressionWithTypeArguments.
 * @param {Statement|Expression|Node|ParameterDeclaration|TypeReferenceNode|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isExpressionWithTypeArguments (statement: Statement | Expression | Node | ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is ExpressionWithTypeArguments {
	return statement.kind === SyntaxKind.ExpressionWithTypeArguments;
}

/**
 * A predicate function that returns true if the given Statement is a Decorator.
 * @param {ParameterDeclaration|TypeReferenceNode|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isDecorator (statement: Statement | Declaration | Expression | Node): statement is Decorator {
	return statement.kind === SyntaxKind.Decorator;
}

/**
 * A predicate function that returns true if the given Statement is a TypeLiteralNode.
 * @param {ParameterDeclaration|TypeReferenceNode|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isTypeLiteralNode (statement: ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is TypeLiteralNode {
	return statement.kind === SyntaxKind.TypeLiteral;
}

/**
 * A predicate function that returns true if the given Statement is an IndexSignatureDeclaration.
 * @param {ParameterDeclaration|TypeReferenceNode|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isIndexSignatureDeclaration (statement: Declaration): statement is IndexSignatureDeclaration {
	return statement.kind === SyntaxKind.IndexSignature;
}

/**
 * A predicate function that returns true if the given Statement is a ClassDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isClassDeclaration (statement: Statement | Declaration | Expression | Node): statement is ClassDeclaration {
	return statement.kind === SyntaxKind.ClassDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a ClassExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isClassExpression (statement: Statement | Declaration | Expression | Node): statement is ClassExpression {
	return statement.kind === SyntaxKind.ClassExpression;
}

/**
 * A predicate function that returns true if the given Statement is a ConstructorDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isConstructorDeclaration (statement: Statement | Declaration | Expression | Node): statement is ConstructorDeclaration {
	return statement.kind === SyntaxKind.Constructor;
}

/**
 * A predicate function that returns true if the given Statement is a EmptyStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isEmptyStatement (statement: Statement | Declaration | Expression | Node): statement is EmptyStatement {
	return statement.kind === SyntaxKind.EmptyStatement;
}

/**
 * A predicate function that returns true if the given Statement is a DeleteExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isDeleteExpression (statement: Statement | Declaration | Expression | Node): statement is DeleteExpression {
	return statement.kind === SyntaxKind.DeleteExpression;
}

/**
 * A predicate function that returns true if the given Statement is a TypeReferenceNode.
 * @param {Statement|Expression|Node|Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTypeReferenceNode (statement: Statement | Expression | Node | Statement | Declaration | Expression | Node): statement is TypeReferenceNode {
	return statement.kind === SyntaxKind.TypeReference;
}

/**
 * A predicate function that returns true if the given Statement is a ArrayTypeNode.
 * @param {ParameterDeclaration|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isArrayTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is ArrayTypeNode {
	return statement.kind === SyntaxKind.ArrayType;
}

/**
 * A predicate function that returns true if the given Statement is a TupleTypeNode.
 * @param {ParameterDeclaration|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isTupleTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is TupleTypeNode {
	return statement.kind === SyntaxKind.TupleType;
}

/**
 * A predicate function that returns true if the given Statement is a UnionTypeNode.
 * @param {ParameterDeclaration|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isUnionTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is UnionTypeNode {
	return statement.kind === SyntaxKind.UnionType;
}

/**
 * A predicate function that returns true if the given Statement is a IntersectionTypeNode.
 * @param {ParameterDeclaration|TypeNode|TypeAliasDeclaration} statement
 * @returns {boolean}
 */
export function isIntersectionTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is IntersectionTypeNode {
	return statement.kind === SyntaxKind.IntersectionType;
}

/**
 * A predicate function that returns true if the given Statement is a MethodDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isMethodDeclaration (statement: Statement | Declaration | Expression | Node): statement is MethodDeclaration {
	return statement.kind === SyntaxKind.MethodDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a NewExpression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNewExpression (statement: Statement | Declaration | Expression | Node): statement is NewExpression {
	return statement.kind === SyntaxKind.NewExpression;
}

/**
 * A predicate function that returns true if the given Statement is a Block.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBlockDeclaration (statement: Statement | Declaration | Expression | Node): statement is Block {
	return statement.kind === SyntaxKind.Block;
}

/**
 * A predicate function that returns true if the given Statement is a BreakStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isBreakStatement (statement: Statement | Declaration | Expression | Node): statement is BreakStatement {
	return statement.kind === SyntaxKind.BreakStatement;
}

/**
 * A predicate function that returns true if the given Statement is a ThrowStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isThrowStatement (statement: Statement | Declaration | Expression | Node): statement is ThrowStatement {
	return statement.kind === SyntaxKind.ThrowStatement;
}

/**
 * A predicate function that returns true if the given Statement is a DoStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isDoStatement (statement: Statement | Declaration | Expression | Node): statement is DoStatement {
	return statement.kind === SyntaxKind.DoStatement;
}

/**
 * A predicate function that returns true if the given Statement is a ContinueStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isContinueStatement (statement: Statement | Declaration | Expression | Node): statement is ContinueStatement {
	return statement.kind === SyntaxKind.ContinueStatement;
}

/**
 * A predicate function that returns true if the given Statement is a ReturnStatement.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isReturnStatement (statement: Statement | Declaration | Expression | Node): statement is ReturnStatement {
	return statement.kind === SyntaxKind.ReturnStatement;
}

/**
 * A predicate function that returns true if the given Statement is an ExportDeclaration.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExportDeclaration (statement: Statement | Declaration | Expression | Node): statement is ExportDeclaration {
	return statement.kind === SyntaxKind.ExportDeclaration;
}

/**
 * A predicate function that returns true if the given Statement is a SourceFile.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isSourceFile (statement: Statement | Declaration | Expression | Node): statement is SourceFile {
	return statement.kind === SyntaxKind.SourceFile;
}

/**
 * A predicate function that returns true if the given Statement is a FirstLiteralToken|LastLiteralToken.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isLiteralToken (statement: Statement | Declaration | Expression | Node): statement is Token<SyntaxKind.FirstLiteralToken | SyntaxKind.LastLiteralToken> {
	return statement.kind === SyntaxKind.FirstLiteralToken || statement.kind === SyntaxKind.LastLiteralToken;
}

/**
 * A predicate function that returns true if the given Statement is a FirstLiteralToken|LastLiteralToken.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isTemplateToken (statement: Statement | Declaration | Expression | Node): statement is Token<SyntaxKind.FirstTemplateToken | SyntaxKind.LastTemplateToken> {
	return statement.kind === SyntaxKind.FirstTemplateToken || statement.kind === SyntaxKind.LastTemplateToken;
}

/**
 * A predicate function that returns true if the given Statement is an Identifier.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isIdentifierObject (statement: BindingName | EntityName | Expression | Node): statement is Identifier {
	return statement != null && statement.constructor.name === "IdentifierObject";
}

/**
 * A predicate function that returns true if the given Statement is a TokenObject.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isTokenObject (statement: BindingName | EntityName | Expression | Node): statement is Token<SyntaxKind> {
	return statement != null && statement.constructor.name === "TokenObject";
}

/**
 * A predicate function that returns true if the given Statement is a RegularExpressionLiteral.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isRegularExpressionLiteral (statement: BindingName | EntityName | Expression | Node): statement is RegularExpressionLiteral {
	return statement.kind === SyntaxKind.RegularExpressionLiteral;
}

/**
 * A predicate function that returns true if the given Statement is an IIdentifier.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIIdentifier (statement: IIdentifier | ArbitraryValue): statement is IIdentifier {
	return isIVariableAssignment(statement) ||
		isIParameter(statement) ||
		isIImportExportBinding(statement) ||
		isIClassDeclaration(statement) ||
		isIEnumDeclaration(statement) ||
		isIFunctionDeclaration(statement);
}

/**
 * A predicate function that returns true if the given Statement is an IExportableIIdentifier.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIExportableIIdentifier (statement: IIdentifier | ArbitraryValue): statement is IExportableIIdentifier {
	return isIVariableAssignment(statement) || isIClassDeclaration(statement) || isIEnumDeclaration(statement) || isIFunctionDeclaration(statement);
}

/**
 * A predicate function that returns true if the given Statement is a NamespacedModuleMap.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isNamespacedModuleMap (statement: IIdentifier | ArbitraryValue): statement is NamespacedModuleMap {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.NAMESPACED_MODULE_INDEXER;
}

/**
 * A predicate function that returns true if the given Statement is an IVariableAssignment.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIVariableAssignment (statement: IIdentifier | ArbitraryValue): statement is IVariableAssignment {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.VARIABLE;
}

/**
 * A predicate function that returns true if the given Statement is an IParameter.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIParameter (statement: IIdentifier | ArbitraryValue): statement is IParameter {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.PARAMETER;
}

/**
 * A predicate function that returns true if the given Statement is an IImportExportBinding.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIImportExportBinding (statement: IIdentifier | ArbitraryValue): statement is IImportExportBinding {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.IMPORT_EXPORT_BINDING;
}

/**
 * A predicate function that returns true if the given Statement is an IClassDeclaration.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIClassDeclaration (statement: IIdentifier | ArbitraryValue): statement is IClassDeclaration {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.CLASS;
}

/**
 * A predicate function that returns true if the given Statement is an IEnumDeclaration.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIEnumDeclaration (statement: IIdentifier | ArbitraryValue): statement is IEnumDeclaration {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.ENUM;
}

/**
 * A predicate function that returns true if the given Statement is an IFunctionDeclaration.
 * @param {IIdentifier|ArbitraryValue} statement
 * @returns {boolean}
 */
export function isIFunctionDeclaration (statement: IIdentifier | ArbitraryValue): statement is IFunctionDeclaration {
	return statement != null && (<IIdentifier>statement).___kind === IdentifierMapKind.FUNCTION;
}

/**
 * A predicate function that returns true if the given Statement is a FirstLiteralToken.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isFirstLiteralToken (statement: BindingName | EntityName | Expression | Node): statement is Token<SyntaxKind.FirstLiteralToken> & { text: string } {
	return statement.kind === SyntaxKind.FirstLiteralToken;
}

/**
 * A predicate function that returns true if the given Statement is a ShorthandPropertyAssignment.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isShorthandPropertyAssignment (statement: BindingName | EntityName | Expression | Node): statement is ShorthandPropertyAssignment {
	return statement.kind === SyntaxKind.ShorthandPropertyAssignment;
}

/**
 * A predicate function that returns true if the given Statement is a CaseClause.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isCaseClause (statement: BindingName | EntityName | Expression | Node): statement is CaseClause {
	return statement.kind === SyntaxKind.CaseClause;
}

/**
 * A predicate function that returns true if the given Statement is a DefaultClause.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isDefaultClause (statement: BindingName | EntityName | Expression | Node): statement is DefaultClause {
	return statement.kind === SyntaxKind.DefaultClause;
}

/**
 * A predicate function that returns true if the given Statement is a ComputedPropertyName.
 * @param {BindingName|EntityName|Expression} statement
 * @returns {boolean}
 */
export function isComputedPropertyName (statement: BindingName | EntityName | Expression | Node): statement is ComputedPropertyName {
	return statement.kind === SyntaxKind.ComputedPropertyName;
}

/**
 * A predicate function that returns true if the given Statement is a HeritageClause.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isExtendsClause (statement: Statement | Declaration | Expression | Node): statement is HeritageClause {
	// Extends will always be a 'token', not a 'kind'.
	return (<HeritageClause>statement).token === SyntaxKind.ExtendsKeyword;
}

/**
 * A predicate function that returns true if the given Statement is a HeritageClause.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isImplementsClause (statement: Statement | Declaration | Expression | Node): statement is HeritageClause {
	// Extends will always be a 'token', not a 'kind'.
	return (<HeritageClause>statement).token === SyntaxKind.ImplementsKeyword;
}

/**
 * A predicate function that returns true if the given Statement is a NamedImports expression.
 * @param {Statement|Declaration|Expression|Node} statement
 * @returns {boolean}
 */
export function isNamedImports (statement: Statement | Declaration | Expression | Node): statement is NamedImports {
	// Extends will always be a 'token', not a 'kind'.
	return statement.kind === SyntaxKind.NamedImports;
}

/**
 * A predicate function that returns true if an expression is a ITypeBinding.
 * @param {ArbitraryValue} expression
 * @returns {boolean}
 */
export function isTypeBinding (expression: ArbitraryValue): expression is ITypeBinding {
	const exp = <ITypeBinding>expression;
	return exp.name != null && (exp.typeArguments === null || Array.isArray(exp.typeArguments));
}
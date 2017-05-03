import {ArrayBindingPattern, ArrayLiteralExpression, ArrayTypeNode, Modifier, ArrowFunction, AwaitExpression, BinaryExpression, BindingName, BindingPattern, Block, BooleanLiteral, BreakStatement, CallExpression, CaseBlock, CaseClause, CatchClause, ClassDeclaration, ClassExpression, ComputedPropertyName, ConditionalExpression, ConstructorDeclaration, ContinueStatement, Declaration, DeclarationName, DefaultClause, DeleteExpression, DoStatement, ElementAccessExpression, EmptyStatement, EntityName, EnumDeclaration, ExportDeclaration, Expression, ExpressionStatement, ExpressionWithTypeArguments, ExternalModuleReference, ForInStatement, ForOfStatement, ForStatement, FunctionDeclaration, FunctionExpression, HeritageClause, Identifier, IfStatement, ImportClause, ImportDeclaration, ImportEqualsDeclaration, IndexSignatureDeclaration, IntersectionTypeNode, KeywordTypeNode, LabeledStatement, LanguageServiceHost, MethodDeclaration, NamedImports, NamespaceImport, NewExpression, Node, NodeArray, NoSubstitutionTemplateLiteral, NumericLiteral, ObjectBindingPattern, ObjectLiteralExpression, ParameterDeclaration, ParenthesizedExpression, PostfixUnaryExpression, PrefixUnaryExpression, PropertyAccessExpression, PropertyAssignment, PropertyDeclaration, PropertyName, PropertySignature, RegularExpressionLiteral, ShorthandPropertyAssignment, SourceFile, SpreadAssignment, SpreadElement, Statement, StringLiteral, SwitchStatement, SyntaxKind, TemplateExpression, TemplateHead, TemplateMiddle, TemplateSpan, TemplateTail, ThisExpression, ThrowStatement, Token, TryStatement, TupleTypeNode, TypeAliasDeclaration, TypeAssertion, TypeLiteralNode, TypeNode, TypeOfExpression, TypeReferenceNode, UnionTypeNode, VariableDeclaration, VariableDeclarationList, VariableStatement, WhileStatement} from "typescript";

import {IBindingIdentifier} from "./IBindingIdentifier";

export enum ImportKind {
	NAMESPACE, DEFAULT, NAMED
}

export enum ModuleDependencyKind {
	ES_MODULE, REQUIRE, IMPORT_REQUIRE
}

export enum IdentifierMapKind {
	VARIABLE, IMPORT, EXPORT, PROP, PARAMETER, ARGUMENT, METHOD, CONSTRUCTOR, FUNCTION, DECORATOR, CLASS, ENUM, CALL_EXPRESSION, NEW_EXPRESSION, CLASS_INDEXER, VARIABLE_INDEXER, ENUM_INDEXER, MODULE_DEPENDENCIES, FUNCTION_INDEXER, IDENTIFIER_MAP
}

export interface IImportBinding {
	name: string;
	kind: ImportKind;
}

export interface IModulePath {
	relativePath: string;
	fullPath: string;
}

export declare type ModuleSource = IBindingIdentifier | IModulePath;

export interface IKindable {
	___kind: IdentifierMapKind;
}

export interface IModuleDependency extends IFilePathable, IKindable {
	moduleKind: ModuleDependencyKind;
	source: ModuleSource;
	bindings: ImportIndexer;
}

export interface ICallExpression extends IArgumentsable, ICallable, IFilePathable, IKindable {
	type: ITypeable;
}

export interface IEnumDeclaration extends INameable, IPositionable, IDecoratorsable, IFilePathable, IKindable {
	members: { [key: string]: number | string };
}

export interface ICallable {
	property: ArbitraryValue;
	identifier: NonNullableArbitraryValue;
}

export interface INewExpression extends IArgumentsable, ICallable, IFilePathable, IKindable {
	type: ITypeable;
}

export interface IBody extends IContentsable, IPositionable {
}

export interface IBodyable {
	body: IBody;
}

export interface IContentsable {
	contents: string | null;
}

export interface IMemberDeclaration extends IPositionable, IBodyable, IDecoratorsable {
	contents: string;
}

export interface IParametersable {
	parameters: IParametersBody;
}

export interface IArgumentsable {
	arguments: IArgumentsBody;
}

export interface IParametersBody extends IPositionable {
	parametersList: IParameter[];
}

export interface IArgumentsBody extends IPositionable {
	argumentsList: IArgument[];
}

export interface IFunctionLike extends IParametersable, IMemberDeclaration {
	returnStatementStartsAt: number;
	returnStatementEndsAt: number;
	returnStatementContents: string | null;
}

export interface IFunctionDeclaration extends IFunctionLike, IFilePathable, IKindable {
	name: string;
	value: IValueable;
}

export interface IClassNameable {
	className: string;
}

export interface IMethodDeclaration extends INameable, IFunctionLike, IFilePathable, IClassNameable, IKindable, isStaticable {
	value: IValueable;
}

export interface IConstructorDeclaration extends IMemberDeclaration, IParametersable, IFilePathable, IClassNameable, IKindable {

}

export interface IHeritage {
	extendsClass: ITypeBinding | null;
	implementsInterfaces: ITypeBinding[];
}

export interface IClassDeclaration extends IMemberDeclaration, INameable, IFilePathable, IKindable {
	methods: ResolvedMethodMap;
	props: PropIndexer;
	constructor: IConstructorDeclaration | null;
	heritage: IHeritage | null;
}

export interface IPositionable {
	startsAt: number;
	endsAt: number;
}

export declare interface IParameter extends IPositionable, INameable, IKindable {
	type: ITypeable;
	value: IValueable;
}

export declare interface IArgument extends IPositionable, IKindable {
	value: IValueable;
}

export interface IArbitraryObject<T> {
	[key: string]: T;
	[key: number]: T;
}

export interface IDecorator extends IKindable {
	name: string;
}

export interface IDecoratorsable {
	decorators: DecoratorIndexer;
}

export interface isStaticable {
	isStatic: boolean;
}

export declare interface IPropDeclaration extends IDecoratorsable, IPositionable, INameable, IFilePathable, IClassNameable, IKindable, isStaticable {
	type: ITypeable;
	value: IValueable;
}

export interface INameable {
	name: string;
}

export interface ITypeBinding extends INameable {
	typeArguments: TypeExpression | null;
}

export declare type TypeExpression = InitializationValue;

export interface ITypeable {
	expression: TypeExpression | null;
	flattened: string | null;
	bindings: ITypeBinding[] | null;
}

export interface IValueable {
	resolving: boolean;
	resolve: () => string | null;
	resolved: string|null|undefined;
	hasDoneFirstResolve: () => boolean;
	expression: InitializationValue | null;
}

export interface INonNullableValueable {
	resolving: boolean;
	resolve: () => string | null;
	resolved: string|null;
	expression: InitializationValue;
}

export interface IVersionable {
	version: number;
}

export interface ICachedContent<T> extends IVersionable {
	content: T;
}

export interface IVariableAssignment extends IPositionable, INameable, IFilePathable, IKindable {
	value: IValueable;
	type: ITypeable;
}

export interface IFilePathable {
	filePath: string;
}

export interface IFileContentsable {
	fileContents: string;
}

export interface ISourceFileProperties extends IFilePathable, IFileContentsable {
}

export declare interface IIdentifierMap extends IKindable {
	enums: EnumIndexer;
	classes: ClassIndexer;
	variables: VariableIndexer;
	functions: FunctionIndexer;
	callExpressions: ICallExpression[];
	imports: IModuleDependency[];
	exports: Set<string>;
}

export declare type IIdentifier = IVariableAssignment | IClassDeclaration | IEnumDeclaration | IFunctionDeclaration;
export declare type EnumIndexer = { [key: string]: IEnumDeclaration };
export declare type FunctionIndexer = { [key: string]: IFunctionDeclaration };
export declare type ResolvedMethodMap = { [key: string]: IMethodDeclaration };
export declare type ImportIndexer = { [key: string]: IImportBinding };
export declare type ClassIndexer = { [key: string]: IClassDeclaration };
export declare type VariableIndexer = { [key: string]: IVariableAssignment };
export declare type DecoratorIndexer = { [key: string]: IDecorator };
export declare type TypeArgument = string | boolean | symbol | number | null | undefined;
export declare type PropIndexer = { [key: string]: IPropDeclaration };
export declare type NonNullableArbitraryValue = string | boolean | symbol | number | Function | object | IBindingIdentifier | ITypeBinding | {};
export declare type ArbitraryValue = NonNullableArbitraryValue | null | undefined;
export declare type ArbitraryValueIndexable = ArbitraryValue | IArbitraryObject<ArbitraryValue>;
export declare type ArbitraryValueArray = ArbitraryValueIndexable[];
export declare type InitializationValue = ArbitraryValueArray;

export interface ISimpleLanguageService extends LanguageServiceHost {
	addFile (fileName: string, content: string, version?: number): NodeArray<Statement>;
	getFile(fileName: string): NodeArray<Statement>;
	isObjectLiteralExpression (statement: Statement | Declaration | Expression | Node): statement is ObjectLiteralExpression;
	isVariableStatement(statement: Statement | Declaration | Expression | Node): statement is VariableStatement;
	isVariableDeclaration(statement: Statement | Declaration | Expression | Node): statement is VariableDeclaration;
	isFunctionDeclaration(statement: Statement | Declaration | Expression | Node): statement is FunctionDeclaration;
	isPropertyAccessExpression (statement: Statement | Declaration | Expression | Node): statement is PropertyAccessExpression;
	isElementAccessExpression (statement: Statement | Declaration | Expression | Node): statement is ElementAccessExpression;
	isArrayLiteralExpression (statement: Statement | Declaration | Expression | Node): statement is ArrayLiteralExpression;
	isTypeAssertionExpression (statement: Statement | Declaration | Expression | Node): statement is TypeAssertion;
	isComputedPropertyName(statement: BindingName | EntityName | Expression | Node): statement is ComputedPropertyName;
	isLabeledStatement(statement: Statement | Declaration | Expression | Node): statement is LabeledStatement;
	isTemplateExpression (statement: Statement | Declaration | Expression | Node): statement is TemplateExpression;
	isNoSubstitutionTemplateLiteral (statement: Statement | Declaration | Expression | Node): statement is NoSubstitutionTemplateLiteral;
	isPropertyDeclaration (statement: Statement | Declaration | Expression | Node): statement is PropertyDeclaration;
	isTemplateSpan (statement: Statement | Declaration | Expression | Node): statement is TemplateSpan;
	isTemplateHead (statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateHead;
	isTemplateTail (statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateTail;
	isConditionalExpression (statement: Statement | Declaration | Expression | Node): statement is ConditionalExpression;
	isCallExpression (statement: Statement | Declaration | Expression | Node): statement is CallExpression;
	isPrefixUnaryExpression (statement: Statement | Declaration | Expression | Node): statement is PrefixUnaryExpression;
	isParenthesizedExpression (statement: Statement | Declaration | Expression | Node): statement is ParenthesizedExpression;
	isParameterDeclaration (statement: Statement | Declaration | Expression | Node): statement is ParameterDeclaration;
	isBinaryExpression (statement: Statement | Declaration | Expression | Node): statement is BinaryExpression;
	isImportDeclaration (statement: Statement | Declaration | Expression | Node): statement is ImportDeclaration;
	isEnumDeclaration (statement: Statement | Declaration | Expression | Node): statement is EnumDeclaration;
	isTrueKeyword (statement: Statement | Declaration | Expression | Node): statement is BooleanLiteral;
	isFalseKeyword (statement: Statement | Declaration | Expression | Node): statement is BooleanLiteral;
	isThisKeyword (statement: Statement | Declaration | Expression | Node): statement is ThisExpression;
	isExtendsClause (statement: Statement | Declaration | Expression | Node): statement is HeritageClause;
	isImplementsClause (statement: Statement | Declaration | Expression | Node): statement is HeritageClause;
	isUndefinedKeyword (statement: Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isNullKeyword (statement: Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isObjectKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isNumberKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isNeverKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isBooleanKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isAnyKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isVoidKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isSymbolKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isStringKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is KeywordTypeNode;
	isStaticKeyword (statement: TypeNode | Statement | Declaration | Expression | Node): statement is Modifier;
	isTypeNode (statement: ParameterDeclaration | TypeAliasDeclaration | TypeNode): statement is TypeNode;
	isTypeLiteralNode (statement: ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is TypeLiteralNode;
	isNumericLiteral (statement: TypeNode | Statement | Declaration | Expression | Node): statement is NumericLiteral;
	isStringLiteral (statement: TypeNode | Statement | Declaration | Expression | Node): statement is StringLiteral;
	isPropertyAssignment (statement: Statement | Declaration | Expression | Node): statement is PropertyAssignment;
	isClassDeclaration(statement: Statement | Declaration | Expression | Node): statement is ClassDeclaration;
	isClassExpression(statement: Statement | Declaration | Expression | Node): statement is ClassExpression;
	isMethodDeclaration (statement: Statement | Declaration | Expression | Node): statement is MethodDeclaration;
	isBlockDeclaration (statement: Statement | Declaration | Expression | Node): statement is Block;
	isNamedImports (statement: Statement | Declaration | Expression | Node): statement is NamedImports;
	isExportDeclaration (statement: Statement | Declaration | Expression | Node): statement is ExportDeclaration;
	isExpressionStatement (statement: Statement | Declaration | Expression | Node): statement is ExpressionStatement;
	isTypeReference (statement: ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is TypeReferenceNode;
	isIdentifierObject (statement: BindingName | EntityName | Expression | Node): statement is Identifier;
	isTokenObject (statement: BindingName | EntityName | Expression | Node): statement is Token<SyntaxKind>;
	isConstructorDeclaration (statement: Statement | Declaration | Expression | Node): statement is ConstructorDeclaration;
	isNewExpression (statement: Statement | Declaration | Expression | Node): statement is NewExpression;
	isIndexSignatureDeclaration (statement: Declaration): statement is IndexSignatureDeclaration;
	isPropertySignature (statement: Statement | Declaration | Expression | Node): statement is PropertySignature;
	isTypeReferenceNode (statement: Statement | Declaration | Expression | Node): statement is TypeReferenceNode;
	isArrayTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is ArrayTypeNode;
	isTupleTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is TupleTypeNode;
	isSpreadAssignment (statement: Statement | Declaration | Expression | Node): statement is SpreadAssignment;
	isUnionTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is UnionTypeNode;
	isIntersectionTypeNode (statement: ParameterDeclaration | TypeNode | TypeAliasDeclaration): statement is IntersectionTypeNode;
	isFirstLiteralToken (statement: BindingName | EntityName | Expression | Node): statement is Token<SyntaxKind.FirstLiteralToken> & { text: string };
	isPropertyName (statement: Expression | Node): statement is PropertyName;
	isDeclarationName(statement: Expression | Node): statement is DeclarationName;
	isExpressionWithTypeArguments(statement: ParameterDeclaration | TypeReferenceNode | TypeNode | TypeAliasDeclaration): statement is ExpressionWithTypeArguments;
	isPostfixUnaryExpression(statement: Statement | Declaration | Expression | Node): statement is PostfixUnaryExpression;
	isBindingPattern(statement: TypeNode | Statement | Declaration | Expression | Node): statement is BindingPattern;
	isVariableDeclarationList(statement: Statement | Declaration | Expression | Node): statement is VariableDeclarationList;
	isArrayBindingPattern (statement: TypeNode | Statement | Declaration | Expression | Node): statement is ArrayBindingPattern;
	isObjectBindingPattern(statement: TypeNode | Statement | Declaration | Expression | Node): statement is ObjectBindingPattern;
	isIfStatement(statement: Statement | Declaration | Expression | Node): statement is IfStatement;
	isTypeOfExpression(statement: Statement | Declaration | Expression | Node): statement is TypeOfExpression;
	isSwitchStatement(statement: Statement | Declaration | Expression | Node): statement is SwitchStatement;
	isWhileStatement(statement: Statement | Declaration | Expression | Node): statement is WhileStatement;
	isCaseBlock(statement: Statement | Declaration | Expression | Node): statement is CaseBlock;
	isTryStatement(statement: Statement | Declaration | Expression | Node): statement is TryStatement;
	isCatchClause(statement: Statement | Declaration | Expression | Node): statement is CatchClause;
	isSourceFile(statement: Statement | Declaration | Expression | Node): statement is SourceFile;
	isArrowFunction (statement: Statement | Declaration | Expression | Node): statement is ArrowFunction;
	isSpreadElement (statement: Statement | Declaration | Expression | Node): statement is SpreadElement;
	isFunctionExpression(statement: Statement | Declaration | Expression | Node): statement is FunctionExpression;
	isCaseClause(statement: BindingName | EntityName | Expression | Node): statement is CaseClause;
	isDefaultClause(statement: BindingName | EntityName | Expression | Node): statement is DefaultClause;
	isForStatement(statement: Statement | Declaration | Expression | Node): statement is ForStatement;
	isForOfStatement(statement: Statement | Declaration | Expression | Node): statement is ForOfStatement;
	isForInStatement(statement: Statement | Declaration | Expression | Node): statement is ForInStatement;
	isBreakStatement(statement: Statement | Declaration | Expression | Node): statement is BreakStatement;
	isContinueStatement(statement: Statement | Declaration | Expression | Node): statement is ContinueStatement;
	isThrowStatement(statement: Statement | Declaration | Expression | Node): statement is ThrowStatement;
	isNamespaceImport(statement: Statement | Declaration | Expression | Node): statement is NamespaceImport;
	isTemplateMiddle(statement: TypeNode | Statement | Declaration | Expression | Node): statement is TemplateMiddle;
	isDoStatement(statement: Statement | Declaration | Expression | Node): statement is DoStatement;
	isAwaitExpression (statement: Statement | Declaration | Expression | Node): statement is AwaitExpression;
	isRegularExpressionLiteral(statement: BindingName | EntityName | Expression | Node): statement is RegularExpressionLiteral;
	isShorthandPropertyAssignment(statement: BindingName | EntityName | Expression | Node): statement is ShorthandPropertyAssignment;
	isImportEqualsDeclaration(statement: Statement | Declaration | Expression | Node): statement is ImportEqualsDeclaration;
	isEmptyStatement(statement: Statement | Declaration | Expression | Node): statement is EmptyStatement;
	isLiteralToken(statement: Statement | Declaration | Expression | Node): statement is Token<SyntaxKind.FirstLiteralToken | SyntaxKind.LastLiteralToken>;
	isTemplateToken(statement: Statement | Declaration | Expression | Node): statement is Token<SyntaxKind.FirstTemplateToken | SyntaxKind.LastTemplateToken>;
	isImportClause(statement: Statement | Declaration | Expression | Node): statement is ImportClause;
	isExternalModuleReference(statement: Statement | Declaration | Expression | Node): statement is ExternalModuleReference;
	isDeleteExpression(statement: Statement | Declaration | Expression | Node): statement is DeleteExpression;
	serializeToken (token: SyntaxKind): string | IBindingIdentifier;
	marshalToken (token: SyntaxKind): ArbitraryValue;
	getClassDeclarations(statements: Statement[], deep?: boolean): ClassIndexer;
	getClassDeclarationsForFile(fileName: string, deep?: boolean): ClassIndexer;
	getAllIdentifiers(statements: Statement[], deep?: boolean): IIdentifierMap;
	getAllIdentifiersForFile(fileName: string, deep?: boolean): IIdentifierMap;
	getVariableAssignments(statements: Statement[], deep?: boolean): VariableIndexer;
	getVariableAssignmentsForFile(fileName: string, deep?: boolean): VariableIndexer;
	getEnumDeclarations(statements: Statement[], deep?: boolean): EnumIndexer;
	getEnumDeclarationsForFile(fileName: string, deep?: boolean): EnumIndexer;
	getFunctionDeclarations(statements: Statement[], deep?: boolean): FunctionIndexer;
	getFunctionDeclarationsForFile(fileName: string, deep?: boolean): FunctionIndexer;
	getImportDeclarationsForFile (fileName: string): IModuleDependency[];
	getImportDeclarations(statements: Statement[], deep?: boolean): IModuleDependency[];
	getExportDeclarationsForFile (fileName: string, deep?: boolean): Set<string>;
	getExportDeclarations (statements: Statement[]): Set<string>;
	getCallExpressions(statements: Statement[], deep?: boolean): ICallExpression[];
	getCallExpressionsForFile(fileName: string, deep?: boolean): ICallExpression[];
	getNewExpressions(statements: Statement[], deep?: boolean): INewExpression[];
	getNewExpressionsForFile(fileName: string, deep?: boolean): INewExpression[];
}
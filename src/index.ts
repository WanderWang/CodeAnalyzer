export {isIArgument, isICallExpression, isIMethodDeclaration, isIGetAccessorDeclaration, isISetAccessorDeclaration, isILiteralValue, isIArrowFunction, isIIdentifier, isIFunctionDeclaration, isIEnumDeclaration, isIClassDeclaration, isIParameter, isIVariableAssignment, isIConstructorDeclaration, isIDecorator, isIExportableIIdentifier, isIExportDeclaration, isIImportDeclaration, isIImportExportBinding, isIMutationDeclaration, isINewExpression} from "./predicate/PredicateFunctions";
export {ICodeAnalyzer, ICodeAnalyzerConstructorOptions} from "./analyzer/interface/ICodeAnalyzer";
export {CodeAnalyzer} from "./analyzer/CodeAnalyzer";
export {BindingIdentifier} from "./model/BindingIdentifier";
export {IGetAccessorDeclaration, IGetAccessorDeclarationable, ISetAccessorDeclaration, ISetAccessorDeclarationable, IArrowFunction, ArbitraryValue, IValueable, INonNullableValueable, NonNullableArbitraryValue, IResolvedIIdentifierValueMap, IResolvedIIdentifierValueMapIndexer, IResolvedSerializedIIdentifierValueMap, IResolvedSerializedIIdentifierValueMapIndexer, ParameterKind, IClassDeclaration, IMutationDeclaration, IImportDeclaration, InitializationValue, IArbitraryObject, IArgument, IDecorator, IParameter, IMethodDeclaration, ICallable, IIdentifier, ModuleDependencyKind, IModulePath, ModuleSource, IFunctionIndexer, IFunctionDeclaration, IEnumDeclaration, IEnumIndexer, IVariableDeclaration, IdentifierMapKind, IIdentifierMap, IMemberDeclaration, IPropIndexer, IPositionable, ICallExpression, IImportExportBinding, ImportExportKind, IExportDeclaration, IVariableIndexer, IClassIndexer, IDecoratorIndexer, IResolvedMethodMap, INewExpression, IClassDeclarationable, IHeritageable, IExportDeclarationable, IImportDeclarationable, IModuleDeclarationable, ICallExpressionable, IEnumDeclarationable, IIdentifierable, INewExpressionable, IFunctionDeclarationable, IArrowFunctionable, IMethodDeclarationable, IConstructorDeclarationable, IParameterable, IParametersable, IArgumentable, IDecoratorable, IDecoratorsable, IPropDeclarationable, IMutationDeclarationable, IVariableDeclarationable} from "./identifier/interface/IIdentifier";
export {IConfig} from "./static/interface/IConfig";
export {config} from "./static/Config";
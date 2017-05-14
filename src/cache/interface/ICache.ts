import {ClassIndexer, EnumIndexer, FunctionIndexer, ICachedContent, IClassDeclaration, IEnumDeclaration, IFunctionDeclaration, IImportDeclaration, IPropDeclaration, IVariableAssignment, VariableIndexer} from "../../service/interface/ICodeAnalyzer";

export interface ICache {
	getCachedPropName (fileName: string, className: string, propName: string): string;
	getCachedVariableName (fileName: string, variableName: string): string;
	getCachedEnumName (fileName: string, enumName: string): string;
	getCachedClassName (fileName: string, className: string): string;
	getCachedFunctionName (fileName: string, className: string): string;
	getCachedClassIndexerName (fileName: string): string;
	getCachedModuleDependenciesName (fileName: string): string;
	getCachedFunctionIndexerName (fileName: string): string;
	getCachedVariableIndexerName (fileName: string): string;
	getCachedEnumIndexerName (fileName: string): string;
	getFromCache<T> (key: string): ICachedContent<T> | null;
	getCachedVariable (fileName: string, variableName: string): ICachedContent<IVariableAssignment> | null;
	getCachedFunction (fileName: string, functionName: string): ICachedContent<IFunctionDeclaration> | null;
	getCachedEnum (fileName: string, enumName: string): ICachedContent<IEnumDeclaration> | null;
	getCachedProp (fileName: string, className: string, propName: string): ICachedContent<IPropDeclaration> | null;
	getCachedClass (fileName: string, className: string): ICachedContent<IClassDeclaration> | null;
	getCachedFunctionIndexer (fileName: string): ICachedContent<FunctionIndexer> | null;
	getCachedModuleDependencies (fileName: string): ICachedContent<IImportDeclaration[]> | null;
	getCachedClassIndexer (fileName: string): ICachedContent<ClassIndexer> | null;
	getCachedEnumIndexer (fileName: string): ICachedContent<EnumIndexer> | null;
	getCachedVariableIndexer (fileName: string): ICachedContent<VariableIndexer> | null;
	setCachedProp (fileName: string, content: IPropDeclaration): void;
	setCachedVariable (fileName: string, content: IVariableAssignment): void;
	setCachedEnum (fileName: string, content: IEnumDeclaration): void;
	setCachedClass (fileName: string, content: IClassDeclaration): void;
	setCachedFunction (fileName: string, content: IFunctionDeclaration): void;
	setCachedClassIndexer (fileName: string, content: ClassIndexer): void;
	setCachedFunctionIndexer (fileName: string, content: FunctionIndexer): void;
	setCachedModuleDependencies (fileName: string, content: IImportDeclaration[]): void;
	setCachedEnumIndexer (fileName: string, content: EnumIndexer): void;
	setCachedVariableIndexer (fileName: string, content: VariableIndexer): void;
	cachedVariableNeedsUpdate (variable: IVariableAssignment): boolean;
	cachedEnumNeedsUpdate (enumDeclaration: IEnumDeclaration): boolean;
	cachedFunctionNeedsUpdate (functionDeclaration: IFunctionDeclaration): boolean;
	cachedPropNeedsUpdate (prop: IPropDeclaration): boolean;
	cachedClassNeedsUpdate (classDeclaration: IClassDeclaration): boolean;
	cachedFunctionIndexerNeedsUpdate (filePath: string): boolean;
	cachedModuleDependenciesNeedsUpdate (filePath: string): boolean;
	cachedClassIndexerNeedsUpdate (filePath: string): boolean;
	cachedEnumIndexerNeedsUpdate (filePath: string): boolean;
	cachedVariableIndexerNeedsUpdate (filePath: string): boolean;
}
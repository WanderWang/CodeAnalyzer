import {Identifier, ImportDeclaration, NamedImportBindings, NamedImports, NamespaceImport, NodeArray, SourceFile} from "typescript";
import {IImportDict} from "../../dict/import/i-import-dict";
import {INamedImportDict} from "../../dict/named-import/i-named-import-dict";
import {INodeService} from "../node/i-node-service";

export interface IImportService extends INodeService<ImportDeclaration> {
	getImportsWithNamedImport (namedImport: INamedImportDict, path: string, sourceFile: SourceFile): NodeArray<ImportDeclaration>;
	getImportsForPath (path: string, sourceFile: SourceFile): NodeArray<ImportDeclaration>;
	getNameForImportDeclaration (importDeclaration: ImportDeclaration): Identifier|undefined;
	getNamedImportBindingsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImportBindings|undefined;
	getNamedImportsForImportDeclaration (importDeclaration: ImportDeclaration): NamedImports|undefined;
	getNamespaceImportForImportDeclaration (importDeclaration: ImportDeclaration): NamespaceImport|undefined;
	getPathForImportDeclaration (importDeclaration: ImportDeclaration): string;

	hasNamedImports (importDeclaration: ImportDeclaration): boolean;
	hasNamedImport (namedImport: INamedImportDict, importDeclaration: ImportDeclaration): boolean;
	hasName (importDeclaration: ImportDeclaration): boolean;
	hasSpecificName (name: string, importDeclaration: ImportDeclaration): boolean;
	hasNamespaceImport (importDeclaration: ImportDeclaration): boolean;
	hasNamespaceImportWithName (namespaceName: string, importDeclaration: ImportDeclaration): boolean;

	createImportDeclaration (options: IImportDict): ImportDeclaration;
	createAndAddImportDeclarationToSourceFile (options: IImportDict, sourceFile: SourceFile): ImportDeclaration;

	changePathOfImportDeclaration (path: string, importDeclaration: ImportDeclaration): ImportDeclaration;
	addNameToImportDeclaration (name: string, importDeclaration: ImportDeclaration): ImportDeclaration;
	addNamedImportToImportDeclaration (namedImport: INamedImportDict, importDeclaration: ImportDeclaration): ImportDeclaration;
	addNamespaceImportToImportDeclaration (namedImport: string, importDeclaration: ImportDeclaration): ImportDeclaration;
}
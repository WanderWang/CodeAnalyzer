import {ITypescriptASTUtil, TypescriptASTUtil} from "@wessberg/typescript-ast-util";
import {IClassService} from "./ast/service/class/i-class-service";
import {ClassService} from "./ast/service/class/class-service";
import {IImportService} from "./ast/service/import/i-import-service";
import {ImportService} from "./ast/service/import/import-service";
import {ITypeService} from "./ast/service/type/i-type-service";
import {TypeService} from "./ast/service/type/type-service";
import {IParseService} from "./ast/service/parse/i-parse-service";
import {ParseService} from "./ast/service/parse/parse-service";
import {IDecoratorService} from "./ast/service/decorator/i-decorator-service";
import {DecoratorService} from "./ast/service/decorator/decorator-service";
import {IModifierService} from "./ast/service/modifier/i-modifier-service";
import {ModifierService} from "./ast/service/modifier/modifier-service";
import {IFormatter} from "./ast/formatter/i-formatter";
import {Formatter} from "./ast/formatter/formatter";
import {DIContainer} from "@wessberg/di";
import {IModuleUtil, ModuleUtil} from "@wessberg/moduleutil";
import {IPathUtil, PathUtil} from "@wessberg/pathutil";
import {FileLoader, IFileLoader} from "@wessberg/fileloader";
import {ITypescriptLanguageService, TypescriptLanguageService} from "@wessberg/typescript-language-service";
import {ITypescriptPackageReassembler, TypescriptPackageReassembler} from "@wessberg/typescript-package-reassembler";
import {IPrinter} from "./ast/printer/i-printer";
import {Printer} from "./ast/printer/printer";
import {IDiffUtil} from "./util/diff-util/i-diff-util";
import {DiffUtil} from "./util/diff-util/diff-util";
import {IPredicateUtil} from "./util/predicate-util/i-predicate-util";
import {PredicateUtil} from "./util/predicate-util/predicate-util";

// Util
DIContainer.registerSingleton<IDiffUtil, DiffUtil>();
DIContainer.registerSingleton<IPredicateUtil, PredicateUtil>();

// Formatter
DIContainer.registerSingleton<IFormatter, Formatter>();

// Printer
DIContainer.registerSingleton<IPrinter, Printer>();

// Utilities
DIContainer.registerSingleton<IModuleUtil, ModuleUtil>();
DIContainer.registerSingleton<IPathUtil, PathUtil>();
DIContainer.registerSingleton<IFileLoader, FileLoader>();
DIContainer.registerSingleton<ITypescriptPackageReassembler, TypescriptPackageReassembler>();
DIContainer.registerSingleton<ITypescriptLanguageService, TypescriptLanguageService>();
DIContainer.registerSingleton<ITypescriptASTUtil, TypescriptASTUtil>();

// Services
DIContainer.registerSingleton<IParseService, ParseService>();
DIContainer.registerSingleton<IDecoratorService, DecoratorService>();
DIContainer.registerSingleton<IModifierService, ModifierService>();
DIContainer.registerSingleton<IClassService, ClassService>();
DIContainer.registerSingleton<IImportService, ImportService>();
DIContainer.registerSingleton<ITypeService, TypeService>();
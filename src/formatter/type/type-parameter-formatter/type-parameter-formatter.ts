import {ITypeParameterFormatter} from "./i-type-parameter-formatter";
import {NodeArray, TypeParameterDeclaration} from "typescript";
import {ITypeParameter} from "@wessberg/type";
import {ITypescriptASTUtil} from "@wessberg/typescript-ast-util";
import {ITypeFormatter} from "../type-formatter/i-type-formatter";
import {IInterfaceTypeMemberFormatter} from "../interface-type-member-formatter/i-interface-type-member-formatter";
import {IParameterTypeFormatter} from "../parameter-type-formatter/i-parameter-type-formatter";

/**
 * A class for formatting ITypeParameters
 */
export class TypeParameterFormatter implements ITypeParameterFormatter {
	constructor (private astUtil: ITypescriptASTUtil,
							 private typeFormatter: ITypeFormatter,
							 private interfaceTypeMemberFormatter: IInterfaceTypeMemberFormatter,
							 private parameterTypeFormatter: IParameterTypeFormatter) {}

	/**
	 * Formats the provided NodeArray of TypeParameterDeclarations into an array of ITypeParameter
	 * @param {NodeArray<TypeParameterDeclaration>} statements
	 * @returns {ITypeParameter[]}
	 */
	public format (statements: NodeArray<TypeParameterDeclaration>): ITypeParameter[] {
		return statements.map(statement => ({
			name: this.astUtil.takeName(statement.name),
			extends: statement.constraint == null ? undefined : this.typeFormatter.format(statement.constraint, this.interfaceTypeMemberFormatter, this.parameterTypeFormatter),
			initializer: statement.default == null ? undefined : this.typeFormatter.format(statement.default, this.interfaceTypeMemberFormatter, this.parameterTypeFormatter)
		}));
	}
}
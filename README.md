# SimpleLanguageService [![NPM version][npm-image]][npm-url]
> A service that parses and reflects on the AST generated by Typescript's language service.
> With it, we can extract metadata such as initialization values and types, arguments and import declarations.

## Installation
Simply do: `npm install simplelanguageservice`.

## Usage
```typescript
// A path to a file.
const filePath = "my_file.ts";

// The code contents of a file.
const fileContents = "const foo = 'bar'";

// Add a file to the LanguageService so it can construct an AST from the contents of it.
const statements = simpleLanguageService.addFile(filePath, fileContents);

// Now we can play around with it:
simpleLanguageService.getClassDeclarations(statements, filePath, fileContents);
simpleLanguageService.getImportDeclarations(statements, filePath);
simpleLanguageService.getVariableAssignments(statements);
// And so on...
```

The Typescript LanguageService is an extremely flexible and powerful tool for static code analysis.
This is a simple LanguageService provider that boils the complex information down to
more easily digestible metadata such as class props, methods, constructor arguments, imports
and exports and other stuff.

## Changelog:

**v1.0.8**:

- Bug fixes, more tests.

**v1.0.0**:

- First release.

[npm-url]: https://npmjs.org/package/@wessberg/simplelanguageservice
[npm-image]: https://badge.fury.io/js/@wessberg/simplelanguageservice.svg
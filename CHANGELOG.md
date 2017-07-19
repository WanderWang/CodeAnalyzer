<a name="1.0.44"></a>
## 1.0.44 (2017-07-19)

* 1.0.44 ([8b92dfd](https://github.com/wessberg/CodeAnalyzer/commit/8b92dfd))
* Added support for handling expressions of kinds TypeQuery and LastTypeNode. Fixes #9. Fixes #21 ([6719e65](https://github.com/wessberg/CodeAnalyzer/commit/6719e65)), closes [#9](https://github.com/wessberg/CodeAnalyzer/issues/9) [#21](https://github.com/wessberg/CodeAnalyzer/issues/21)
* Bumped version ([d571e0b](https://github.com/wessberg/CodeAnalyzer/commit/d571e0b))
* Fixed an issue where expression bodies of CallExpressions wouldn't be parsed when 'deep' is true. Fi ([c9f28b0](https://github.com/wessberg/CodeAnalyzer/commit/c9f28b0)), closes [#10](https://github.com/wessberg/CodeAnalyzer/issues/10)
* Made the MutationFormatter use the IValuableFormatter. Fixes #11 ([6e30987](https://github.com/wessberg/CodeAnalyzer/commit/6e30987)), closes [#11](https://github.com/wessberg/CodeAnalyzer/issues/11)
* Made the ParametersFormatter use the IValuableFormatter. #11 ([2ccc736](https://github.com/wessberg/CodeAnalyzer/commit/2ccc736))
* Made the PropFormatter use the IValuableFormatter. #11 ([dbcc74b](https://github.com/wessberg/CodeAnalyzer/commit/dbcc74b))



<a name="1.0.43"></a>
## 1.0.43 (2017-07-19)

* 1.0.43 ([da6dd9d](https://github.com/wessberg/CodeAnalyzer/commit/da6dd9d))
* Fixed all lint errors ([61133bc](https://github.com/wessberg/CodeAnalyzer/commit/61133bc))
* Migrated to common tsconfig setup. Added lots of documentation ([5daa8e0](https://github.com/wessberg/CodeAnalyzer/commit/5daa8e0))
* Removed fields ([1ee8b49](https://github.com/wessberg/CodeAnalyzer/commit/1ee8b49))
* Skipped a test so that it can be implemented after the following patch ([59df7fd](https://github.com/wessberg/CodeAnalyzer/commit/59df7fd))
* Update package.json ([75e5bee](https://github.com/wessberg/CodeAnalyzer/commit/75e5bee))



<a name="1.0.42"></a>
## 1.0.42 (2017-07-10)

* 1.0.42 ([861c824](https://github.com/wessberg/CodeAnalyzer/commit/861c824))
* Auto-generated filenames for chunks of code will no longer be removed from the AST. ([7e8f34a](https://github.com/wessberg/CodeAnalyzer/commit/7e8f34a))



<a name="1.0.41"></a>
## 1.0.41 (2017-07-10)

* 1.0.41 ([8991b26](https://github.com/wessberg/CodeAnalyzer/commit/8991b26))
* Added the possibility of providing a raw string of code to all *get* methods (such as 'getClassDecla ([58b596c](https://github.com/wessberg/CodeAnalyzer/commit/58b596c))



<a name="1.0.40"></a>
## 1.0.40 (2017-07-10)

* - Fixed some tslint errors. ([22695e7](https://github.com/wessberg/CodeAnalyzer/commit/22695e7))
* 1.0.40 ([381c163](https://github.com/wessberg/CodeAnalyzer/commit/381c163))
* Moved Typescript to dependencies rather than development dependencies ([365c82a](https://github.com/wessberg/CodeAnalyzer/commit/365c82a))



<a name="1.0.39"></a>
## 1.0.39 (2017-07-09)

* 1.0.39 ([a63e1fb](https://github.com/wessberg/CodeAnalyzer/commit/a63e1fb))
* Fixed a bug where TemplateHeads, TemplateMiddles or TemplateTails would be unmarshalled incorrectly. ([cf87adb](https://github.com/wessberg/CodeAnalyzer/commit/cf87adb))



<a name="1.0.38"></a>
## 1.0.38 (2017-07-06)

* 1.0.38 ([219f18b](https://github.com/wessberg/CodeAnalyzer/commit/219f18b))
* Added the possibility of setting excluded files lazily. ([3b6e004](https://github.com/wessberg/CodeAnalyzer/commit/3b6e004))



<a name="1.0.37"></a>
## 1.0.37 (2017-07-06)

* 1.0.37 ([8b83e34](https://github.com/wessberg/CodeAnalyzer/commit/8b83e34))
* Added the possibility of adding one or more regular expressions that matches filepaths that should b ([2a220cb](https://github.com/wessberg/CodeAnalyzer/commit/2a220cb))



<a name="1.0.36"></a>
## 1.0.36 (2017-07-06)

* 1.0.36 ([0c1d9b2](https://github.com/wessberg/CodeAnalyzer/commit/0c1d9b2))
* Large update. Details in commit text. ([c5e22bf](https://github.com/wessberg/CodeAnalyzer/commit/c5e22bf))



<a name="1.0.35"></a>
## 1.0.35 (2017-07-05)

* 1.0.35 ([df28f77](https://github.com/wessberg/CodeAnalyzer/commit/df28f77))
* Better resolving of files in node_modules. Bumped dependencies and refactored. ([2b157cb](https://github.com/wessberg/CodeAnalyzer/commit/2b157cb))



<a name="1.0.34"></a>
## 1.0.34 (2017-07-05)

* 1.0.34 ([f3f63fa](https://github.com/wessberg/CodeAnalyzer/commit/f3f63fa))
* Identifiers for CallExpressions are now arrays of tokens. ([794ae53](https://github.com/wessberg/CodeAnalyzer/commit/794ae53))



<a name="1.0.33"></a>
## 1.0.33 (2017-07-05)

* 1.0.33 ([254487c](https://github.com/wessberg/CodeAnalyzer/commit/254487c))
* Added support for CallExpressions that are BinaryExpressions. ([a934457](https://github.com/wessberg/CodeAnalyzer/commit/a934457))



<a name="1.0.32"></a>
## 1.0.32 (2017-07-05)

* 1.0.32 ([b8da643](https://github.com/wessberg/CodeAnalyzer/commit/b8da643))
* Parsing package.json files will now skip browser fields if it contains multiple paths. ([501847e](https://github.com/wessberg/CodeAnalyzer/commit/501847e))



<a name="1.0.31"></a>
## 1.0.31 (2017-07-05)

* 1.0.31 ([40d94ba](https://github.com/wessberg/CodeAnalyzer/commit/40d94ba))
* Fixed a bug with the previous version. ([36a0c34](https://github.com/wessberg/CodeAnalyzer/commit/36a0c34))



<a name="1.0.30"></a>
## 1.0.30 (2017-07-05)

* 1.0.30 ([868d7ff](https://github.com/wessberg/CodeAnalyzer/commit/868d7ff))
* Added a fallback path to modules with  files without any value for the main field. ([679baf5](https://github.com/wessberg/CodeAnalyzer/commit/679baf5))



<a name="1.0.29"></a>
## 1.0.29 (2017-06-12)

* 1.0.29 ([ed02cab](https://github.com/wessberg/CodeAnalyzer/commit/ed02cab))
* Added a disclaimer to the README ([678b6f4](https://github.com/wessberg/CodeAnalyzer/commit/678b6f4))



<a name="1.0.28"></a>
## 1.0.28 (2017-06-08)

* 1.0.28 ([016f723](https://github.com/wessberg/CodeAnalyzer/commit/016f723))
* Added handling for evaluating declarations of kind 'FirstNode' ([3a647c9](https://github.com/wessberg/CodeAnalyzer/commit/3a647c9))



<a name="1.0.27"></a>
## 1.0.27 (2017-06-08)

* 1.0.27 ([343c6ec](https://github.com/wessberg/CodeAnalyzer/commit/343c6ec))
* Added handling for evaluating declarations of kinds 'GetAccessorDeclaration' and 'SetAccessorDeclara ([a8df6d6](https://github.com/wessberg/CodeAnalyzer/commit/a8df6d6))



<a name="1.0.26"></a>
## 1.0.26 (2017-05-31)

* 1.0.26 ([6d61a91](https://github.com/wessberg/CodeAnalyzer/commit/6d61a91))
* Added handling for finding ValueExpressions of s. ([e1f0587](https://github.com/wessberg/CodeAnalyzer/commit/e1f0587))



<a name="1.0.25"></a>
## 1.0.25 (2017-05-31)

* 1.0.25 ([4103910](https://github.com/wessberg/CodeAnalyzer/commit/4103910))
* Added handling for finding child statements of s. ([6b2d826](https://github.com/wessberg/CodeAnalyzer/commit/6b2d826))



<a name="1.0.24"></a>
## 1.0.24 (2017-05-31)

* 1.0.24 ([012ab38](https://github.com/wessberg/CodeAnalyzer/commit/012ab38))
* Bumped dependency on @wessberg/GlobalObject to v1.0.5. ([12dc731](https://github.com/wessberg/CodeAnalyzer/commit/12dc731))



<a name="1.0.23"></a>
## 1.0.23 (2017-05-31)

* 1.0.23 ([ceb4c8d](https://github.com/wessberg/CodeAnalyzer/commit/ceb4c8d))
* Added handling for formatting type expressions of kind 'ThisType' ([12cc539](https://github.com/wessberg/CodeAnalyzer/commit/12cc539))



<a name="1.0.22"></a>
## 1.0.22 (2017-05-31)

* 1.0.22 ([6d61e64](https://github.com/wessberg/CodeAnalyzer/commit/6d61e64))
* Added handling for finding child statements of s. ([2ba6419](https://github.com/wessberg/CodeAnalyzer/commit/2ba6419))



<a name="1.0.21"></a>
## 1.0.21 (2017-05-31)

* - Parsing for expressions with "deep" wouldn't find all expressions. ([4335561](https://github.com/wessberg/CodeAnalyzer/commit/4335561))
* 1.0.21 ([91a632e](https://github.com/wessberg/CodeAnalyzer/commit/91a632e))



<a name="1.0.20"></a>
## 1.0.20 (2017-05-31)

* 1.0.20 ([0d7eb80](https://github.com/wessberg/CodeAnalyzer/commit/0d7eb80))
* Moved some logic into a separate module ('compiler-common') to instead depend on that one. ([8fde2e2](https://github.com/wessberg/CodeAnalyzer/commit/8fde2e2))



<a name="1.0.19"></a>
## 1.0.19 (2017-05-31)

* 1.0.19 ([c81c032](https://github.com/wessberg/CodeAnalyzer/commit/c81c032))
* Fixed bugs. Fixes #4 ([d2423d4](https://github.com/wessberg/CodeAnalyzer/commit/d2423d4)), closes [#4](https://github.com/wessberg/CodeAnalyzer/issues/4)



<a name="1.0.18"></a>
## 1.0.18 (2017-05-30)

* 1.0.18 ([5aee9e9](https://github.com/wessberg/CodeAnalyzer/commit/5aee9e9))
* Fixed an issue where getting names of anonymous functions would sometimes crash. ([a0ea63a](https://github.com/wessberg/CodeAnalyzer/commit/a0ea63a))



<a name="1.0.17"></a>
## 1.0.17 (2017-05-30)

* 1.0.17 ([0144a62](https://github.com/wessberg/CodeAnalyzer/commit/0144a62))
* Added lots of more interfaces to the exports of the module. ([09c400f](https://github.com/wessberg/CodeAnalyzer/commit/09c400f))



<a name="1.0.16"></a>
## 1.0.16 (2017-05-30)

* 1.0.16 ([0cd0f59](https://github.com/wessberg/CodeAnalyzer/commit/0cd0f59))
* Removed Typescript as a constructor argument to instead use the one that is located in node_modules. ([daf7772](https://github.com/wessberg/CodeAnalyzer/commit/daf7772))



<a name="1.0.15"></a>
## 1.0.15 (2017-05-26)

* 1.0.15 ([e029d2f](https://github.com/wessberg/CodeAnalyzer/commit/e029d2f))
* Added a blacklist filter for specific file names (such as tslib.ts or rollup plugins.) ([3c60109](https://github.com/wessberg/CodeAnalyzer/commit/3c60109))



<a name="1.0.14"></a>
## 1.0.14 (2017-05-26)

* 1.0.14 ([e84a11c](https://github.com/wessberg/CodeAnalyzer/commit/e84a11c))
* Loads of improvements. ([b22f8e0](https://github.com/wessberg/CodeAnalyzer/commit/b22f8e0))



<a name="1.0.13"></a>
## 1.0.13 (2017-05-25)

* 1.0.13 ([a85063f](https://github.com/wessberg/CodeAnalyzer/commit/a85063f))
* Derived classes can now inherit methods, props and constructors from their parents up through the in ([02417c8](https://github.com/wessberg/CodeAnalyzer/commit/02417c8))



<a name="1.0.12"></a>
## 1.0.12 (2017-05-25)

* 1.0.12 ([a3533d2](https://github.com/wessberg/CodeAnalyzer/commit/a3533d2))
* The 'ArbitraryValue', 'IValueable' and 'INonNullableValueable' interfaces are now exported for publi ([a9e73b3](https://github.com/wessberg/CodeAnalyzer/commit/a9e73b3))



<a name="1.0.11"></a>
## 1.0.11 (2017-05-25)

* 1.0.11 ([2ce23d4](https://github.com/wessberg/CodeAnalyzer/commit/2ce23d4))
* Major overhaul in regards to serialization and value resolving ([c8db56a](https://github.com/wessberg/CodeAnalyzer/commit/c8db56a))
* Updated README ([8c3065f](https://github.com/wessberg/CodeAnalyzer/commit/8c3065f))



<a name="1.0.10"></a>
## 1.0.10 (2017-05-25)

* 1.0.10 ([2eb6000](https://github.com/wessberg/CodeAnalyzer/commit/2eb6000))
* Return statements of methods and functions can now also be broken up into expressions and resolved i ([feeb14c](https://github.com/wessberg/CodeAnalyzer/commit/feeb14c))



<a name="1.0.9"></a>
## 1.0.9 (2017-05-24)

* 1.0.9 ([23ee928](https://github.com/wessberg/CodeAnalyzer/commit/23ee928))
* Added support for getting all identifiers and the values that they are initialized to in a map. ([434d8f6](https://github.com/wessberg/CodeAnalyzer/commit/434d8f6))
* Refactored import/export payloads for consistency by adding an ILiteralValue IIdentifier kind ([d752f1e](https://github.com/wessberg/CodeAnalyzer/commit/d752f1e))
* Reformatted code ([7f25bfb](https://github.com/wessberg/CodeAnalyzer/commit/7f25bfb))
* Updated the value expressions for classes ([f947520](https://github.com/wessberg/CodeAnalyzer/commit/f947520))



<a name="1.0.8"></a>
## 1.0.8 (2017-05-24)

* 1.0.8 ([65b57da](https://github.com/wessberg/CodeAnalyzer/commit/65b57da))
* Added support for 'super()' expressions from class methods. ([0fd32c2](https://github.com/wessberg/CodeAnalyzer/commit/0fd32c2))



<a name="1.0.7"></a>
## 1.0.7 (2017-05-19)

* 1.0.7 ([7bd3e1e](https://github.com/wessberg/CodeAnalyzer/commit/7bd3e1e))
* More caching, better performance, better resolving of values, other bug fixes. ([878afb7](https://github.com/wessberg/CodeAnalyzer/commit/878afb7))
* Reformatted code ([aebaf54](https://github.com/wessberg/CodeAnalyzer/commit/aebaf54))
* Removed a console statement ([6ca17d2](https://github.com/wessberg/CodeAnalyzer/commit/6ca17d2))



<a name="1.0.6"></a>
## 1.0.6 (2017-05-18)

* 1.0.6 ([ff80b74](https://github.com/wessberg/CodeAnalyzer/commit/ff80b74))
* Added a blacklist filter for specific statement kinds that doesn't live on runtime (such as namespac ([bbb6ea3](https://github.com/wessberg/CodeAnalyzer/commit/bbb6ea3))



<a name="1.0.5"></a>
## 1.0.5 (2017-05-18)

* 1.0.5 ([7f26c72](https://github.com/wessberg/CodeAnalyzer/commit/7f26c72))
* Fixed bugs with infinite recursion and optimized performance. ([559b43e](https://github.com/wessberg/CodeAnalyzer/commit/559b43e))



<a name="1.0.4"></a>
## 1.0.4 (2017-05-18)

* 1.0.4 ([cb16202](https://github.com/wessberg/CodeAnalyzer/commit/cb16202))
* More resolved values can now be correctly computed. ([427e4c9](https://github.com/wessberg/CodeAnalyzer/commit/427e4c9))



<a name="1.0.3"></a>
## 1.0.3 (2017-05-18)

* 1.0.3 ([d3d59da](https://github.com/wessberg/CodeAnalyzer/commit/d3d59da))
* Bug fixes ([e48e11e](https://github.com/wessberg/CodeAnalyzer/commit/e48e11e))
* More work on resolving values ([966f21b](https://github.com/wessberg/CodeAnalyzer/commit/966f21b))
* Much work on resolving values. ([2f085a1](https://github.com/wessberg/CodeAnalyzer/commit/2f085a1))



<a name="1.0.2"></a>
## 1.0.2 (2017-05-16)

* 1.0.2 ([df61ccc](https://github.com/wessberg/CodeAnalyzer/commit/df61ccc))
* Object-/Array destructuring now also works for function/method parameters and arguments. ([52538dd](https://github.com/wessberg/CodeAnalyzer/commit/52538dd))



<a name="1.0.1"></a>
## 1.0.1 (2017-05-16)

* 1.0.1 ([a369d4a](https://github.com/wessberg/CodeAnalyzer/commit/a369d4a))
* 1.0.1 ([2f33b8f](https://github.com/wessberg/CodeAnalyzer/commit/2f33b8f))
* 1.0.2 ([69af35c](https://github.com/wessberg/CodeAnalyzer/commit/69af35c))
* 1.0.3 ([0710ab5](https://github.com/wessberg/CodeAnalyzer/commit/0710ab5))
* 1.0.4 ([798d197](https://github.com/wessberg/CodeAnalyzer/commit/798d197))
* 1.0.5 ([f69c4e1](https://github.com/wessberg/CodeAnalyzer/commit/f69c4e1))
* 1.0.6 ([a1dfea4](https://github.com/wessberg/CodeAnalyzer/commit/a1dfea4))
* 1.0.7 ([9501d4e](https://github.com/wessberg/CodeAnalyzer/commit/9501d4e))
* 1.0.8 ([54ebb75](https://github.com/wessberg/CodeAnalyzer/commit/54ebb75))
* 1.0.9 ([eb2061b](https://github.com/wessberg/CodeAnalyzer/commit/eb2061b))
* Added an additional export ([f67ed76](https://github.com/wessberg/CodeAnalyzer/commit/f67ed76))
* Added an index file for all exports ([9821aac](https://github.com/wessberg/CodeAnalyzer/commit/9821aac))
* Added basic support for resolving and return values from function calls AOT ([505af49](https://github.com/wessberg/CodeAnalyzer/commit/505af49))
* Added even more exports ([82bd13c](https://github.com/wessberg/CodeAnalyzer/commit/82bd13c))
* Added integration testing for combining with an actual Marshaller implementation. Renamed 'getInitia ([ad9b7b1](https://github.com/wessberg/CodeAnalyzer/commit/ad9b7b1))
* Added more text for the README ([2a957a2](https://github.com/wessberg/CodeAnalyzer/commit/2a957a2))
* Added payloads to exports ([0269a90](https://github.com/wessberg/CodeAnalyzer/commit/0269a90))
* Added protection against infinite recursion ([31b34c8](https://github.com/wessberg/CodeAnalyzer/commit/31b34c8))
* Added recursion support for class methods as well ([23b661f](https://github.com/wessberg/CodeAnalyzer/commit/23b661f))
* Added recursive function support. ([4bee9b4](https://github.com/wessberg/CodeAnalyzer/commit/4bee9b4))
* Added SpreadOperators and refined array tokenify ([28c200d](https://github.com/wessberg/CodeAnalyzer/commit/28c200d))
* Added support for binding patterns in variable assignments such as 'const [a, b] = [1, 2]' ([06c0e74](https://github.com/wessberg/CodeAnalyzer/commit/06c0e74))
* Broader language support ([920a487](https://github.com/wessberg/CodeAnalyzer/commit/920a487))
* Bug fixes, more tests ([276656a](https://github.com/wessberg/CodeAnalyzer/commit/276656a))
* Classes and functions can now also be exported ([b5b7b40](https://github.com/wessberg/CodeAnalyzer/commit/b5b7b40))
* Comminjs export support improvements ([12fe4c2](https://github.com/wessberg/CodeAnalyzer/commit/12fe4c2))
* Finalized new folder structure ([2b61630](https://github.com/wessberg/CodeAnalyzer/commit/2b61630))
* first commit ([fdbc46d](https://github.com/wessberg/CodeAnalyzer/commit/fdbc46d))
* First work on resolving values ([6f92108](https://github.com/wessberg/CodeAnalyzer/commit/6f92108))
* Fixed a bug where the 'main' entry pointed to the wrong file in the package.json file ([a248f41](https://github.com/wessberg/CodeAnalyzer/commit/a248f41))
* Fixed an export statement ([8ca2437](https://github.com/wessberg/CodeAnalyzer/commit/8ca2437))
* Fixed an issue with 'this' scoping ([9ff8194](https://github.com/wessberg/CodeAnalyzer/commit/9ff8194))
* Fixed bugs with identifiers and parsing element access expressions ([6da7b85](https://github.com/wessberg/CodeAnalyzer/commit/6da7b85))
* Fixed marshalling of string literals ([817bb2d](https://github.com/wessberg/CodeAnalyzer/commit/817bb2d))
* Lots of work on resolving node module packages and handling commonjs exports ([f2b6fe0](https://github.com/wessberg/CodeAnalyzer/commit/f2b6fe0))
* Made improvements to deep path formatting ([0f7502c](https://github.com/wessberg/CodeAnalyzer/commit/0f7502c))
* More exported interfaces and types ([4e4817a](https://github.com/wessberg/CodeAnalyzer/commit/4e4817a))
* More of the language now supported. ([064c62b](https://github.com/wessberg/CodeAnalyzer/commit/064c62b))
* More refactoring, cleanup, reuse ([5333410](https://github.com/wessberg/CodeAnalyzer/commit/5333410))
* More refactoring. More code-reuse and less project-specific ([6eea7ad](https://github.com/wessberg/CodeAnalyzer/commit/6eea7ad))
* More reuse and reuse of interfaces ([8c4566a](https://github.com/wessberg/CodeAnalyzer/commit/8c4566a))
* More tests ([109367e](https://github.com/wessberg/CodeAnalyzer/commit/109367e))
* More work and refactoring ([04e8caf](https://github.com/wessberg/CodeAnalyzer/commit/04e8caf))
* More work and refinements ([10e5127](https://github.com/wessberg/CodeAnalyzer/commit/10e5127))
* More work on ExportDeclarations ([a853f04](https://github.com/wessberg/CodeAnalyzer/commit/a853f04))
* More work on initialization valeus and deep parsing ([56bd99b](https://github.com/wessberg/CodeAnalyzer/commit/56bd99b))
* More work on initialization values ([f532792](https://github.com/wessberg/CodeAnalyzer/commit/f532792))
* More work on language features ([ec19ec1](https://github.com/wessberg/CodeAnalyzer/commit/ec19ec1))
* More work on language features and support ([a9cf3e2](https://github.com/wessberg/CodeAnalyzer/commit/a9cf3e2))
* More work on resolving values ([b1667be](https://github.com/wessberg/CodeAnalyzer/commit/b1667be))
* More work on resolving values ([6f3d703](https://github.com/wessberg/CodeAnalyzer/commit/6f3d703))
* More work on resolving values ([354c79b](https://github.com/wessberg/CodeAnalyzer/commit/354c79b))
* More work on resolving values, now with function arguments ([c4bf39f](https://github.com/wessberg/CodeAnalyzer/commit/c4bf39f))
* More work on typings. Refactoring. Cleanup ([4d7ffce](https://github.com/wessberg/CodeAnalyzer/commit/4d7ffce))
* Moved 'originalStatement' out if IIdentifiers and added a private map between the two to ensure that ([fdf1d51](https://github.com/wessberg/CodeAnalyzer/commit/fdf1d51))
* Moved from ts.Type typings to direct bindings ([0c507fd](https://github.com/wessberg/CodeAnalyzer/commit/0c507fd))
* Nested namespace exporting now works ([5d9d38c](https://github.com/wessberg/CodeAnalyzer/commit/5d9d38c))
* Now, both ES-modules and require-statements is parsed and detected as import-statements. We now dete ([8714b7f](https://github.com/wessberg/CodeAnalyzer/commit/8714b7f))
* Refactored most arrays into key-value stores for indexed lookups ([0fb5649](https://github.com/wessberg/CodeAnalyzer/commit/0fb5649))
* Refactored most logic into separate classes and modules to break the logic out into different pieces ([fd004ee](https://github.com/wessberg/CodeAnalyzer/commit/fd004ee))
* Refactored test methods into separate test files ([1c9cc34](https://github.com/wessberg/CodeAnalyzer/commit/1c9cc34))
* Refactoring ([d1675bd](https://github.com/wessberg/CodeAnalyzer/commit/d1675bd))
* Refinements and testing. Some breaking changes ([4f755d9](https://github.com/wessberg/CodeAnalyzer/commit/4f755d9))
* Reformatted code ([49a6170](https://github.com/wessberg/CodeAnalyzer/commit/49a6170))
* Reimplemented enum support ([4afee33](https://github.com/wessberg/CodeAnalyzer/commit/4afee33))
* Removed a chunk of unneeded code ([38d26d5](https://github.com/wessberg/CodeAnalyzer/commit/38d26d5))
* Removed Mocks since they didn't work well. Added extension addition to module paths ([b3b0c86](https://github.com/wessberg/CodeAnalyzer/commit/b3b0c86))
* Renamed project to 'CodeAnalyzer' ([cd79ddc](https://github.com/wessberg/CodeAnalyzer/commit/cd79ddc))
* Resolving values now also works for imports. This fixes #3 ([8adfe08](https://github.com/wessberg/CodeAnalyzer/commit/8adfe08)), closes [#3](https://github.com/wessberg/CodeAnalyzer/issues/3)
* Scoped the package for private access ([17d836f](https://github.com/wessberg/CodeAnalyzer/commit/17d836f))
* The API can now also extract newExpressions ([5f48130](https://github.com/wessberg/CodeAnalyzer/commit/5f48130))
* The left-hand side of CallExpressions or NewExpressions might be a literal. The LanguageService can  ([48b27b5](https://github.com/wessberg/CodeAnalyzer/commit/48b27b5))
* The service can now get all function declarations ([7055527](https://github.com/wessberg/CodeAnalyzer/commit/7055527))
* Updated interface signature for 'getInitializedValue' to make it support more Statement kinds ([30c759e](https://github.com/wessberg/CodeAnalyzer/commit/30c759e))
* Updated README ([8f0ee61](https://github.com/wessberg/CodeAnalyzer/commit/8f0ee61))
* Values from loops can now be resolved ([db84f7c](https://github.com/wessberg/CodeAnalyzer/commit/db84f7c))
* Wrote more on the README ([5cdf3c8](https://github.com/wessberg/CodeAnalyzer/commit/5cdf3c8))



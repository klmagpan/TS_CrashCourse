# TypeScript 5 Crash Course for JavaScript Developers Demos


## Demo: How to Version Control TypeScript (vc-example)
- Install TypeScript with npm
- Move it to TypeScript
- Compile it to JavaScript
- Look at it all from a version control standpoint

## Demo: Debugging TypeScript (vc-example)
- Emit a source map with a compiler option
- Create a tsconfig file (tsc --init)
- Configure it to emit a source map

## Demo: TypeScript Typing vs. JavaScript Typing (client/tempserver/shared)
- Types in JavaScript
- Types in TypeScript
- How this all works when JavaScript talks to TypeScript emitted JavaScript

## Demo: An Avoided Unit Test (unit-test-example)
- A JavaScript unit test that is necessary with loose typing
- Refactor to TypeScript
- Understand the class of unit testing 

## Demo: Implementing a Third-Party TS Interface (interface-example)
- A concrete implementation of the ILogger interface

## Demo: Implementing a Generic in TS (generics-example)
- A generic key value pair in an interface
- Consume it in a couple of different ways
- Migrating a fixed type to a generic
- A use case for generic classes
- Consume it in several ways

## Demo: A Closer Look at our Transpilation (unit-test-example)
- The abstract syntax tree (parent/child)
- Understand what the compiler is doing using the TypeScript AST Viewer

## Demo: Working with tsconfig Files (vc-example)
- Structure the compilation options
- Demonstrate how Visual studio enforces the target attribute

## Demo Inferring Types from Type Declaration Files (vc-example)
- How to generate type definition files
- Use strong typing in TypeScript
- tsc --declaration exployees.ts
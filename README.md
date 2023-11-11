# DH Challenge

## Overview

This project involves the implementation of a directory structure traversal using Node.js, which is then transitioned to TypeScript for added type safety and maintainability. The main functionality is to traverse a file system directory and create a tree-like object representation of it.

## Development Process

### From Node.js to TypeScript

1. **Initial Implementation in Node.js**: The project begins with a Node.js script to traverse directory structures. This script uses standard Node.js libraries to access and interact with the file system.

2. **Transition to TypeScript**: To enhance the project with type safety and the robust features of TypeScript, the script is then migrated to TypeScript. This involves:
   - Adding type annotations.
   - Configuring the TypeScript compiler.
   - Refactoring the code to align with TypeScript best practices.

3. **Building and Running the TypeScript Version**: The TypeScript code is transpiled to JavaScript using the TypeScript compiler. This is necessary for execution in a Node.js environment, which does not natively understand TypeScript.

### NPM Scripts

The following npm scripts are configured in `package.json` to facilitate building, running, and testing the application:

- `start`: Runs the Node.js application using the transpiled JavaScript files in the `./dist` directory.
- `build`: Compiles the TypeScript files to JavaScript, placing the output in the `./dist` directory.
- `build:run`: A convenience script that builds the TypeScript files and then starts the application. It can accept parameters for folder and depth, passed as `-- folder depth`. For example: `npm run build:run -- dummy_dir 5`.
- `test`: Runs test suites using Jest, a JavaScript testing framework.

### Algorithm: Depth-First Search (DFS)

The file system's directory structure is inherently hierarchical, resembling a tree. To traverse this structure, the Depth-First Search (DFS) algorithm is used. DFS is ideal for exploring each branch of the tree to its fullest before backtracking, which aligns well with the nature of directory traversal.

### Importance of Testing

Tests are crucial in this project to ensure the reliability and correctness of the directory traversal functionality. By writing tests:
- We can automatically verify that the code behaves as expected.
- We can detect and prevent regressions when modifying the code.
- We ensure that the application can handle various file system structures correctly.

## Getting Started

To get started with this project:

1. **Install Dependencies**:
```bash
npm install
```
2. **Build the TypeScript Project:**
```bash
npm run build
```
3. **Run the Application:**
```bash
npm start
```
4. **Run Tests:**
```bash
npm test
```
5. **Run the Application with Parameters:**
```bash
npm run build:run -- folder depth
```
Replace folder with your desired folder path and depth with the depth level you want to traverse.

## Author
Eduardo Arredondo Orozco 2023.

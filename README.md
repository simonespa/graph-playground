# Data structures & Algorithms
This repo is a collection of data structures and algorithms documentation and a playground to use for your own learning.
## How to use it
Install all dependencies

```
npm install
```

To play around with the data structures and algorithms and create your own stuff, run TS in watch mode in order to get incremental compilation errors while you code.

```
npm run dev
```

You can test the output of what you created by running it directly with `ts-node`

```
npm run ts-node <path/to/file.ts>
```

You can also write tests and run the entire suite with

```
npm run test
```

and get the coverage report in text and html format with

```
npm run test:coverage
```
## Repo creation
To get the bare minimum setup to play with TypeScript, run:

```
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init --rootDir src --outDir build --lib es6 --noImplicitAny true --resolveJsonModule
```

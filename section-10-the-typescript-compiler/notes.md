# The Typescript compiler

## Table of Contents:

- [Compiling to JavaScript](#compiling-to-javascript)
- [Watch Mode](#watch-mode)
- [Working w/ Multiple Files](#working-with-multiple-files)
- [The Files Compiler Option](#the-files-compiler-option)
- [Include & Exclude](#include-and-exclude-options)
- [outDir Option](#outdir-option)
- [Target Option](#target-option)
- [Strict Option](#strict-option)
- [Compiler Options & Wrap Up](#compiler-options-wrap-up)

---

## Compiling to JavaScript:

- __NOTE :__ This section of the overall notes focuses more on the settings of the `TypeScript` compiler.

- To get a better understanding of what the compiler is __REALLY__ doing behind the scenes, we first need to understand __HOW__ the complier is interpreting the code inside our `TypeScript` files by default and you can see this in the [TypeScript Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

- It should also be noted that these notes will only show a __FRACTION__ of the available settings that are available in the [reference guide](https://www.typescriptlang.org/tsconfig).

- As you will most likely notice when reviewing the link above, is that the docs contain several options that can be enabled or disabled.

- Now that we've seen an online version of the settings file, the question now becomes, how do we actually set all this up ourselves?

- While we _COULD_ write all these settings in our own `json` file, we do have the `tsc --init` command which will create a `tsconfig.json` file that will contain all the settings that you may have seen in the links above.

- Again, if you open the file, you will see __A LOT__ of settings that are commented out but there will be comments that will provide a brief description of what the settings are doing.

- To see how our files are impacted by the settings in our `tsconfig.json` file, you will need to create a new `ts` file that can be named anything you want however, we have provided the code below to help you get started and compile the code locally.

EXAMPLE CODE 1:

```typescript
interface Chicken {
    name: string;
    eggsPerWeek: number;
    age: number;
}

const pepper: Chicken = {
    name: "Pepper",
    eggsPerWeek: 8,
    age: 1
}
```

- Now that you have a sample `typescript` file and there is valid code within, try running the `tsc` command so that you get a `javascript` version of the code.

    - __NOTE :__ This will require that you have your `TypeScript` library installed locally otherwise, the command will not work properly.

- [Back to Top](#table-of-contents)

---

## Watch Mode:

- Next, we will review the command `tsc --watch` OR `tsc --w` and while this command does __NOT__ impact the actual settings `json` file, the command will be on the lookout for changes in the `typescript` files and re-compile afterwards.

- By default, this command will watch for changes in __ALL__ `typescript` files however, if there are specific filenames that you only want to re-compile, then you can provide the filename(s) after the `watch` command.

- By enabling this flag, you will get feedback if there are any parts of your code that do __NOT__ meet the requirements for the updates that were made in the `typescript` file(s).

- You will see the feedback in the terminal __AND__ changes may not be noticed in the `javascript` output files.

- [Back to Top](#table-of-contents)

---

## Working with Multiple Files:

- Now that we know how to keep trck of changes in one file with `tsc --watch`, let's suppose that we are working with a larger project and there are __MULTIPLE__ files that need recompiled after each save.

- To do this, we will create two files in `typescript` as shown below:

EXAMPLE CODE 2:

```typescript
// chickens.ts

interface Chicken {
    name: string;
    eggsPerWeek: number;
    age: number;
}

const pepper: Chicken = {
    name: "Pepper",
    eggsPerWeek: 8,
    age: 1
}
```

```typescript
// farmstand.ts

interface Product {
    price: number;
    name: string;
    quantity: number;
}

const logProduct = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`);
}
```

- For both the files above, while we __COULD__ use the `tsc [FILENAME]` command, we can use the simple `tsc` command and that will cause __ALL__ files that end in `.ts` to be recompiled.

- __NOTE :__ We will later learn how to avoid recompiling files in specific directories that end in `.ts`.

- The main theme to understand here is that we can use the standard `tsc` command to recompile all our files if we need to capture all changes.

- [Back to Top](#table-of-contents)

---

## The Files Compiler Option:

- Now that we've seen some basic compiling commands, we can now begin to review the `tsconfig.json` file that is created whenever we run the `tsc --init` command.

- This file will contain the options for us to add, remove, or modify so that we can tell `typescript` how to compile our project files.

- One way this can be achieved is by adding the `files` key to the main configuration file to specify which directories/files need to be compiled.

    - __NOTE :__ This key needs to be added __AFTER__ the default `compilerOptions` object so pay attention to where this key is being added.

CODE EXAMPLE 3:

```json
{
    "compilerOptions": {},
    "files": [
        "farmstand.ts",
        "index.ts",
    ]
}
```

- In the example above, let's suppose that we have three files in our directory called `farmstand.ts`, `index.ts`, and `dontTouch.ts`. If we only include the filenames in the `files` key as shown above, then those are the only files that will recompile.

- Be advised that this key can also include nested directories or files within nested directories.

- Next, we will review another option that is broader and doesn't require adding filenames manually.

- [Back to Top](#table-of-contents)

---

## Include and Exclude Options:

- Next, we will review the `include` and `exclude` options that we can specify in the `compilerOptions` object.

    - __WARNING!__ If you specify the `filename` key in your configuration file, then __NOTHING__ will be compiled which is to say don't use the `filename` option if you are using `include` and `exclude` options.

- With regards to the `include` option, if we specify nothing (as we have been doing), then __ALL__ typescript files will be recompiled automatically as this is the default behavior.

- We can also specify multiple directories or files wihin a directory such as `src/**` which will cause all typescript files in the `src` to be included in the compiliation process.

- Keep in mind that these options also have to be specified __AFTER__ the `compilerOptions` object in your configuration file so the file may look something like this:

CODE EXAMPLE 4:

```json
{
    "compilerOptions": {},
    "include": ["src"]
}
```

- With the example above, since we used the `include` option, the complier will __ONLY__ compile the files under the `src` directory.

- Conversely, if we wanted to exclude specific files, then we would use the `exclude` option and specify the `filename` or directory to exclude from the compilation process.

- __NOTE :__ If there is a file that is listed within the `include` array, which needs to be excluded, then you will need to specify the path to that file as it relates to the `tsconfig.json` file.

- In addition, if there are specific files that need to be excluded but follow a pattern, then we can provide the pattern as well such that we exclude test files using the pattern `**.test.ts` and so on.

- For more options, use the [l33t h4x0r tool](https://www.google.com) or visit the docs!

- Lastly, if we are working with several node packages, the `exclude` option will exclude the `node_modules` directory.

- [Back to Top](#table-of-contents)

---

## Outdir option:

- Now that we've seen how to include and exclude files in the compilation process, we can begin reviewing __WHERE__ to place the resulting `JavaScript` files as currently, these files are being listed alongside their `typescript` files.

- In order to set this up, we will need to make use of the `outdir` option in our configuration file.

- The first step is to create a new directory in our project for our JavaScript files to be sent to after the compilation process and __NORMALLY__, this directory will be called `dist` such that our project structure may appear as follows:

CODE EXAMPLE 5:

```
myProject
|
---
    dist/
    src/
    tsconfig.json
```

- Next, we will need to point the compiler at the new `dist` directory and for this step, we will update the `ourDir` option in our configuration file to now be our new `dist` directory as it relates to the configuration file.

- For the example above, we would need to set the option to `./dist`.

- Now, anytime that the compiler runs, our JavaScript files will be listed in the `dist` directory!

- [Back to Top](#table-of-contents)

---

## Target Option:

- If you've been looking at the `js` files that have been compiling so far, you may have noticed that the syntax is set as `es5` syntax meaning that the newer syntax is not being output in our JavaScript files.

- If you would like to update this behavior, then you will need to update the `target` option in your `tsconfig.json` file to one of the supported versions of JavaScript which can be found in the [docs](https://www.typescriptlang.org/tsconfig#target).

- If we wanted to use the more advanced version of JavaScript, we would need to update the `target` option to contain the value of `es6` __OR__ `es2015`.

- Once the code recompiles, you will see that the file outputs will be following the rules of that version of JavaScript code.

- The reason that this matters is if you use arrow functions in your `typescript` files, those functions will __NOT__ be carried over in the `es5` syntax nor will you see `const`, or `let` variables.

- In addition, this can help secure your standard `Javascript` code.

- [Back to Top](#table-of-contents)

---

## Strict Option:

- The `strict` option in our `tsconfig.json` file basically ensures that our `typescript` files contain types in __ALL__ the code written therefore reinsuring that we are generating the most secure code.

- By default, `strict` is set to `true` in our configuration file and while the setting can be disabled, it is __NOT__ recommended as this will no longer check that your variables, functions, etc contain types which is the entier point of TYPEscript.

- __IF__ the key is set to `false`, then you will just get suggestions in your code. This is all to say, __DON'T DISABLE THIS SETTING__.

- In addition to the `strict` option, there are others that you can enable or disable however, you will need to review these __CAREFULLY__ as configuration file has these options commented out in order to ensure the max secure code possible.

- This information is also useful because you may encounter a codebase where the code itself is not acting correctly which may be due some of the type settings being disabled.

- [Back to Top](#table-of-contents)

---

## Compiler Options Wrap Up:

- There are some additional options that we have not yet covered which will be covered in a later section such as the following:

    - `lib`

    - `modules`

    - `allowJs`

    - `checkJs`

    - `sourceMap`

    - `noEmit`

    - `noEmitOnError`

- While these are some of the more common options for configuration, keep in mind that there may be other options that you will need to update depending on your application's need.

- [Back to Top](#table-of-contents)

---
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

- You will see the feedback in the terminal __AND__ no changes will be noticed in the `javascript` output files.

- [Back to Top](#table-of-contents)

---

## Working with Multiple Files:

- [Back to Top](#table-of-contents)

---

## The Files Compiler Option:

- [Back to Top](#table-of-contents)

---

## Include and Exclude Options:

- [Back to Top](#table-of-contents)

---

## Outdir option:

- [Back to Top](#table-of-contents)

---

## Target Option:

- [Back to Top](#table-of-contents)

---

## Strict Option:

- [Back to Top](#table-of-contents)

---

## Compiler Options Wrap Up:

- [Back to Top](#table-of-contents)

---
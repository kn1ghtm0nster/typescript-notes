# Section III - Types and Anotations

## Table of Contents

---

## Intro

-   First and foremost, the key rule about TS is that each variable/function will need to have a `type`.

-   Below are some of the examples that we can use:

    -   `Object`

    -   `Array`

    -   `Function`

    -   `Tuple`

    -   `Enum`

-   **NOTE :** Keep in mind that there are much MUCH more out there but the above are some of the more common `object` types.

-   The reason the first point is critical to understand is because we can inform TS that a function defined in our file needs to return a specific `type` such as a `boolean` or a `number`.

-   Additionally, we can also specify the `type` of a property such as a property with the key of colors which needs to have an `array` of strings.

-   **NOTE :** The main pattern we will be seeing for now revolves around `variables` and setting `types` to variables which is called `type annotation`.

-   The key thing to understand in this annotation is that we will use a `:` (colon) after our variable declaration to specify a type. We will use strings for now.

EXAMPLE 1:

```TS
// TYPESCRIPT
const myAwesomeVariable: string = 'So Awesome!';

// JAVASCRIPT
const javascriptVariable = 'So Awesome but in JS!';
```

-   If the above is confusing just remember the following pattern -> `let/const myVariable: type = value`

-   **NOTE :** They type of a variable will not always be a string, sometimes it will be a `boolean` other times it may be `undefined`.

-   **REMEMBER!** `Typescript` is all based on the `type` of a variable meaning that if you create a variable with the `type` of `string`, you CANNOT change that variable to contain a number!

```TS
let variableOne: string = 'testing';

// ERROR!
variableOne = 13;

console.log(variableOne);
```

-   In addition, if you try to use a method for a variable and that type of data does NOT have that method listed, then you will see an error in the editor.

---

## Working w/ Numbers and Booleans

-   Just like JS, we also have the same other primitive data types such as `Numbers`.

-   We use the same syntax as the previous note section to declare these types of variables.

-   `boolean` is also another data type that is available and can only contain either `true` or `false`.

-   **REMEMBER!** We still cannot update the values for variables to a different data type. `string`, `number`, and `boolean` are the most common primitives in the world of TS.

---

## Compiling Typescript

-   So far, we have only been working with a static file in our editor however, this is not how TS files will be run on bigger applications and for this, we will need to **compile** our code for the application to use the native JS syntax.

-   We can do this from our terminal or via VS code by right clicking on the file and selecting `open in integrated terminal` option.

-   The base command for running these files is: `tsc [FILENAME].ts`

-   Once your code is compiled to JS, you will see a new JS file!

    -   **NOTE :** IF there are any errors in your code, then the terminal will inform you of any TS violations BUT this doesn't stop your file from compiling in JS version. The file just won't contain the invalid syntax.

---

## Type Inference

-   While we can declare variables based on type (and is highly reommended), most of the time we can rely on type inferencing with TS.

-   What this means is tha if we assign a variable such as `x = 25`, typescript will understand that the variable is to ONLY be used as a number type so if we try and reassign it to a string, we will get an error just like before.

-   This also applies to the rest of the primitive data types!

-   There is a case for specifying the type but for now we will just let TS infer this for us.

---

## The Any Type

-   This data type is the catch-all type which will allow our variables in TS to be updated just like regular JS.

-   **NOTE :** This defeats the purpose of TS so use it for emergencies ONLY.

-   There are times where this data type does come in handy or will need to be used depending on the app.

EXAMPLE 2

```TS
let thing: any = "hello";

thing = 1;

thing = false;
```

-   So if we are to avoid using the `any` type, when do we use it?

---

## Delayed Initialization & Impilicit Any

-   The type of `any` is a good option whenever we are using a variable that is declared but doesn't contain information whenever the app is started.

EXAMPLE 3

```TS
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
let foundMovie;
```

-   With the current code block above, we need to have a variable to use once a movie is found the variable cannot contain a value whenever the file is initialized.

-   TS will automatically understand that the variable that is initialized is set with a `type` of `any` even if we set the value to a string that is within the array defined.

-   Keep in mind that we want to avoid the `any` type for TS so in this case, we can simply add the value that the variable will EVENTUALLY hold by providing that during the variable initialization as shown below.

EXAMPLE 3.1

```TS
const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"]
let foundMovie: any;
```

-   As shown above, the `foundMovie` variable now has a type set to it without a value which tells TS that the variable will EVENTUALLY have a value just not on app start.

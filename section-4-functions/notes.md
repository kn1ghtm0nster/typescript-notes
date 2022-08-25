# Functions

## Table of Content

---

## Function Parameter Annotations

-   We have seen how to assign variable types to our variables in TS however, this also applies to functions that take in arguments meaning that we can set the type of the parameter that will be passed in as the example below shows:

EXAMPLE 1

```JS
const square = (num) => (num * num);
```

-   With the example above, we can see that functions work just like JS in terms of declaring them and setting arguments however, the additional benefit is that we can now set the expectation of which type of data the function params will accept meaning that we will be able to prevent bugs if someone tries to pass in a string or a boolean to our `square` function which would return `NaN` in JS.

EXAMPLE 1.1

```JS
const square = (num:number) => (num * num);
```

-   Now with the updated syntax above, our function is ONLY expecting `number` types to be passed in otherwise, an error will be seen.

-   **NOTE :** There may be times when a parameter needs to be different `types` BUT we will get to that in a later section.

---

## Function Parameter Annotations P2

-   Just like in JS, we can have as many parameters as we want along with each parameter having their own `type`.

EXAMPLE 2

```JS
const doSomething = (person: string, age:number, isFunny:boolean) => {
    return `${person} is ${age} years old and maybe they are funny?${isFunny}`;
}

// ERROR! Missing params!
doSomething('chicken')
```

---

## Working w/ Default Parameters

-   Along with checking for the correct `type`, if the function is called with too few or too many params, TS will give a message specifying the issue of params (missing or too many along with incorrect values).

-   With regular JS, we can simply add a default value to our functions in the event that a param is not passed in whenever the function is called and this also works in a similar way when it comes to TS.

EXAMPLE 3

```JS
const greet = (person: string = 'stranger') => {
    return `Hi there, ${person}!`;
}
```

-   As the code above shows, the default param value will need to be placed AFTER the data type and this will still function the same in our TS code without issues.

---

## Return Type Annotations

-   Along with setting our parameter annotations, we can also state the `type` of our `return` for our functions!

-   The syntax from JS to TS doesn't change that much as shown below.

EXAMPLE 4

```JS
const addNums = (x:number, y:number): number =>{
    return x + y;
}
```

-   As the code above shows, the only difference is that we add the colon after we declare our params (if any) with the `return type` for our function.

-   **NOTE :** Just like our first variables that we wrote, we don't HAVE to specify the `return type` since TS can figure out this information on its own but it is still highly encouraged so that it's obvious to us what the return value should be!

-   This also helps prevent issues like forgetting the `return` keyword.

-   **NOTE :** Keep in mind that there could be times that our function returns different `types` just like we could have different `types` for our defined variables.

-   Long story short, `return types` are optional but again, HIGHLY encouraged.

---

## Anonymous Functions

-   Along with regular functions, there may be times that we need to use anon functions such as `map` with an array to do X with the data.

EXAMPLE 5

```JS
const colors = ['red', 'green', 'blue']

colors.map(color => {
    color.toUpperCase()
})
```

-   With the example above, TS will understand and set the `type` for color based on the context of the method we are using. Since the array contains strings, then TS will state that each color will be a `string` data type.

---

## The Void Type

-   When it comes to the `void` keyword, keep in mind that this keyword is used for functions that should NOT return anything (the function is void of data).

-   While TS can infer this well, it is still highly recommended that you specify this in the `return type` to avoid issues with TS and compiling your code.

EXAMPLE 6

```JS
const logTwice = (msg: string): void => {
	console.log(msg);
	console.log(msg);
};
```

-   In the example above, we are logging a message twice and since we used the `void` type for the return value in our function, we do NOT need to call the `return` keyword. If we do, TS will get upsetty >:(

---

## The Never Type

-   The keyword `never` for our return type in functions will specify that a function should NEVER stop running (think infinite loop).

-   **NOTE :** DO NOT confuse this type with `void` since those types of returns are `null` or `undefined` while `never` continues function execution.

-   A good example of using the `never` keyword is a function that throws an exception error.

-   **NOTE :** This keyword is unique to TS only.

-   Another way of thinking about this keyword is that the function does NOT ever use the `return` keyword and TS will actually prevent you from using the keyword within the function if the function has the `never` return type.

EXAMPLE 7

```JS
const makeError = (msg: string): never => {
	throw new Error(msg);
};
```

-   In the example above, the function is not returning anything but instead will continue to execute the `makeError` function because it has the `never` return type assigned to it.

-   For now this is all we need to know about the `never` type but we will see this later on!

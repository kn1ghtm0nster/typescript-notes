# Union Types

## Table of Contents:

-   [Intro](#intro)
-   [Type Narrowing w/ Union Types](#type-narrowing-w-union-types)
-   [Union Types & Arrays](#union-types-and-arrays)
-   [Literal Types](#literal-types)

---

## Intro:

-   So far, we have been setting types for our variables to be a **SINGLE** type and same goes for our functions, they cannot accept anything other than the types that we set on them.

-   With `Union Types` however, we have the ability to provide different possible types for a function, variable, etc. As long as the type is correct, `Typescript` won't return any errors.

-   How do we use this syntax? by using the single `pipe` character (`|`) to separate the types we want to include as possibilities. Think of it as multiple acceptable types.

EXAMPLE 1:

```typescript
const guessAge = (age: number | string): string => {
	return `Your age is ${age}`;
};
```

-   As the example above shows, our `age` parameter can now accept a `string` or `number` without any issues.

-   Normally, you won't have to use `unions` for single variables since we want to be as strict as possible.

-   Similarly to Arrays, we aren't limited to primitive types and we can use `custom types` for our annotations as shown below.

EXAMPLE 1.1:

```typescript
type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

let coordinates: Point | Loc = { x: 1, y: 32 }; // valid!

coordinates = { lat: 40.7128, long: 74.006 }; // ALSO VALID!
```

-   As the example above shows, we are able to use our own `custom` types to set our variable types to use either object and as long as they contain the correct property types, everything will work as intended.

-   Main thing to undestand is that we are able to use different types by using `unions`.

-   Next, we will discuss `unions` and functions.

-   [Back to Top](#table-of-contents)

---

## Type Narrowing w/ Union Types:

-   So far, we have been able to set different `types` for our functions to use without isues using `unions` however, if we have a `type` that **ONLY** works with one type and nothing else? This will cause issues with our function and will also throw an error.

EXAMPLE 2:

```typescript
function calculateTax(price: number | string, tax: number) {
	return price * tax;
}
```

-   The example above is showing this very issue as our `price` parameter is allowing a `number` or `string` type to be passed in and the `tax` parameter **ONLY** accepts a `number` which cannot be multiplied with a `string` type and this is the error you will see in your file or terminal.

-   The simple way of avoiding these kinds of issues is to implement `type narrowing` which we will cover more in depth later on.

-   The first way of implementing `type narrowing` is by using `type of` for our `price` parameter and either returning the calculation or doing something else.

EXAMPLE 2.1:

```typescript
function calculateTax(price: number | string, tax: number) {
	if (typeof price === "string") {
		price.replace("$", "");
	}
}
```

-   as the example above shows, checking for the price to be a `string` will allow us to use the methods for strings and replace any dollar signs with empty strings (removing the dollar sign).

-   Now, we can process the normal calculation by adding the `else` condition since that means the `price` parameter **HAS** to be a number and `TS` will know this based on our logic.

```typescript
function calculateTax(price: number | string, tax: number) {
	if (typeof price === "string") {
		price.replace("$", "");
	} else {
		return price * tax;
	}
}
```

-   The main thing to understand is that `type narrowing` is a simple `type` check before working with a specific value.

-   [Back to Top](#table-of-contents)

---

## Union Types and Arrays:

-   Now that we've seen how to check our `types` and how to use `unions`, we can go back to talking about `arrays` and how we can allow one or more `types` to be included in the array without issues.

-   **NOTE :** While we **COULD** set the type of the array to `any`, we could run into issue so we typically want to limit the types certain options.

-   The syntax below shows how we can achieve setting multiple `types` for an array.

EXAMPLE 3:

```typescript
const stuff: (number | string)[] = [];
stuff.push(1, 2, 3, "another", "string");
```

-   **NOTE :** Keep in mind the parentheses that wrap the `unions` as this is how we can annotate the different `types` for our arrays.

-   **REMEMBER!!!** We are not limited to only the primitive types and we can include any custom types that we create.

EXAMPLE 3.1:

```typescript
type Point = {
	x: number;
	y: number;
};

type Loc = {
	lat: number;
	long: number;
};

const coords: (Point | Loc)[] = [];
```

-   The example above is showing the ability to use `custom` type annotations for arrays and that will be allowed **AS LONG AS THE PATTERN FOR THE CUSTOM TYPES ARE FOLLOWED**.

-   The main thing to understand is that for `Arrays`, we need to wrap our `union` inside parentheses and THEN add the array brackets **OUTSIDE** the parentheses.

-   [Back to Top](#table-of-contents)

---

## Literal Types:

-   With regards to `literals`, we can set these `types` to our variables but instead of using a `type` annotation, we literally make the type of the variable what we set as shown below (I know the wording is confusing).

EXAMPLE 4:

```typescript
let zero: 0 = 0;

zero = 2; // ERROR!
```

-   The example above is what a `literal` type is since the `type` will **ALWAYS** be the number 0 vs using the `number` type which could be **ANY** number.

-   This also applies to `strings` and other primitive literal types.

-   One of the primary uses for `literal types` is setting different possible types for a parameter inside a function and running logic based on the literal type that was passed in.

EXAMPLE 4.1

```typescript
const giveAnswer = (answer: "yes" | "no" | "maybe"): string => {
	return `The answer is ${answer}.`;
};

giveAnswer("yes"); // valid!

giveAnswer("nah cuh"); // ERROR!!!
```

-   With the example above, we are using `literal` types along with `unions` to accept different answer values for our `answer` parameter but keep in mind that these options are the **ONLY** allowed options for the parameter.

-   Along with setting `literal types`, we can create a custom `literal type` which we can use in our file which shows that even literals support custom typing with `union types`.

```typescript
type DayOfWeek =
	| "Monday"
	| "Tuesday"
	| "Wednesday"
	| "Thursday"
	| "Friday"
	| "Saturday"
	| "Sunday";

let today: DayOfWeek = "Monday"; // valid!

today = "tomorrow"; // ERROR!!
```

-   Main thing to understand is `literal` types limit the `type` annotation to whatever specific values are set for that variable / custom type.

-   [Back to Top](#table-of-contents)

---

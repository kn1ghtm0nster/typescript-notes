# Array Types

## Table of Contents:

-   [Intro](#intro)
-   [More Array Syntax](#more-array-syntax)
-   [Multidimensional Arrays](#multidimensional-arrays)

---

## Intro:

-   If you have experience working with `Javascript`, you have more than likely used `arrays` and with `Typescript`, we have the ability to also create arrays along with adding the `type` of the arrays we create just like Object types.

-   **WARNING :** So far, we have been able to set primitive types for our variables such as `string`, `number`, `boolean`, etc and while this works for single variables, we **CANNOT** set data types in the same manner as shown below.

EXAMPLE 1:

```typescript
const activeUsers: [] = [];

activeUsers.push("Steven"); // ERROR!
```

-   The reason the above isn't really a correct way of setting a type of array to a variable is because `activeUsers` is now **ONLY** expected to be empty so adding on to the array will cause an error.

-   Instead, we can simply add the `type` of the array **BEFORE** the brackets as shown in the updated example below.

EXAMPLE 1.2:

```typescript
const activeUsers: string[] = [];

activeUsers.push("Diego"); // valid!

const ages: number[] = [45, 34, 12, 1];
ages[0] = 21; // also valid!
```

-   **NOTE :** Keep in mind that the `type` of the array we set means that **ONLY** those types will be seen in the array collection and that means the `activeUsers` array will contain `string` data within.

    -   **NOTE :** There is a way to add more than one type for arrays but we will see this later on.

-   The main thing to take away is that for data types such as an `array` in `Typescript`, we **DEFINITELY** want to annotate the `type` .

-   We are not just limited to strings and numbers. We can also use `boolean` to annotate arrays along with other annotations which will be reviewed next.

-   [Back to Top](#table-of-contents)

---

## More Array Syntax:

-   There is also an alternate way of setting `type` to an array in Typescript which may be seen in other code bases and this is shown below.

EXAMPLE 2:

```typescript
const activeUsers: Array<string> = [];

activeUsers.push("Diego"); // Also valid!

const bools: Array<bool> = []; // boolean array!
```

-   Additionally, we are not **ONLY** limited to the primitive types and can also include our `custom types` which we previously saw in the `objects` section.

EXAMPLE 2.1:

```typescript
type Point = {
	x: number;
	y: number;
};

const coords: Array<Point> = [];

coords.push({ x: 23, y: 0 });
```

-   As shown above, we can include the custom `Point` type in our `coords` array and this will ensure that the array includes objects which contain `x` and `y` properties with number values.

-   Main thing to understand is that we can use our `custom types` when creating an array.

-   [Back to Top](#table-of-contents)

---

## Multidimensional Arrays:

-   With us reviewing arrays, another thing we can also do is create `multidimensional arrays` which are just arrays inside of arrays.

-   With regards to the `type` annotation for these arrays, we simply add another array bracket when defining our variables as shown below.

EXAMPLE 3:

```typescript
const board: string[][] = [
	["X", "O", "X"],
	["X", "O", "X"],
	["X", "O", "X"],
];
```

-   As the example above shows, having arrays within arrays just needs to be set with that same `type` which is one array bracket after another.

-   If we wanted to go one level deeper, we would also just add another array bracket.

EXAMPLE 3.1:

```typescript
const board: string[][][] = [[[1]]];
```

-   As you can see from the example above, even with just **ONE** number, having a multidimensional array is pretty confusing and a bit hard to keep track of but all that needs to be understood is that nesting arrays just means that we add mutiple array brackets next to each other.

-   [Back to Top](#table-of-contents)

---

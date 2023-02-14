# Tuples and Enums

## Table of Contents:

-   [Intro to Tuples](#intro-to-tuples)
-   [Tuples P2](#tuples-p2)
-   [Intro to Enums](#intro-to-enumss~``)
-   [Enums P2](#enums-p2)
-   [Enums Behind the Scenes](#enums-behind-the-scenes)

---

## Intro to Tuples:

-   Next, we will introduce a data type that is **ONLY** available in `TypeScript` and that is commonly known as the `Tuple` type.

-   In short, `Tuples` are `arrays` that have a fixed length and furthermore, the items within the array will be a specific `type` of data.

-   This means that each element within the array will not only need to be a specific type but the items need to follow the pattern that is defined within the `tuple`

EXAMPLE 1:

```typescript
let stuff: string[] = ["tesadfs", "asdfsdfdf", "asdfasf"];
```

-   We have seen the example above before to create general array type variables, but first, let's consider using a stricter approach to our variables so that we can ensure that our arrays have the correct data types.

-   Expanding from our example above, remember that we can also use `union` operators to set an array to be either one or another type of data.

EXAMPLE 1.1:

```typescript
let stuff: (string | number)[] = ["test", 1234];
```

-   While the updated code above does add more structure, as to what type of data the array can contain, it does not take the `length` of the array into account which means that we could have an arrray that has X many elements.

-   This is where `Tuples` come into play as these data types now limit the number of elements in the array as well as each element's data type.

-   Futhermore, within these data types, the ordering of the elements **MATTERS** so if the data type ordering is incorrect, you will get errors!

-   Taking all the above into consideration, we can create a basic `tuple` in our code so it will look something like this:

EXAMPLE 1.3:

```typescript
let firstTuple: [number, string] = [1234, "testing"];
```

-   The example above shows what a generic `tuple` can look like but the main thing to keep in mind is that the `firstTuple` variable contains an array of elements that is a **FIXED** length and contains a specific order of data types for each element.

-   Moving on, let's now suppose that we want to create a variable that contains a color value in the format of `RGB`. This means that we would need to not only create an array to contain these values, but also ensure that this array contains a specific length and data type for each element.

-   Taking all that we've learned so far, the code will look something like this:

EXAMPLE 1.4:

```typescript
let rgb: [number, number, number] = [123, 54, 24];
```

-   In the example above, we now ensure that our varaible for not only contains the correct data types, but also contains the correct **AMOUNT** of elements as a traditional array can contain more than just three elements.

-   **REMEMBER :** `tuple` data types do **NOT** exist in standard `JavaScript`!!!

-   [Back to Top](#table-of-contents)

---

## Tuples P2:

-   Now that we've had a basic introduction to `tuple` data types, we are going to build on top of the knowledge that we have previously learned which involves mixing data types and a custom data type with tuples.

-   Suppose that we want to create a data type that holds basic `http responses` and we will make use of a tuple to ensure that we have the correct response data types.

EXAMPLE 2:

```typescript
type HTTPResponse = [number, string];

const res: HTTPResponse = [200, "OK"];
```

-   With the example above, we now ensure that we have a `number` **FIRST** and then the `string` type which will contain a message.

-   Keep in mind that if you were to try and chance the first element in our example above to be a string, you will see an error for attempting that change.

-   **NOTE :** Be aware that even though we are not able to change specific indexes in our tuple types, there nothing preventing the language from adding additional elements to the tuple itself!

-   In addition to being able to add additional elements to the tuple after creation, we are also able to **REMOVE** elements after the tuple has been set.

-   Going one step further, let's suppose that we wanted to keep a collection of responses that follow the response pattern that we have previously defined.

-   This means that we can continue to build on top of the knowledge we've gained so that we have have a collection of responses such as the following:

EXAMPLE 2.1:

```typescript
type HTTPResponse = [number, string];

const responses: HTTPResponse[] = [
	[200, "OK"],
	[404, "NOT FOUND"],
];
```

-   [Back to Top](#table-of-contents)

---

## Intro to Enums:

-   The next type of data that is only available in `TypeScript` is called an `Enum` and in short, this data type will allow us to define a set of named constants which will either be number or string types.

-   **NOTE :** There may be some debate within your organization about using `Enums` and there are definitely some good use cases along with bad use cases.

-   First, let's look at the **BASIC** use cases for this data type.

EXAMPLE 3:

```typescript
enum Responses {
	no, // 0
	yes, // 1
	maybe, // 2
}
```

-   The example above is showing the basic definition of an `Enum` type.

-   Furthermore, the information **WITHIN** the object itself are **NOT** the names that we have provided but rather a numeric value starting from the number 0.

-   This means that the default behavior of an `Enum` type is a numeric data type.

-   If we wanted, however, we could also reset our responses to be string types instead making our code look something like this:

EXAMPLE 3.1:

```typescript
enum Responses {
	no = "NO", // "NO"
	yes = "YES", // "YES"
	maybe = "MAYBE", // "MAYBE"
}
```

-   In the updated example above, we are now using strings to represent each of the properties of the `Response` enum.

-   Going another step further, say that we wanted to add differing numeric values. This too is supported and if we wanted to update our resopnses to return a numner on the `no` property, the change would look like this:

EXAMPLE 3.2:

```typescript
enum Responses {
	no = 401, // "NO"
	yes = "YES", // "YES"
	maybe = "MAYBE", // "MAYBE"
}
```

-   Now, the example above will contain a numeric value for the `no` property while everything else will be a string value.

-   With all this information, let's suppose that we wanted to create our own `Enum` type that helps track order status for an application that we are building.

-   This `Enum` type would be named `OrderStatus` and would contain a `PENDING`, `SHIPPED`, `DELIVERED`, or `RETURNED` status so that we can display this information on our application's frontend UI.

-   Taking all this into consideration, the code will look something like this:

EXAMPLE 3.3:

```typescript
enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

const status: OrderStatus = OrderStatus.PENDING;
```

-   In the example above, not only did we set a new `OrderStatus` enum, but we also set a new variable `status` which will be the **TYPE** of the `OrderStatus` enum.

-   In addition, if you hover above the `status` variable that was set, you'll see that the type is **NOT** the numerical value but rather the actual `Enum` property that was set meaning that your editor will show `status: OrderStatus.PENDING`.

-   Next, we will make things more realistic by creating a function that **ENSURES** an argument is of our `OrderStatus` enum type so that our application can respond correctly.

-   This addionally means that `Enums` can be used in variables **AND** as function arguments to be passed in!

EXAMPLE 3.4:

```typescript
enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

const status: OrderStatus = OrderStatus.PENDING;

function isDelivered(status: OrderStatus) {
	return status === OrderStatus.DELIVERED;
}

isDelivered(status);
```

-   In the example above, our function `isDelivered` will be sent a `OrderStatus` enum which will be checked against the desired value to return either `true` or `false` (item is delivered or is not delivered).

-   As we hinted preivously, we also have the flexibility of updating the value of `Enum` properties and we will look at that in more detail next.

-   [Back to Top](#table-of-contents)

---

## Enums P2:

-   As we previously mentioned, there may be times where we need to use strings in our `Enum` types to make our code easier to understand.

-   Keep in mind that ultimately, the use for `Enums` is to have a set of constant variables that we can reference quickly in our code.

-   Suppose that we wanted to keep track of a user's arrow keys. While we could use an object to store this information, we can make use of `enum` and define our own set of constant variables to use strings as shown below:

EXAMPLE 4:

```typescript
enum ArrowKeys {
	UP = "UP",
	DOWN = "DOWN",
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}
```

-   Now, if we were to call `ArrowKeys.UP`, we would see `"UP"` as the actual value instead of a number therefore making it easier to understand the type of data that is being tracked.

-   Lastly, we will review the arguments both for using `Enums` and not using them along with the overall feeling of the community of developers.

-   [Back to Top](#table-of-contents)

---

## Enums Behind the Scenes:

-   To get a better understanding of why the community may feel strongly about using `Enums` in TypeScript, we first need to understand what happens when we compile TypeScript code that contains `Enums`.

-   The reason this needs to be well understood is because `Enums` do result in more code being used after compilation in order for JavaScript to understand this data type.

-   To see this in action, visit the [playground page](https://www.typescriptlang.org/play?#) of TypeScript.

-   If you prefer **NOT** to see the results in action, then all you need to keep in mind is that `Enums` basically translate back to an actual object being created in JavaScript and this means that more code is required to achieve the same results.

-   Once the object is created in JavaScript however, future references to this object will operate just like TypeScript.

-   Now, taking the above into consideration, if we add the word `const` in front of our `Enum` definition, you will notice that suddenly all the extra code disappears.

-   In addition, the JavaScript code will now show the actual value for the `Enum` property that was called instead of just a reference to the overall object.

-   So why does the community get into deep arguments when discussing `Enums`? Mainly because we can achieve these same results in TypeScript by giving options to a standard variable such as `const example: string = "DELIVERED" | "PROCESSING";`.

-   Ultimately, using a variable is a good option but you will not get the auto-complete functionality in you code.

-   [Back to Top](#table-of-contents)

---

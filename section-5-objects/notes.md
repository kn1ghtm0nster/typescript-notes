# Objects w/ Typescript

## Table of Contents:

-   [Intro](#intro)
-   [More Object Types](#more-object-types)
-   [Excess Properties](#excess-properties)
-   [Creating Type Aliases](#creating-type-aliases)
-   [Nested Objects](#nested-objects)
-   [Optional Properties](#optional-properties)
-   [readonly Modifier](#the-readonly-modifier)
-   [Intersection Types](#intersection-types)

---

## Intro:

-   With regards to `Javascript`, you may have experience using an object literal or the Object class to create an object saved to a variable as shown below.

EXAMPLE 1:

```JS
const dog = {
    name: "Elton",
    breed: "Golden Retriever",
    age: 1
}
```

-   When it comes to `Typescript` however, we can make use of `annotations` which will help us describe the properties of the object.

EXAMPLE 1.1:

```typescript
function printName(person: { first: string; last: string }) {
	return `${person.first} ${person.last}`;
}
```

-   As the examplea above shows, have set our `person` parameter in our `printName` function to be an object and the key thing to notice is that **WITHIN** the `person` object, we have described what each property of the object should be when the object is passed in.

-   [Back to Top](#table-of-contents)

---

## More Object Types:

-   Along with describing the shape of objects in our function parameters, we can also describe the shape and types of each property when creating a new object as shown below.

EXAMPLE 2:

```typescript
let coordinate: { x: number; y: number } = { x: 34, y: 12 };
```

-   While the above example may not be seen as often in other projects, the main thing to understand is that we can set a pattern to our variable and then implement that pattern when creating our objects.

-   In addition, we can also set object `types` to our functions which help describe the output of a function.

    -   **NOTE :** This can be a bit confusing at first glance because of all the extra curly brackets.

EXAMPLE 2.1:

```typescript
function randomCoordinate(): { x: number; y: number } {
	return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
}
```

-   **WARNING :** When setting the return shape of a function, you MUST return that type per the pattern defined in the function otherwise, you will get a nice little error.

    -   In addition, the object returned **CANNOT** be empty.

-   The overall theme for this section is that we can specifcy the object types in variables, function parameters and and function return values.

-   [Back to Top](#table-of-contents)

---

## Excess Properties:

-   Now that we know a little about setting properties in `Typescript`, we can begin to discuss what happens when we have a property that is **NOT** set on the object pattern.

EXAMPLE 3:

```typescript
function printName(person: { first: string; last: string }): string {
	return `${person.first} ${person.last}`;
}

printName({ first: "Billy", last: "Bob", age: 39 });
// ERROR!
```

-   The reason there is going to be an error with the example above is because our function specifically states that our `person` parameter will have `first` and `last` **ONLY** meaning anything else is not part of the pattern.

-   The reason this is a bit important is that we can set the incorrect object to a variable and pass that variable to our function however this time, we **WON'T** get the error message.

EXAMPLE 3.1:

```typescript
function printName(person: { first: string; last: string }): string {
	return `${person.first} ${person.last}`;
}

const friend = { first: "Billy", last: "Bob", age: 39 };

printName(friend);
// NO ERROR!
```

-   Ultimately, this was a decision that was made by the creators of `Typescript` and all we need to understand is that when we pass the object **LITERAL** as a parameter, `Typescript` is only expecting the two property types vs when a variable is passedin into our function for the same "incorrect" object, our function will just check to see that our variable contains **AT LEAST** the properties that we set for our parameter.

-   [Back to Top](#table-of-contents)

---

## Creating Type Aliases:

-   Instead of writing our object types in an annotation, we can declare them using a `type alias` which is a way of creating re-usable object shape.

EXAMPLE 4

```typescript
function doublePoint(point: { x: number; y: number }): {
	x: number;
	y: number;
} {
	return { x: point.x * 2, y: point.y * 2 };
}
```

-   As the example above shows, we are describing the object shape several times in our function which can cause confusion for others but even more important, we are duplicating the same code.

-   In order to avoid the duplication for our types, we can use a `type` alias which is used with the `type` keyword to define our object types as shown below.

    -   **NOTE :** When defining a `type` alias, it is common to set these variables with a capitalized name. You don't HAVE to do this but it is conventional to do so.

EXAMPLE 4.1:

```typescript
type Point = {
	x: number;
	y: number;
};

let coordinate: Point = { x: 3, y: 21 };

function randomCoordinate(): Point {
	return { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 };
}

function doublePoint(point: Point): Point {
	return { x: point.x * 2, y: point.y * 2 };
}
```

-   As we can see from the example above, our `coordinate` variable now has a `Point` type vs having an object literal describing the shape of the object. In addition, we can now re-use our alias in other areas of our application follow the same pattern instead of having to write the pattern out every time.

-   You **COULD** do this for variables, but it's not as common since variables are going to be one specific type.

-   [Back to Top](#table-of-contents)

---

## Nested Objects:

-   Now that we've seen object `type` annotations but what about **NESTED** objects? how do we set the annotations for them?

-   The answer is pretty simple, we just nest the `type` annotations as shown in the example below.

EXAMPLE 5:

```typescript
function calculatePayout(song: {
	title: string;
	artist: string;
	numStreams: number;
	credits: { producer: string; writer: string };
}) {}
```

-   While the above annotation for the `song` parameter is valid, the sytnax can get very compliacated so it is best to move the type into its own variable so that other functions can also access this pattern should it be used.

EXAMPLE 5.1:

```typescript
type Song = {
	title: string;
	artist: string;
	numStreams: number;
	credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
	return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
	console.log(`${song.title} - ${song.artist}`);
}
```

-   As the notes above show, we hvae now moved the `Song` annotation to its own `type` annotation so that other objects or functions can access this pattern in describing their expected parameters or the output of the function overall. Furthermore, this helps prevent confusion.

-   [Back to Top](#table-of-contents)

---

## Optional Properties:

-   While we are reviewing how to use the `type` annotations, we can review implementing optional properties since so far, our object `types` are all required but we may have times where not everything is needed.

EXAMPLE 6:

```typescript
type OptionalPoint = {
	x: number;
	y: number;
	z?: number;
};

const newPoint: OptionalPoint = { x: 2, y: 3 }; // valid

const newerPoint: OptionalPoint = { x: 2, y: 3, z: 10 }; // also valid
```

-   In the example above, the only small change that we've implemented in our `OptionalPoint` type is that we are not **EXPECTING** the `z` property to always be included and that is what the `?` means before the colons.

-   Main thing to undersatnd is that we can add `?` to our properties if we are not going to **ALWAYS** need everything from our `type` annotations.

-   [Back to Top](#table-of-contents)

---

## The readonly Modifier:

-   Within `Typescript`, we have access to a keyword called `readonly` which will mark specific properties as readonly meaning we cannot change the data of said property. If we do try, we will get a nice little error message.

EXAMPLE 7:

```typescript
type User = {
	readonly id: number;
	username: string;
};

const user: User = {
	id: 23,
	username: "Le Franche",
};

console.log(user.id); // valid, no error.

user.id = 214; // INVALID + ERROR!
```

-   As mentioned above, we have created a dummy `User` type object that has a `readonly` property which again, **CANNOT** be changed or updated. Logging is still allowed however, if we tried to update the value of the `id` property as seen in the last line, we will get yelled at by `Typescript`.

    -   **NOTE :** Keep in mind that the `readonly` keyword is valid syntax ONLY in `TS`.

-   For now, this is all we will see of the `readonly` keyword but we will talk more in depth once we start reviewing `classes`.

-   [Back to Top](#table-of-contents)

---

## Intersection Types:

-   We have seen creating independent `type` declarations however, what if we have situations where other objects are using most or all of the same properties from another `type` annotation as shown below?

EXAMPLE 8:

```typescript
type Circle = {
	radius: number;
};

type Colors = {
	color: string;
};

type ColoredCircle = {};
```

-   While we **CAN** add the properties again in the `ColoredCircle` type, what if that object was several hundreds of properties long which three other `types` would cover instead of having to write all those properties again? How can we achieve this with the example above?

-   The simple solution is to use the `&` operator in our intersection `type` declarations which will give us access to those same properties and more importantly, if one property name is updated, we don't have to worry about the update for the intersection `type` declarations.

EXAMPLE 8.1:

```typescript
type Circle = {
	radius: number;
};

type Colors = {
	color: string;
};

type ColoredCircle = Circle & Colors;

const happyFace: ColoredCircle = {
	radius: 4,
	color: "yellow",
};
```

-   With the example above, we now see that using both the properties from the intersected `types` is simple and we can assign the intersection `type` to a new variable to store this information.

-   Keep in mind that we can also add more properties to the intersection `type` declarations meaning we are not limited to **ONLY** the properties from the joined `type` declarations.

```typescript
type Cat = {
	numLives: number;
};

type Dog = {
	breed: string;
};

type CatDog = Cat &
	Dog & {
		age: number;
	};

const YoungBreezy: CatDog = {
	numLives: 3,
	breed: "Yorkie Terrier",
	age: 10,
};
```

-   With the example above, we now have `Cat` and `Dog` `type` annotations set to `CatDog` AND the additional `age` property which our variable is using.

-   [Back to Top](#table-of-contents)

---

# Generics

## Table of Contents:

---

## Intro:

  - The notes in this section will focus specifically on `Generics` which allow us to define reusable functions and classes that work with multiple `types` rather than a single type.
  - Keep in mind that the concept is difficult to understand however, these types are used in sytnax often so it's best to try and understand them now.
  - __NOTE :__ One very important thing to understand is that the syntax can cause issues especially when it comes to using it with `react` projects.
  - Now, we have actually seen generics in `TS` before when defining types for our variables.

EXAMPLE 1:

```typescript
const nums: Array<number> = [];
```

  - With the information above, we used angle brackets to denote the `type` of our `Array`.
  - Now, when hovering the `Array` portion of our code, you will see something interesting as the `Array` class will be defined as an `interface` with the type of `<T>`.
  - This is all to say that the above example is really seen as `interface Array<T>` which ultimately means that any type that is passed in will be the only type allowed for our array and that is the main point / power of `generics`.

- [Back to Top](#table-of-contents)

---

## Another Example of A Built-in Generic:

  - Another good example of a built-in `generic` is the `document.querySelector()` method which if you hover in your editor, may notice that the type of the method contains the angle brackets which are the syntax for declaring `generics`.
  - One of the issues that you may notice when selecting elements via the `DOM` is that if you try to access the `value` property of an `input` element, you will see an error in your editor.
  - This is because we need to provide the `generic HTMLInputElement` to our variable in order to gain access to those properties within our `TS` file.
  - This is all to say that `querySelector` is a `generic` function that accepts some `<type>` in its variable assignment.
  - __NOTE :__ Keep in mind that `querySelector` has many different types for our `DOM` elements so its not only limited to `HTMLInputElement` but can also include things such as `HTMLButtonElement` and so on.
  - Ultimately, `generics` will accept an input type and provide a specific output type.

- [Back to Top](#table-of-contents)

---

## Writing Your First Generic:

  - Now that we've seen the built-in `generics`, we can begin reviewing how we can go about setting these up ourselves.
  - For this, we will start with a `generic function` which will take in any `type` of data as an argument and then return that same data type.
  - We will name this function `identify` and the main goal is to accept an argument and return that same argument but even further, we will need to know what `type` this argument will be as it will __NOT__ be constrained to only one data `type`.

EXAMPLE 2:

```typescript
function identifyNumber(arg:number): number {
	return arg;
}

function identifyString(arg:string): string {
	return arg;
}

function identifyBoolean(arg:boolean): boolean {
	return arg;
}
```

  - With our first version above, while we have _TECHNICALLY_ achieved the results desired with the fucntions defined, this design approach is poor due to the amount of redundant code logic.
  - Another issue is that we would need to know __ALL__ possible data `types` that could ever be used with this function and this could cause possible issues if we updated one or more of the functions.
  - Another approach that could be taken and one that is often thought as the answer to this issue is by creating a generic function called `identify` which will accept an argument of type `any` and will return type `any` however this approach is incorrect as the input could be a string and the return output could be a number.

EXAMPLE 2.1:

```typescript
function identify(item: any): any {
	return item;
}
```

  - With the example above, this function logic does __NOT__ operate in the same concept manner as a traditional `generic` would.
  - The reason that the above solution would not work is because the return value is of type `any` which is __NOT__ what we want out of our function. It should denote as the same type based on the input that is passed through.
  - This means that if `item` is of type `string`, the output could still be a `number` or any other type.
  - In order to actually ensure that our `generic` function matches the `type` of the argument passed in, we will need to use the angle brackets that we have previously seen to denote a `generic type` within a function such as shown below:

EXAMPLE 2.2:

```typescript
function identify<Type>(item: Type): Type{
	return item;
}
```

  - With the example above, our function is now a `generic` and will adapt the `type` of our input which will match the output.
  - This means we can pass through different types in our `item` argument and the output will match the same `type`.
  - __NOTE :__ Keep in mind that the `<Type>` syntax is often shortened to be reflected as `<T>` in most generic functions that you may encounter within other libraries.
  - Now that we've created the `generic` function, how do we __USE__ it correctly?
  - The main thing to keep in mind is the pattern defined in our previous example so if we wanted to represent a `string` or a `number` with our `generic` method, we would need to provide that type __INSIDE__ the angle brackets.

EXAMPLE 2.3:

```typescript
function identify<Type>(item: Type): Type{
	return item;
}

identify<string>("testing") // => identify<string>(item: string): string

identify<number>(4) // => identify<number>(item: number): number

identify<boolean>(true) // => identify<boolean>(item: boolean): boolean
```

  - In the example above, if we hover over the declaration, we will see that our editor has replaced the `Type` values with the actual type that we provided so it will state that the function is using `string` types and only returning `string` types.
  - In addition, this works for other types such as a number as shown above.
  - Going another step further, using a `generic` is also valuable when it comes to custom defined `interfaces` that we created as we can also use the `interface` and `TS` will automatically assume the types for both input and output values such as shown below.

EXAMPLE 2.4:

```typescript
interface Cat{
	name: string;
	breed: string;
	age: number;
}

function identify<Type>(item: Type): Type{
	return item;
}

identify<Cat>({name: "pepe", breed: "tabbi", age: 1}) // identify<Cat>(item: Cat): Cat
```

  - The main thing to understand is that we can create custom `generic` functions which will use whatever `type` is provided to execute specific logic.
  - Lastly, remember that often times you will see the `<T>` syntax for a `generic` so the functions may appear as follows:

EXAMPLE 2.5:

```typescript
function identify<T>(item: T): T{
	return item;
}
```

  - Next, we will get more practice with using `generics`.

- [Back to Top](#table-of-contents)

---

## Another Generic Function:

  - Now, let's suppose that we wanted to use a `generic` function that would accept an `array` and return a random item within the `array`.
  - For now, we will name our function `getRandomElement()`
  - One key thing to keep in mind here is that the array passed in could have __ANY__ data `types` within it so there is no one specific `type` that can add to our function `arg` as this would invalidate all other possible array `types`.
  - Once again, we could use the `any` type annotation for both the argument and the output however, this will once again cause issues with the relationship between the input and the output as we want these to match so the following is __NOT__ a good option for the solution.

EXAMPLE 3:

```typescript
function getRandomElement(arr: any): any {
	// logic here
}
```

  - This now leads us back to our previous section and the overall concept of using `generics` as shown below:

EXAMPLE 3.1:

```typescript
function getRandomElement<T>(arr: T[]): T {
	// logic here
}
```

  - With the updated example above, we are now able to inform `TS` that our function will accept an array which could contain any `type` of elements and it will return an element that matches the __SAME__ `type`.
  - Now that we've ensured the type relationship will stay the same between input and output, we can proceed with adding the remaining logic for our function:

EXAMPLE 3.2:

```typescript
function getRandomElement<T>(arr: T[]): T {
	const randIdx: number = Math.floor(Math.random() * arr.length);
	return arr[randIdx];
}

getRandomElement<string>(['a', 'b', 'c']) // => random string

getRandomElement<number>([4, 1, 6]) // => random number

getRandomElement<boolean>([true, false, true]) // => random boolean
```

  - Main thing to understand with the example above is that using a `generic` can be useful in times where we need our functions to be both flexible when it comes to the data `types` that will be passed in __AND__ ensure that the `type` of the output matches.

- [Back to Top](#table-of-contents)

---

## Inferred Generci Type Parameters:

  - Just as we have seen previously with `variables`, we do not __ALWAYS__ have to place the `type` of the variable during the declaration phase as `TS` will determine this information based on the value assigned to the `variable`.
  - This is to say if we had a variable `x` and we set that equal to the number `123`, then `TS` will inform us that the `type` of the variable is a `number` without us having specified this during declaration.
  - This feature also works the same when it comes to `generics`.
  - You may have noticed in previous examples that we have been placing the `type` angle brackets in our function calls and while that is good practice, it is not always needed as `TS` will `infer` the `type` based on the `argument` that was passed in such as follows:

EXAMPLE 4:

```typescript
let x = 123 // => number

function getRandomElement<T>(arr: T[]): T {
	const randIdx: number = Math.floor(Math.random() * arr.length);
	return arr[randIdx];
}

getRandomElement(['asdf', 'no u']) // getRandomElement<string>(arr: string):string

getRandomElement([1,3,4]) // getRandomElement<number<(arr: number): number
```

  - As we see in the example above, we didn't specify the `type` of array that would be passed in to the `getRandomElement` method however, based on the `types` within the array itself, `TS` was avle to make the connection and set the `type` to `string` when we hover over the function in our editor.
  - __NOTE :__ Keep in mind that the behavior of `generics` will not __ALWAYS__ be as shown above and in some situations, we will need to add the `generic` type in order to gain access to specific values or properties.
  - A good example of this is the `querySelector()` method as by default, the `type` is set as `Element` if no other `generic type` has been provided prior to this function.
  - If we wanted to select something like a `button` from another file's HTML, we would need to provide the actual `HTML type` in our `TS` file in the form of a generic as shown below:

EXAMPLE 4.1:

```typescript
const btn = document.querySelector<HTMLButtonElement>('.btn');
```

  - The reason the above matters a lot is because there is not relationship between the `string` input to identify the button element and the actual `DOM element` return `type` itself.

- [Back to Top](#table-of-contents)

---

## Generics, Arrow Functions, and TSX Files:

  - __NOTE :__ This section only pertains to those who are working with the `React` framework and its `.tsx` files.
  - If this does __NOT__ apply to you, please move on.
  - With regards to `react` and its own syntax, using `.tsx` files will cause issues when it comes to `generics` as the syntax used to create these will confuse `react` and make it think that your are attempting to write syntax.

EXAMPLE 5:

```typescript
const getRandomElement = <T>(arr: T[]): T => {
	// logic here
}
```

  -  With the example above, if we attempt to use the standard `arrow` function method in our `.tsx` files, `JSX` will attempt to close the `generic` angle bracket as it thinks that we are writing `HTML`.
  - In order to prevent the issue, we will need to add a trailing comma to our `generic` declaration as shown in the updated example below:

EXAMPLE 5.1:

```typescript
const getRandomElement = <T, >(arr: T[]): T => {
	// logic here
}
```

  - Now, we will have no issues with compiling our `react` component/application.

- [Back to Top](#table-of-contents)

---

## Generics With Multiple Types:

  - Now that we've gotten more familar with using `generics` with just __ONE__ type, let's suppose that we wanted to create a function that will take more than just one argument and will combine the argument objects passed in to a single combination object.
  - One way to approach this would be the following:

EXAMPLE 6:

```typescript
function merge(object1, object2) {
	return {
		...object1,
		...object2
	};
}

const combined = merge({name: "Diego"}, {brothers: ["Lucas", "Javier", "Nicolas"]}) // combined: any
```

  - With the example above, if we hover over the `combined` variable, we will see that the `any` type has been inferred by `TS` and this is something we do __NOT__ want as the main purpose of the function we created is to merge two `objects` together therefore returning a new object to of `type` object.
  - In order to make functions that will use __MULTIPLE__ `generics`, we will need to simply add another declaration as follows:

EXAMPLE 6.1:

```typescript
function merge<T, U>(object1: T, object2: U) {
	return {
		...object1,
		...object2
	};
}

const combined = merge({name: "Diego"}, {brothers: ["Lucas", "Javier", "Nicolas"]}) // combined: T & U
```

  - In the example above, notice that we added the next alphabetical letter to denote the next `generic` our `merge` function will use.
  - Notice too that we did __NOT__ add the `type` of the return value for our function as `TS` is smart enough to figure that out itself and if you hover over the `combined` variable you will see that the return `type` is inferred to be the intersection of types `T` and `U`.
  - Even further, notice that whenever the `merge` function is called, we also did not have to provide the types of the properties we are passing in our example above due to `TS` inferencing.

- [Back to Top](#table-of-contents)

---

## Adding Type Constraints:

  - While we have the ability to merge anything to with our `merge` function, this is really saying that __ANYTHING__ can be merged together  such as the following:

EXAMPLE 7:

```typescript
function merge<T, U>(object1: T, object2: U) {
	return {
		...object1,
		...object2
	};
}

merge({name:"Joseph"}, 9) // => {name: "Joseph"}
```

  - With the example above, we do not have anything preventing our function from returning an error since the second argument is __NOT__ an object however, due to how our function is set up to handle the parameter `types`.
  - The good thing is that with `generics`, we can further limit the actual types of our `generics` so if we want two objects in our arguments, then we will need to add the `extends` keyword with the `object` class keyword as follows:

EXAMPLE 7.1:

```typescript
function merge<T extends object, U extends object>(object1: T, object2: U) {
	return {
		...object1,
		...object2
	};
}

merge({name:"Joseph"}, 9) // => ERROR!
```

  - Now, with our updated `generic` types, we can ensure that the arguments passed in are `objects` and not just anything in general.
  - __NOTE :__ The information above does __NOT__ mean that we are limiting the properties of the objects themselves but we are ensuring that the arguments are just objects period.
  - Next, let's suppose that we want to work with an `interface` so that we can use this in a `generic` definition.

EXAMPLE 7.2:

```typescript
interface Lengthy {
	length: number;
}

function printDoubleLenght<T>(thing: T): number{
	return thing.length * 2;
}
```

  - Now with our current function, we are not able to just use a general `generic` to multiply the length property since `TS` doesn't know what we are referencing.
  - In order to correct this, we can `extend` our `Lengthy` interface as follows:

```typescript
interface Lengthy {
	length: number;
}

function printDoubleLenght<T extends Lenghty>(thing: T): number{
	return thing.length * 2;
}
```

  - Just like we did with standard objects, we are able to use the `extends` keyword in order to use the `properties` of that object and continue using our function as normal.
  - The main thing to understand is that adding `type constraints` on our `generics` will further ensure that we don't use __ANYTHING__ at all times.

- [Back to Top](#table-of-contents)

---

## Default Type Parameters:

  - In some situations, we may have to create `generics` that will have a default `type` if nothing else is passed in.
  - Currently, we have created `generic` methods that __HAVE__ to have some `type` in the arguments passed in but what happens if we want to create a new generic without having to pass anything in?
  - If we leave out the starting `type`, then we will see `unknown` as the type.
  - Now, if we wanted to ensure that our variables contained some `type` even if nothing is pased in, we could do the following:

EXAMPLE 8:

```typescript
function makeEmptyArray<T = number>(): T[]{
	return [];
}

const nums = makeEmptyArray(); // nums: number[]

const strings = makeEmptyArray<string>() // strings: string[]

const bool = makeEmptyArray<boolean>() // bool: boolean[]
```

  - With the example above, we have the ability to just call the method `makeEmptyArray` without specifying the type thus preventing any issues with the actual data type which is the main thing to remember.

- [Back to Top](#table-of-contents)

---

## Writing Generic Classes:

  - In addition to creating `interfaces` and using them with `generics`, we can also go the same when it comes to classes.
  - Let's suppose that we wanted to create a `class` called `Playlist` that would mimic an actual application.

EXAMPLE 9:

```typescript
interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class Playlist {

}
```

  - Now, while we __COULD__ use two different classes to capture the `Video` and `Song` interfaces, using `generics` can help us by declaring the `generic` in the class definition.
  - In addition, we can have a `generic` property that makes use of the `interfaces` that we defined so that we can add new songs or videos to our ongoing playlist.

EXAMPLE 9.1:

```typescript
interface Song {
	title: string;
	artist: string;
}

interface Video {
	title: string;
	creator: string;
	resolution: string;
}

class Playlist <T> {
	public queue: T[] = [];
	add(el: T): void {
		this.queue.push(el);
	}
}

const songs = new Playlist<Song>();
songs.add({title: "yo mama", artist: "BDR"})
songs.queue // => [{title: "yo mama", artist: "BDR"}]

const videos = new Playlist<Video>();
videos.add({title: "arby-n-the-chief", creator: "Machinima", resolution: "720"})
videos.queue // => [{title: "arby-n-the-chief", creator: "Machinima", resolution: "720"}]
```

  - With the updated example above, we can create different instances of our interfaces in our `Playlist` class without having to create separate classes.
  - In addition, we can make use of the `add` method in the `Playlist` class as long as we provide the correct information.
  - Ultimately, the point is that we are able to use `generics` with `classes` so further ensuring that we can use `interfaces` separately from a class without impacting the other if updates are made.

- [Back to Top](#table-of-contents)

---

# Type Narrowing:

## Table of Contents:

---

## Typeof Guards:

  - These next few sections will focus on different ways to ensure that we are processing logic within a function based on the correct types.
  - One of the ways that this can be achieved is by using what is commonly known as `type narrowing`
  - This is to say that we will start with a general broad type and need to make use of logic in our functions to further narrow the types.
  - Often seen with `union types` where we could have multiple possible types passed into our functions.
  - Let's suppose we want to create a function that triples an argument that is passed in but the argument might be a `string` OR `number` type which further complicates our logic.

EXAMPLE 1:

```typescript
function triple(item: string | number) {
	return item * 3;
}
```

  - With our current version shown above, the main problem that our program would run inot would be attempting to multiply a `string` three times.
  - This means that if our current version is passed the string "hi", we should get "hihihi" as the output.
  - This brings us back to our current version and the errors that our text editor would show us as we cannot multiply string and numbers which leads us to the understanding of using `typeof guards`.
  - If you have worked with JavaScript before, then you may have worked with a guard which is using `typeof` to process logic based on a specific variable `type`.
  - Knowing this, we can add the following updated `typeof` logic to our function to process specific logic for strings only otherwise, run the logic for numbers.

EXAMPLE 1.1:

```typescript
function triple(item: string | number) {
	if(typeof item === "string"){
		return item.repeat(3);
	} else {
		return item * 3;
	}
}
```

  - With our updated example above, we have narrowed the possibilties to be specific scenarios using an `if` / `else` block.
  - Furthermore, if we hover over the `item` in our text editor for each scenario, you will see that `TS` has adapted the typing based on the scenario and thus we will not be seeing any errors.
  - Main thing to understand is that `typeof guards` make use of the `typeof` syntax to narrow down our type `inputs` to specific scenarios.

- [Back to Top](#table-of-contents)

---

## Truthiness Guards:

  - Just like the previous section, we also have a way of checking for `truthiness` in the same manner that we would for specific types in our functions.
  - These are often seen to eliminate `null`, `undefined`, or basic `falsey` values.
  - In addition, this will help prevent issues with our code and the application crashing so that we can handle these specific types of scenarios.
  - Once again, this concept is not new if you've worked with standard `JS` or any other language that can accept user input.
  - Let's suppose that we want to create a program that checks whether or not an element that we select from our `HTML` actually contains a `node Object`.
  - One way we can ensure this is by adding a simple `truthiness` check as shown below.

EXAMPLE 2:

```typescript
const el = document.getElementById("selection-element");
if (el){
	// truthy logic here
}
```

  - In the example above, the main logic will run __ONLY__ if the value above is truthy meaning that the program has selected an actual `HTMLElement`
  - In addition, if we add an `else` block, then our program will know that there is no value and thus a `falsey` variable.

EXAMPLE 2.1:

```typescript
const el = document.getElementById("selection-element");
if (el){
	// truthy logic here
} else {
	// falsey logic here
}
```

  - Next, let's suppose that we want to creat a function that prints whatever is entered through the function or another message if the value is empty.
  - While we __COULD__ make this a required argument, this is not often required with the standard `console.log` method.

EXAMPLE 2.2:

```typescript
const printLetters = (word?: string) => {
	if(word) {
		return word;
	} else {
		return "You did not enter a word!"
	}
}
```

  - One thing to point out with the example below is that if we try and access `word` in the `else` block, `TS` cannot say for certain that the value is empty as an empty `string` is still a `falsey` value so we will see `string | undefined` if we hover over the variable.
  - Keep the top point in mind as we continue reviewing other types of `narrowing` in the later section of these notes.

- [Back to Top](#table-of-contents)

---

## Equality Narrowing:

  - Next, let's suppose that we have a function that will accept two different parameters and these two different parameters only have __ONE__ type in common as they may pass in differing types based on the information below:

EXAMPLE 3:

```typescript
function someDemo(x: string | number, y: string | boolean) {
	if (x === y) {
		x // x: string
		y // y: string
	}
}
```

  - While we __COULD__ use `typeof` guards for the function above, the issue is that both arguments could be another type altogether.
  - As the example above shows, however, inside the `if` statement, we are checking to ensure that the `type` of the arguments are the same therefore leading `TS` to understand that both arguments are strings and thus we can execute the logic inside the conditional.
  - __NOTE :__ Keep in mind that the example above works as expected because we are using __TRIPLE EQUALS__ vs using __DOUBLE EQUALS__ which will interpolate both arguments to a similar type and thus `TS` believes that both arguments are the same when they are __NOT__ the same in reality such as the string 2 and the number 2.
  - An example of this issue is listed below for clarification.

EXAMPLE 3.1:

```typescript
function someDemo(x: string | number, y: string | boolean) {
	if (x == y) {
		x.toUpperCase();
	}
}

someDemo(3, "3") // ERROR IN CONSOLE
```

  - The main issue with the above example is that `TS` will __STILL__ compile the code allowing the example to be executed but once we open the example in the console, we will actually see an error because we can't use a string method on a number even though `TS` still allowed this.
  - The ultimate thing to remember is this: __USE TRIPLE EQUALS__ for equality check.

- [Back to Top](#table-of-contents)

---

## Narrowing With The In Operator:

  - The next way of narrowing our types is by using the `in` operator.
  - This often involves `objects` or `arrays` such as follows:

EXAMPLE 4:

```typescript
const pet = {name: "Kitty", age: 20};

console.log("name" in pet) // true
console.log("breed" in pet) // false
```

  - As shown above, the `in` operator above is checking to see if a particular property is listed within the `pet` object.
  - In addition, the reason that we choose to use the `in` operator with objects is because using standard `typeof` with objects, arrays, interfaces, etc will evaluate to `object` even though they are not really the same.
  - To further show how useful the `in` operator is, let's suppose that we want to create a function that makes use of two `interfaces` in order to track the length of a TV show or a movie.

EXAMPLE 4.1:

```typescript
interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	episodes: number;
	episodeLength: number;
}

function getDuration(media: Movie | TVShow) {
	media.episodes // ERROR!
}
```

  - In the example above, if we try to access `media.episodes`, we will get an error in our editor due to the arguments not being a specific type.
  - While we __COULD__ attempt to use `typeof` guards, this too would fail because both `Movie` and `TVShow` are both `objects`.
  - The more common approach however, is to make use of the `in` operator to check for a specific property in our `interfaces` which are both objects.
  - The code example then changes to look something like this:

EXAMPLE 4.2:

```typescript
interface Movie {
	title: string;
	duration: number;
}

interface TVShow {
	title: string;
	episodes: number;
	episodeLength: number;
}

function getDuration(media: Movie | TVShow) {
	if ("episodes" in media) {
		return media.episodes * media.episodeLength;
	} else {
		return media.duration;
	}
}
```

  - In the updated example above, since we are using the `return` statement inside the `in` operator statement, the type of `media` in the `else` statement is `Movie`.
  - The main point to understand here is that using the `in` operator is highly useful when attempting to narrow types if you are using objects in your code.

- [Back to Top](#table-of-contents)

---

## Instanceof Narrowing:

  - Moving on to the next option for type narrowing, we can make use of the `instaceof` operator.
  - You may be thinking that `instanceof` operates similar to `typeof` and you'd be correct __HOWEVER__, `instanceof` is used for __CLASSES__ (often called `prototypes`).
  - Ultimately, `instanceof` helps us check whether a specific variable is an instance of a class.

EXAMPLE 5:

```typescript
[1,2,3] instanceof Array // true

[1,2,3] instanceof Date // false
```

  - In the example above, we are showing how the `instanceof` operator works when compared to other classes.
  - This now leads us to make use of this operator with our `TS` code to further narrow our input `types`.

EXAMPLE 5.1:

```typescript
function printFullDate(date: string | Date) {
	
}
```

  - In the function above,  notice that we accept a `date` param that can either be a stadard `string` __OR__ a `Date` class object.
  - Ultimately, we want our function to turn whatever is entered into the argument into a `utc` date/time string.
  - Remember that we cannot just call `date.toUTCString()` alone since `string` does __NOT__ have access to the method.
  - This now leads us to make use of the `instanceof` operator which will mean that our code appears as follows:

EXAMPLE 5.2:

```typescript
function printFullDate(date: string | Date) {
	if (date instanceof Date) {
		date // date: Date
		console.log(date.toUTCString())
	} else {
		date // date: string
		console.log(new Date(date).toUTCString());
	}
}
```


  - With our example above, we have narrowed the input `type` so that we can make use of a class `property` depending on the outcome of the conditional statement.
  - Keep in mind that the `instanceof` operator also applies to our own custom classes as shown below:

EXAMPLE 5.3:

```typescript
class User {
	constructor(public: name: string){}
}

class Company {
	constructor(public name: string){}
}

function printName(entity: User | Company){
	if(entity instanceof User){
		entity // entity: User
	} else {
		entity // entity: Company
	}
}
```

  - As shown above, our example function is narrowing the type of the inputs by checking whether or not the input is an instance of one class or another which is the main point of `instanceof` operator.

- [Back to Top](#table-of-contents)

---

## Working With Type Predicates:

  - __NOTE :__ When it comes to `type predicates`, keep in mind that this syntax is specific to `TS` ONLY.
  -  This section can be confusing but the ultimate point is to further narrow a type of an input.
  - In order to show this in action, let's suppose that we have multiple interfaces and a common function that __COULD__ make use of this method.

EXAMPLE 6:

```typescript
interface Cat {
	name: string;
	numLives: number;
}

interface Dog {
	name: string;
	breed: string;
}

// function to check whether animal passed through is a cat or not and return true or false
function isCat(animal: Cat | Dog) {
	return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if(isCat(animal)){
		return "Meow!"
	}
}
```

  - With the example above, the code will __NOT__ work as expected because even though we make use of the `isCat` method, `TS` still does not know if `animal` is of type `Cat` or `Dog`.
  - In order to finish making use of `type predicates`, we will need to provide this syntax in the `isCat` method.
  - This needs to be done in the pattern `thing is object` in our check function as follows:

EXAMPLE 6.1:

```typescript
interface Cat {
	name: string;
	numLives: number;
}

interface Dog {
	name: string;
	breed: string;
}

// function to check whether animal passed through is a cat
function isCat(animal: Cat | Dog): animal is Cat {
	return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
	if(isCat(animal)){
		animal // animal: Cat
		return "Meow!"
	} else {
		animal // animal: Dog
		return "Woof! Woof!"
	}
}
```

  - As the example above shows, adding the additional `type predicate` in the `isCat` method adds the type narrowing needed for the second function to operate correctly.
  - Ultimately, the special function that we created helps us further narrow by using `type predicates`.

- [Back to Top](#table-of-contents)

---

## Discriminated Unions:

  - The concept of `discriminated unions` is another method that we can use to further narrow our variables.
  - In order to do this we will create a property that is a literal of itself.
  - To see this in action, we will work with two interfaces that have similar properties but are differentiated with one specific property.

EXAMPLE 7:

```typescript
interface Rooster {
	name: string;
	weight: number;
	age: number;
}

interface Cow {
	name: string;
	weight: string;
	age: number;
}

interface Pig {
	name: string;
	weight: string;
	age: number;
}

type FarmAnimal = Rooser | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
	animal
}
```

  - With the example above, all of our `interface` objects have similar properties so we have no way of differentiating the each of the `interfaces` that our `FarmAnimal` type.
  - In addition, our function does __NOT__ know how to differentiate the type if we try to access the `animal` param above so it could be either a `Pig`, `Rooser`, or `Cow` object.
  - This involves that our code `objects` contain what is commonly known as a `discriminant` whichis another fancy word for `property`.
  - Often this involves adding a `kind` or `type` property which is seen in real life examples.

EXAMPLE 7.1:

```typescript
interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: "rooster";
}

interface Cow {
	name: string;
	weight: string;
	age: number;
	kind: "cow";
}

interface Pig {
	name: string;
	weight: string;
	age: number;
	kind: "pig";
}

type FarmAnimal = Rooser | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
	animal
}
```

  - With the changes in the example above, we have added a `kind` property which is a literal of the actual object.
  - This further means that we can further narrow our types baesd on the `kind` literal that we have just added and `TS` will know which part of our function logic applies to the different types.
  - For these scenarios, it is common to see `switch` statements to separate the logic as shown in the updated code below:

EXAMPLE 7.2:

```typescript
interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: "rooster";
}

interface Cow {
	name: string;
	weight: string;
	age: number;
	kind: "cow";
}

interface Pig {
	name: string;
	weight: string;
	age: number;
	kind: "pig";
}

type FarmAnimal = Rooser | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
	switch(animal.kind){
		case("pig"):
			return "Oink!";
		case("cow"):
			return "Moooo!";
		case("rooster"):
			return "Bawk Bawk!"
	}
}

const stevie: Rooster = {
	name: "Stevie",
	weight: 2,
	age: 3,
	kind: "rooster"
}
```

  - Now that we have setup our logic to narrow the individual types that we might see in our `FarmAnimal` type, we will be able to reply with the correct value.
  - The only drawback from this approach is that we will have to ensure that the `kind` property is defined in each different `FarmAnimal` type variable we create as shown above.
  - If the `kind` property is missing, then we will get an error in our text editor.
  - Ultimately, using `discrimnated unions` will allow us to have a common literal property in our objects to further narrow different possible types for similar objects that we may create.

- [Back to Top](#table-of-contents)

---

## Exhaustiveness Checks With Never:

  - The final way of performaing `type narrowing` is by using a concept known as `exhaustiveness checks`.
  - With the previous example code, we used a `switch` statement and even further, we can add a `default` block within which means that the code should __NEVER__ get to that final option as shown below:

EXAMPLE 8:

```typescript
interface Rooster {
	name: string;
	weight: number;
	age: number;
	kind: "rooster";
}

interface Cow {
	name: string;
	weight: string;
	age: number;
	kind: "cow";
}

interface Pig {
	name: string;
	weight: string;
	age: number;
	kind: "pig";
}

type FarmAnimal = Rooser | Cow | Pig;

function getFarmAnimalSound(animal: FarmAnimal) {
	switch(animal.kind){
		case("pig"):
			return "Oink!";
		case("cow"):
			return "Moooo!";
		case("rooster"):
			return "Bawk Bawk!"
		default:
			// CODE SHOULD NEVER MAKE IT HERE!!
			const _exhaustiveCheck: never = animal;
			return _exhaustiveCheck;
	}
}

const stevie: Rooster = {
	name: "Stevie",
	weight: 2,
	age: 3,
	kind: "rooster"
}
```

  - The reason that the `default` block is valuable is because we can future-proof our code so that if we make changes to our `interfaces` or `FarmAnimal` type, we prevent any issues.
  - Keep in mind that the code block should __NOT__ be blank and often times `assertions` are placed here instead but besides this, developers will make use of the `never` type.
  - As shown above, we have assigned the `never` type to our `failure` variable but keep in mind that __NO TYPE__ can ever be assigned to `never` as this will raise an error.
  - This is to say that if we were to simply add another `interface` and add that as a possibility for our `FarmAnimal` type and nothing else, our function will display an error in the text editor due to the missing case for the newly created interface.
  - __NOTE :__ One thing to point out here is that often times, you will see the `default` block contain the variable name `_exhaustiveCheck` to denote that we are using this concept in our code.
  - Ultimately, the point is that we can use this concept to ensure that we have all bases covered when it comes to working with multiple objects that are being used by one custom type and that type is further being used within a function we write.

- [Back to Top](#table-of-contents)

---

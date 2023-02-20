# TypeScript Classes

## Table of Contents:

---

## Annotating Classes in TypeScript:

  - Now, let's move over to using classes in `TypeScript` as this does change.
  - Previously, we were defining our `classes` with a simple definition followed by the `constructor` method that would run each time a new instance is created.
  - With `.ts` files however, this is different. 
  - If we wanted to make use of `TypeScript's` syntax to create classes for our project, simply calling the arguments within the `constructor` method won't be enough as we will need to define the type for each of our arguments.
  - This means that we now need to inform our class of the argument types __BEFORE__ the `constructor` method.
  - To do this, we will build on our previous section's `Player` class except now, we will begin adding `TypeScript` syntax:

EXAMPLE CODE:
```typescript
class Player {
	firstName: string;
	lastName: string;
	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const diego = new Player("Diego", "Quintanilla");
```

  - Notice in the example above that not only do we need to provide the `type` of our `firstName` and `lastName` arguments inside the `constructor` method, but we also need to inform `TS` of the properties so these will be placed __BEFORE__ the `constructor` method.
  - This is important because if the properties are not added before the `constructor`, you will get an error from `TS` stating that the properties don't exist within the class that you've created.
  - Now that we have setup all the required syntax, we can create variables for each class instance.

- [Back to Top](#table-of-contents)

---

## Class Fields in TypeScript:

  - Just as we did in `JS`, we can also add `private fields` to our `TS` classes.
  - __REMEMBER!__ `private fields` are denoted by usng a `hash` sign `#` before the varialble name.
  - Now, the question becomes: How do we inform typescript about these `private fields` and what are their types?
  - The good news here is that we can rely on `TS` inferring the type just as it would for any traditional variable.
  - In addition, we _COULD_ also make use of the standard class binding by setting `this.property` on the `constructor` method which is another good approach.
  - Let's suppose that for now, we want our players all to start with a default `score` property set to 0.
  - All that we would need to do to set the `private field` in our `TS` class is  provide the default value and the `type` annotation for the variable.
  - __NOTE :__ The `type` annotation can be inferred by `TS` however, it is best that this value be clearly defined as a best practice.

EXAMPLE CODE: 
```typescript
class Player {
	firstName: string;
	lastName: string;
	score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const diego = new Player("Diego", "Quintanilla");
```

- [Back to Top](#table-of-contents)

---

## readonly Class Properties:

  - Next, we will review a new piece of syntax that is specific to `TS` __ONLY__.
  - If you have a property in your class that does __NOT__ need to change once a new instance has been created such as a first and last name, then we can add the `readonly` keyword to those properties in `TS` which will enforce this rule in our file.
  - __WARNING__ This means that we cannot make changes to those properties once they have been set.

EXAMPLE CODE:
```typescript
class Player {
	readonly firstName: string;
	readonly lastName: string;
	score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const diego = new Player("Diego", "Quintanilla");
diego.firstName = "pablo" // ERROR!
```

  - It is also important to note here that once the code has been compiled, our output `JS` file will __NOT__ show any code that mimics the `readonly` functionality from `TS` and this is because the keyword is strictly for `TS` use only.

- [Back to Top](#table-of-contents)

---

## The public Modifier:

  - While we can't make changes to our properties if they are `readonly` in our `TS` classes, we __CAN__ still access the values.
  - This is where special keywords (modifiers) come into play.
  - By default as shown above, the properties that we set in our `Player` class can be accessed as normal without `TS` or `JS` showin any errors.
  - This is to say that our properties and methods are `public` by default and while we do not have to use this keyword in our properties and methods, it is a good idea to use for other developers who may have access to read your code.

EXAMPLE CODE:
```typescript
class Player {
	public readonly firstName: string;
	public readonly lastName: string;
	public score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
```

  - The main theme to understand here is that `public` is not a `JS` keyword but does provide more clarity for other developers.
  - Next, we will review the `private` keyword and how that operates within a class.

- [Back to Top](#table-of-contents)

---

## The private Modifier:

  - Just as we have the `public` keyword for classes in `TS` which will help us provide clarity to properties and methods to other developers, so too can we use `private` for those properties that are __NOT__ supposed to be accessed outside the class itself.
  - If we wanted to keep properties hidden from view if someone tried to access the properties or methods outside the class itself, then we would need to use the `private` keyword.

EXAMPLE CODE:
```typescript
class Player {
	public readonly firstName: string;
	public readonly lastName: string;
	private score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const diego = new Player("Diego", "Quintanilla");
diego.score // ERROR!
```

  - As the example above shows, if we tried to access the value of the `score` property, we would see an error due to the `private` keywrod being listed for the `score` property.
  - An alternate option that we have however, is using the `private` modifier from `JS` as we previously saw (the hash sign) __HOWEVER,__ this option requires that your configuration file is set to target a syntax that is higher than `ES5`.
  - If you do decide to use a more recent syntax, then you would be able to use the hash sign and keep the same functionality but keep in mind that you __CANNOT__ do both.
  - For the most part, the community agrees that using `private` instead of `#` is a better option for providing clarity to those who might one day work with or on your code.
  - The `private` keyword is also listed in sevreal docs in the real world!
  - __NOTE :__ Keep in mind that the `private` / `public` keywords only play a factor __BEFORE__ compilation of the code has ocurred!
  - Lastly, we need to review how `public` or `private` keywords fit into `TS` as this also plays a factor to whether or not we can access methods with each class instance.

EXAMPLE CODE:
```typescript
class Player {
	public readonly firstName: string;
	public readonly lastName: string;
	private score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	secretMethod(): void {
		console.log("SECRET METHOD!")
	}
}

const diego = new Player("Diego", "Quintanilla");
diego.secretMethod(); // "SECRET METHOD!"
```

  - Once again, keep in mind that by default `public` is added to our properties and methods unless otherwise stated.
  - This means that if we add `private` to our `secretMethod`, we will no longer be able to access it as we are in the example above.

EXAMPLE CODE:
```typescript
class Player {
	public readonly firstName: string;
	public readonly lastName: string;
	private score:number = 0;

	constructor(firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}
}

const diego = new Player("Diego", "Quintanilla");
diego.secretMethod(); // ERROR!!
```

  - One way to get around the error above, is by calling the `private` method in the `constructor` method but the main theme here is that both `private` and `public` will dictate whether or not properties or methods can be accessed outside the class with each instance.
  - __NOTE :__ Keep in mind as well that while we don't __HAVE__ to use the keywords, it is __HIGHLY__ recommended as this helps with clarity in our code.

- [Back to Top](#table-of-contents)

---

## Parameter Properties Shorthand:

  - Now that we've seen how to create a class in `TS`, you may have noticed that there is a lot of extra syntax that we need to create in order to properly set our `constructor` method.
  - The good news here is that we've now learned about the `public` and `private` keywords and these will in addition, help us set our classes without having to add extra syntax.
  - This also means that we do __NOT__ have to set any properties inside the `constructor` method as `TS` will do this for us.

```typescript
class Player {
	private score:number = 0;

	constructor(public firstName:string, public lastName:string) {}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}
}
```

  - With the updated code above, notice that our class no longer has to declare the properties before our `constructor` is created but instead, we can add the needed syntax within the argument section.
  - In addition, we are not limited to only using `public` but we can also set our `private` properties like our `score` property which will appear as follows:

```typescript
class Player {
	constructor(
	public firstName:string, 
	public lastName:string, 
	private score:number
	){}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}
}
```

    - Main thing that we need to understand is that this is just a fancy way of setting our properties without having to delare them before the `constructor` method.

- [Back to Top](#table-of-contents)

---

## Getters and Setters:

  - Just like we did for `JS`, we can create methods that will act as properties in our `TS` classes which we can call without having to add the parenthesis to call the method itself behind the scenes.

EXAMPLE CODE:
```typescript
class Player {
	constructor(
	public firstName:string, 
	public lastName:string, 
	private score:number
	){}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}

	get playerName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const p1 = new Player("Diego", "Quintanilla", 0);
p1.playerName // "Diego Quintanilla"
```

  - As the example above shows, we are able to use our `playerName` method just like a property similar to how we did with `JS`.
  - One key difference to make note here, is that by default, if there is no `setter` method defined in our class for the `getter` method, then the properties that are impacted will be `readonly` properties.
  - This means that if we try to do something like `p1.playerName = "John Doe"`, we will get an error from `TS`.
  - Now, let's suppose that we wanted to use both `getter` and `setter` methods in our project to update our `score` property.
  - To do this, we first need to wrap the `score` property in a `getter` method as currently, this value is not publicly available.

EXAMPLE CODE:
```typescript
class Player {
	constructor(
	public firstName:string, 
	public lastName:string, 
	private score:number
	){}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}

	get playerName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	get score(): number {
		return this.score;
	}

	set score(newScore: number) {
		if(newScore < 0) {
			throw new Error("Score must be positive!")
		}
		this.score = newScore;
	}
}

const p1 = new Player("Diego", "Quintanilla", 0);
console.log(p1.score) // 0
```

  - One thing to note above is that our `setter` function does __NOT__ have a return `type` which is actually by design as `setter` methods __CANNOT__ return anything.
  - This means that even stating `void` as the return type will not be allowed and you will see errors in your editor.
  - Keep in mind that does not prevent someone from updating the property to another positive number however, if we try to update the value such as `p1.score = -12`, we will see an error per our code on the console after the code has been compiled.
  - This also means that if we try to update the `score` property to a string, that will show an error in your editor!

- [Back to Top](#table-of-contents)

---

## The Protected Modifier:

  - So far, we have reviewed and seen the `public` and `private` modifiers however, we will now take a look at a  new modifier called the `protected` modifier.
  - This `protected` modifer comes into play whenever we have inheritance going on in our code.
  - Let's now suppose that we wanted to create a child `Player` class that inherits all the properties and methods from the parent class but this child class is more for `Developers` who are going to work for the game and make changes.
  - Let's also say that we want these types of players to have access to a method that allows them to set the `maxScore` of a player to a large number.

EXAMPLE CODE:
```typescript
class Player {
	constructor(
	public firstName:string, 
	public lastName:string, 
	private score:number
	){}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}

	get playerName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	get score(): number {
		return this.score;
	}

	set score(newScore: number) {
		if(newScore < 0) {
			throw new Error("Score must be positive!")
		}
		this.score = newScore;
	}
}

class Developer extends Player {
	public isDev: boolean = true;

	maxScore(){
		this.score = 999999; // ERROR!
	}
}
```

  - With our example above, we will get an error in our editor because the `score` property in our parent class is a `private` property and cannot be accessed outside the parent class itself.
  - This is where the `protected` modifier comes in as it will allow us to access the `score` property within the child class __ONLY__.
  - Please also keep in mind that `protected` !== `public`.

EXAMPLE CODE:   
```typescript
class Player {
	constructor(
	public firstName:string, 
	public lastName:string, 
	protected score:number
	){}

	private secretMethod(): void {
		console.log("SECRET METHOD!")
	}

	get playerName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	get score(): number {
		return this.score;
	}

	set score(newScore: number) {
		if(newScore < 0) {
			throw new Error("Score must be positive!")
		}
		this.score = newScore;
	}
}

class Developer extends Player {
	public isDev: boolean = true;

	maxScore(){
		this.score = 999999; // WORKS JUST FINE! :)
	}
}
```

  - With the small update made to our parent class, we are now able to access the `score` property from the child class and make the updates to the value as needed. 

- [Back to Top](#table-of-contents)

---

## Classes and Interfaces:

  -  Next, we will begin to merge an `interface` with a `class` to further help us define the properties that the class will need.
  - The first step that we need to take is defining an `interface` and for this example we will use a `Color` interface.
  - After that is done, we will use a basic `Bike` class that will make use of the `Color` interface to set its `color` property.
  - This can be done by using the `implements` keyword and referencing our `interface` which will immediately show an error as we will need to satisfy the `color` property.

EXAMPLE CODE:
```typescript
interface Color {
	color: string;
}

class Bike implements Color {
	const color = 'red';
}
```

  - While the above does work, we want to ensure that a user has the ability to set their own color for each instance of the `Bike` class that is created and for this we will need to make use of our `constructor` method.
  - While we can do this the long way and re-declare the `color` property, this is not the best design route so instead, we will make use of our `public` keyword and pass that through our `constructor` method to avoid all the setup as shown below:

EXAMPLE CODE:
```typescript
interface Color {
	color: string;
}

class Bike implements Color {
	constructor(public color: string){}
}

const bike = new Bike("Yellow");
console.log(bike.color) // "Yellow"
```

  - With the change above, we have not only satisfied the `Color` interface for the `color` attribute, but we have also allowed the `Bike` class to be more dynamic allowing a user to set their own color string.
  - Keep in mind that interfaces are not limited to just one class but you can have multiple classes that make use of the same `interface`

EXAMPLE CODE:
```typescript
interface Color {
	color: string;
}

class Bike implements Color {
	constructor(public color: string){}
}

const bike = new Bike("Yellow");
console.log(bike.color) // "Yellow"

class Jacket implements Color {
	constructor(public color: string){}
}

const winterJacket = new Jacket("Red")
console.log(winterJacket.color) // "Red"
```

  - The main theme to understand here is that whenever we are working with `interfaces` in our `classes`, we will use the `implements` keyword to invoke the interface rules and we can also use our `public` / `private` keywords in our constructor to satisfy the interface attribute types.
  - One last thing to note is that you can have situations where you are implementing multiple `interfaces` and as long a the pattern is followed in your classes, everything will work as designed.

- [Back to Top](#table-of-contents)

---

## Creating Abstract Classes:

  - The last topic of these notes will revolve around the `abstract` keyword and what it means when it comes to invoking this with a `class`.
  - This is to say, creating an `abstract class` which has a special rule and that is that you __CANNOT__ create new instances of the `abstract class` that is defined.
  - Instead, what this means is that we will define a pattern of properties or methods that a __CHILD__ class has to invoke.
  - To show this clearly, let's suppose that we want to create an `Employee` class that will contain two child classes, `FullTimeEmployee` and `PartTimeEmployee`

EXAMPLE CODE:
```typescript
abstract class Employee {
	constructor(public first: string, last: string){}

	abstract getPay():number;

	greet(): void {
		console.log("HELLO!!")
	}	
}
```

- With the example above, you wil notice that the `getPay` method is not a standard method but rather an `abstract` method which is to say a pattern that __MUST__ be followed by a child class.
- Furthermore, we also have access to the `greet` function which is just a standard method that all children classes can use freely.
- The main stipulation here is that each child class needs to contain the `getPay` method and it needs to return the correct type as defined in the `abstract class`.

EXAMPLE CODE:
```typescript
abstract class Employee {
	constructor(public first: string, last: string){}

	abstract getPay():number;

	greet(): void {
		console.log("HELLO!!")
	}	
}

class FullTimeEmployee extends Employee {
	getPay(): number {
		return 21;
	}
}

class PartTimeEmployee extends Employee {
	getPay(): number {
		return 69;
	}
}
```

  - Now, while we have satisfied the condition for the parent class, the `getPay` method is hard coded which is not a good design option.
  - Instead, we can make use of a `constructor` method for both our child classes but remember that we __MUST__ invoke `super()` from our parent class.
  - This will allow us to makle our child classes more dynamic in terms of showing different amounts of pay.

EXAMPLE CODE:
```typescript
abstract class Employee {
	constructor(public first: string, public last: string){}

	abstract getPay():number;

	greet(): void {
		console.log("HELLO!!")
	}	
}

class FullTimeEmployee extends Employee {
	constructor(first: string, last: string, private salary: number){
		super(first, last)
	}

	getPay(): number {
		return this.salary;
	}
}

class PartTimeEmployee extends Employee {
	constructor(first: string, last: string, private hoursWorked: number, private hourlyPay: number) {
		super(first, last);
	}

	getPay(): number {
		return this.hoursWorked * this.hourlyPay;
	}
}
```

  - With the updated code above, we are now able to make new instances of each child class which have the `getPay` method but even further, these methods are performing different calculations to show the employee pay.
  -  The main thing to understand here is that `getPay` has to be implemented from the `abstract class`.
  - Another thing to keep in mind is that `interfaces` and `abstract classes` may __APPEAR__ to be the same but they are not as interfaces do not inherit any functionality or properties from a parent interface unlike classes which will.
  - Lastly, yes, you can have classes that inherit from an `abstract class` __AND__ from an `interface`.

- [Back to Top](#table-of-contents)

---

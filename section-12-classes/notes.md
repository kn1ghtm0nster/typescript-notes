# Classes

## Table of Contents:


---

## The Class Keyword:


- __NOTE :__ For these notes, we will be focusing on the `JavaScript` side before we dive deeper into creating classes with `TypeScript`.
- First thing we need to review is how to create classes in traditional `JavaScript`.
- Remember that classes are just templates that we can use to create objects. 
- These objects contain special important pieces that which allow creation, extension, and highly customizable objects.

```javascript
class Person{
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	greet(){
		return `Hello, ${this.name}!`;
	}
}

const jim = new Person("Jim", 8)

jim.greet() // "Hello, Jim!"
```

  - What this means for us is that we can create several `instances` of the same class and save those new versions to a variable which will allow them to have access to the same methods but use the properties of the class itself to output different things.
  - Let's suppose that we want to add another person variable and have them use the same `greet` function.
  - The code for our `Person` class remains the same and the only thing we need to add is another variable declaration to call the same method for our new variable.
  - In addition, we can also use this same syntax in `TypeScript` as standard syntax does also work in our `.ts` files.

```typescript
class Person{
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	greet(){
		return `Hello, ${this.name}!`;
	}
}

const jim = new Person("Jim", 8);

jim.greet() // "Hello, Jim!"

const pablo = new Person("Pablo", 41);
pablow.greet() // "Hello, Pablo!"
```

  - This also means that if we compile our `.ts` file, nothing will really change but the same syntax can be used to create a standard class in `TypeScript`.

- [Back to Top](#table-of-contents)

---

## Constructors:

  - As you may have seen from the examples in the previous section, the `Person` class contains a special `constructor` method that is defined at the top of the class itself.
  - This method does __NOT__ need to be defined for all classes that you create however, this is a common practice as this method will run __EVERY TIME__  that a new instance of that class is created.
  - Let's suppose that we wanted to log each time a new class was created in our files. We would simply do this by having our class be defined as follows:

```typescript
class Logger{
	constructor(){
		console.log("NEW INSTANCE CREATED")
	}
}

const firstInstance = new Logger(); // "NEW INSTANCE CREATED"

const secondInstance = new Logger(); // "NEW INSTANCE CREATED"
```


  - In addition to doing a specific task during each new instance created, we can also set new class properties that each of our instances can access indepentently.
  - To do this, remember that we have to add the arguments that we need to pass in to each instance within the `constructor` declaration.
  - Once that is done, we will need to use `this` keyword which binds the arguments as properties to each instance as shown below.

```typescript
class Player{
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

const george = new Player("George", "Smith");
console.log(george.firstName) // "George"
```

- [Back to Top](#table-of-contents)

---

## Class Fields:

  - Let's suppose that we want to add `numLives` and `score` properties that each new instance will have by default.
  - One way we can achieve this functionality is by adding default properties in the `constructor` method in the traditional manner as below:

```typescript
class Player{
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
		this.score = 0;
		this.numLives = 10;
	}
}
```

  - Instead of having to rely on the `constructor` method for this, we also do have access to a special type of syntax for classes known as `class fields`
  - This means that we can set variables __OUTSIDE__ of the `constructor` method but within the class itself which will be available for each of our instances just as if they were within the constructor itself.

```typescript
class Player{
	score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
```

  - With the updated example above, we are able to create a new instance of our `Player` class which will still contain the `score` and `numLives` properties.
  - __NOTE :__ Keep in mind that `class fields` are only for the purposes of tracking values that will be __HARD CODED__.
  - This does not mean that the values cannot change but that they will __ALWAYS__ start with those values for each new instance.
  - If we wanted to now have a method for removing a life, it would be as simple as the following:

```typescript
class Player{
	score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}
}

const player1 = new Player("John", "smith")
player1.loseOneLife()
console.log(player1.numLives) // 9
```

- [Back to Top](#table-of-contents)


---

## Private Fields:

  - With our current `Player` class, both our `score` and `numLives` properties are still accessible and can be changed freely.
  - An example of this would be if someone changes the `score` property to less than 0 which currently is available for anyone to access and update.
  - One way to prevent this is to ask the person __BEFORE__ the change to a negative value is made.
  - Another approach is to have an underscore property such that it reads as `_score` which just means that the property shouldn't be touched by a developer but still allows changes.
  - The newer approach however, is to add the `hash` sign in front of the property such that it reads as the following:

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}
}
```

  - Now if we were to try and log `score` from a variable, we would see an error and this is because the property is private.
  - Now, if we wanted to view or update the `score` property, we would need to use a method for this as the property is encapsulated only to the class.

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	updateScore(newScore){
		this.#score = newScore;
	}
}

const player1 = new Player("John", "smith")
player1.getScore() // 0
```

  - Keep in mind that we __MUST__ use the special syntax in order to access the `private property`
  - This also means that if we update the new value of the `score` property, we need to create a new method to perform this task as shown in the example above.
  - Along with having `private properties`, we can also create `private methods` and these too will only operate in a similar fashion as mentioned above.

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}
}
```

  - With the private method above, if we wanted to see the output of the `#secret` function, we would need to call the variable along with the `#secret()` syntax.

- [Back to Top](#table-of-contents)

---

## Getters:

  - In addition to making private properties and methods, we also have the ability to use special syntax to view properties.
  - Let's suppose that we want to access a method without using parenthesis or the constructor properties.

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}
```

  - The example above now contains a special `get` keyword which does exactly as the name implies.
  - The `playerName` method _IS_ a function, however, this can be called just as if we created a property on the `constructor` method.
  - This means that if we wanted to get the information of the player from a variable such as their full name, we can simply use `variable.playerName` and we will see that returned to us.
  - In addition, this helps us now create methods that __ACT__ as properties which will also allow us to call on private properties or methods from the class.

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	get score(){
		return this.#score;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

const player1 = new Player("John", "smith")
player1.score // 0
```

  - In the example above, while we do have the `getScore` method, we now have the `score` method which is a getter property that functions as a better alternative when dealing with private methods and private fields.
  - The main theme to understand here is that `getters` will allow us to create methods that act as properties.
  - The main issue with our example however, is that we cannot make updates to the properties that we are accessing meaning that we cannot simply say `player1.score = 12`.

- [Back to Top](#table-of-contents)

---

## Setters:

  - Now that we know about `getters` for our classes, what if we wanted to simply update the `score` property to a new value that is __ABOVE__ 0?
  - One way we could do this is with the current `updateScore` method but that involves having to call a method and pass in a new value.
  - However, instead of doing the above solution, we could also use a special syntax that would allow us to update a property value even if it is a `private field`
  - For this, we will update our code as the following:

```typescript
class Player{
	#score = 0;
	numLives = 10;
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	get score(){
		return this.#score;
	}

	set score(newScore){
		if(newScore < 0){
			throw new Error("New score must be positive!")
		}
		this.#score = newScore;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

const player1 = new Player("John", "smith")
player1.score // 0
player1.score = 12; // 12 
```

  - Main theme to understand is that `getters` and `setters` which are often seen together and helps with upating the values of private properties or properties within the class itself.


- [Back to Top](#table-of-contents)

---

## Static Properties & Methods:

  - Next, we will review methods that can only be called on the class itself.
  - __REMEMBER!__ these methods cannot be accessed by the instaces themselves (variables).
  - This means that we need to call the class itself.
  - Let's suppose that we wanted to have a method that had a static method that shows the description of the game.
  - For this, we can use a static property as follows:

```typescript
class Player{
	#score = 0;
	numLives = 10;
	static playerDescription = "Generic description of player";
	
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	static createNewPlayer(){
		return new Player("Sammy", "White");
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	get score(){
		return this.#score;
	}

	set score(newScore){
		if(newScore < 0){
			throw new Error("New score must be positive!")
		}
		this.#score = newScore;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}
```

  - With the example above, if we wanted to access the `gameDescription` property, we would need to call the `Player` class such as `Player.playerDescription`
  - In addition, the example above contains a static method called `createNewPlayer` which also can be called by the class itself to create a new player.
  - Ultimately the main thing to understand is that the `static` keyword allows us to create methods or properties that only exist on the class itself and __NOT__ on the instances that we create with variables.

- [Back to Top](#table-of-contents)

---

## Extending Classes:

  - With our current example, let's suppose that we want to create a special `Admin` use type.
  - While we _COULD_ create another class that is very similar to the `Player` class, this redundancy is not a good design option.
  - A better alternative would be to make use of the `extends` keyword which will allow a child class to inherit properties and methods from a parent class without having to create duplicate properties / methods.
  - Even further, this means that if one class is updated, we will not have to make many changes to another or any additional logic.
  - This would look like the following:

```typescript
class Player{
	#score = 0;
	numLives = 10;
	static playerDescription = "Generic description of player";
	
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	static createNewPlayer(){
		return new Player("Sammy", "White");
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	get score(){
		return this.#score;
	}

	set score(newScore){
		if(newScore < 0){
			throw new Error("New score must be positive!")
		}
		this.#score = newScore;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

class Admin extends Player {
	isAdmin = true;
}

const admin = new Admin("John", "Doe")
admin.isAdmin // true
```

  - With the example above, we can access the `isAdmin` property AND the properties of the parent class that the child class inherited from.

- [Back to Top](#table-of-contents)

---

## Super()

  - Next, let's suppose that we want our admin users to have an array that __HAS__ to be passed in which will provide the admin priviledges.
  - The problem here, is that our `Admin` class will now need to use a `constructor` since we need to preovide the priviledges for the new admin users.
  - The reason that this is a problem is because our child class is inheriting from the parent class via the `extends` keyword.
  - In order to prevent this issue, we will need to make use of the `super()` method which calls the constructor method of the parent class __BEFORE__ the child class calls its own `constructor`
  - In addition, since our parent `Player` class contains a `firstName` and `lastName` argument to pass in, we will also have to pass this into our `super` method as shown below:

```typescript
class Player{
	#score = 0;
	numLives = 10;
	static playerDescription = "Generic description of player";
	
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	static createNewPlayer(){
		return new Player("Sammy", "White");
	}

	loseOneLife(){
		this.numLives -= 1;
	}

	getScore(){
		return this.#score;
	}

	get score(){
		return this.#score;
	}

	set score(newScore){
		if(newScore < 0){
			throw new Error("New score must be positive!")
		}
		this.#score = newScore;
	}

	updateScore(newScore){
		this.#score = newScore;
	}

	#secret(){
		console.log("SECRET HERE");
	}

	get playerName(){
		return `${this.firstName} ${this.lastName}`;
	}
}

class Admin extends Player {
	isAdmin = true;
	constructor(firstName, lastName, priviledges){
		super(firstName, lastName);
		this.priviledges = priviledges;
	}
}

const admin = new Admin("Thomas", "Anderson", ["add", "delete", "update"])
```

  - As the example above shows, our new admin variable now contains not only the information from our parent class, but also the array of priviledges that are required for this type of user.
  - The main thing that we need to keep in mind is that `super` will be inside the child `constructor` method and this will include arguments that need to be used from the parent constructor.
  - Keep in mind that all these notes have been primarily done in `JavaScript` syntax even though we are using `TypeScript` for our examples.
  - This now begs the question: How are `TypeScript` classes different?

- [Back to Top](#table-of-contents)

---

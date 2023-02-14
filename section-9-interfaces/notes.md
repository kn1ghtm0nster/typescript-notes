# Interfaces

---

## Table of Contents:

- [Intro](#intro)
- [Readonly & Optional Interface Properties](#readonly-and-optional-interface-properties)
- [Interface Methods](#interface-methods)
- [Interface Method Parameters](#interface-method-parameters)
- [Reopening Interfaces](#reopening-interfaces)
- [Extending Interfaces](#extending-interfaces)
- [Interface Multiple Inheritance](#interface-multiple-inheritance)
- [Interfaces vs Type Aliases](#interface-vs-type-aliases)

---

## Intro:

- __NOTE :__ these notes will cover concepts that can be done with standard `type aliases` and `objects` __HOWEVER__, there will be some differences between both types.

- Before we start diving into `typescript` code, we need to understand what an `interface` actually is.

- In short, we use `interfaces` to describe the __SHAPE__ of an object that we will be using with other variables.

- This further helps us create more structured, modular `types` of data.

- Now, given what we've said so far, you probably have questions on __WHY__ we need to learn about `interfaces` if we can already perform this functionality.

- We will review this question in detail later on in these notes but for now, just assume there is no other way to create objects that tell us about `types`.

- One of the first ways that `interfaces` differ from `type aliases` is that we __DO NOT__ need to use curly braces to create an `interface` object.

EXAMPLE 1:

```typescript
interface Person {
    name: string,
    age: number
};
```

- As shown in the examples above, the `Person` interface is defined only by using the `interface` keyword and nothing else.

- If we now need to _STORE_ information about a person or user within a variable, we can make use of the `Person` interface as well just like any other `type alias`

EXAMPLE 1.1:

```typescript
interface Person {
    name: string,
    age: number
}

const timmy: Person = {
    name: 'Timmy',
    age: 24
};
```

- In our updated exmaple above, we have created a variable that contains the __SHAPE__ of `Person` which was previously defined in an `interface` object.

- __NOTE :__ Even with `interface` objects, we will still call the data within the object a `property`

- Another thing to point out for `interfaces` is that we __DO NOT__ need to use commas to separate properties and can also use semi-colons.

- [Back to Top](#table-of-contents)

---

## Readonly and Optional Interface Properties:

- Now that we've seen what basic `interface` objects look like, we can begin to talk about __OPTIONAL__ properties that are not required to create a new `interface`.

- Let's suppose that we wanted to create an `interface` to keep track of people in our club with some people having a `nickname` while others do not have this property (no nickname assigned to them). We could start setting up our code as follows:

EXAMPLE 2:

```typescript
interface Person {
    first: string,
    last: string,
    nickname?: string
};
```

- If you've noticed in the example above, the `nickname` property contains a question mark character before we denote the `type` for that property.

- Remember that this is how we can mark an optional property in an object with `typescript`!

- Now that we've created the base shape of the object, we can move on to using this shape in a variable to keep track of our users!

EXAMPLE 2.1:

```typescript
interface Person {
    first: string,
    last: string,
    nickname?: string
};

const tom: Person = {
    first: "Thomas",
    last: "Smith",
    nickname: "Tommy"
};

const tim: Person = {
    first: "Timmy",
    last: "Hendrix"
};
```

- Notice in our example above that while we have created two variables that use the `Person` interface, one of them contains the `nickname` property while the other does not.

- While you may __THINK__ that this will lead to an error, be advised that this is __INCORRECT__ as the `nickname` property is __OPTIONAL__ and thus does not need to be present in every variable that makes use of the `Person` interface.

- Moving on to something a little more interesting, you may already be aware that just having a first and last name properties are not enought for a large database to keep track of the __CORRECT__ users we want for our club as we may have multiple tims and toms!

- Most databases today will automatically create an `id`-like property whenever a new user is created and even further, this property __CANNOT__ be changed after created as it is `immutable` in the database.

- To replicate this in our `interface`, we can make use of the `readonly` keyword which does exactly as the word implies, makes a property `immutable`.

EXAMPLE 2.2:

```typescript
interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string
};

const tom: Person = {
    id: 21,
    first: "Thomas",
    last: "Smith",
    nickname: "Tommy"
};

const tim: Person = {
    id: 12,
    first: "Timmy",
    last: "Hendrix"
};
```

- __NOTE :__ keep in mind that if any of the required properties are missing or contain an invalid `type`, then your `typescript` __WILL__ throw an error! This is to say, pay close attention to the types and properties in your `interfaces`.

- [Back to Top](#table-of-contents)

---

## Interface Methods:

- Along with all the different types of properties that we can add to an `interface`, we can in addition, add `methods` to these objects as this will allow us to create methods that will take a certain `type` of argument and return a specific `type` of result.

- In addition, this means that whenever we create an `interface` variable, we also need to ensure that the method that we've defined originally is also present in the `interface` variable and contains the correct information to return the data.

- __NOTE :__ Notice how we keep repeating the word `return`. This is because the methods that we defined in the `interface` __MUST__ return data.

- Continuing with the `Person` example that we created, let's suppose that we now want a method that simply provides a simple greeting.

- There are two ways that we can achieve this goal within an `interface` such as the following:

EXAMPLE 3:

```typescript
interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string
};

const tom: Person = {
    id: 21,
    first: "Thomas",
    last: "Smith",
    nickname: "Tommy"
};

const tim: Person = {
    id: 12,
    first: "Timmy",
    last: "Hendrix"
};
```

- Notice that the example above is stating that the __METHOD__ `sayHi` needs to be present in the variables and it cannot just be set equal to a string but rather it needs to `return` some kind of string!

- Knowing this, we can make the following adjustments to the variables that we've defined.

EXAMPLE 3.1:

```typescript
interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    sayHi: () => string
};

const tom: Person = {
    id: 21,
    first: "Thomas",
    last: "Smith",
    nickname: "Tommy",
    sayHi: () => {return "HELLO THERE!"}
};

const tim: Person = {
    id: 12,
    first: "Timmy",
    last: "Hendrix",
    sayHi: () => {return "GO AWAY!"}
};
```

- Keep in mind that the method will follow the pattern of the `interface` __ONLY__ meaning that if the method does __NOT__ take any arguments, then there should be no arguments passed to the method and vice versa.

- In addition, notice that the method in the `interface` definition contains that parentheses __AFTER__ the name of the method. We can also define methods as  `sayHi(): string`.


- [Back to Top](#table-of-contents)

---

## Interface Method Parameters:

- Just as pointed out in the previous section, we can add parameters to our interface methods so that they return a specific value based on the input.

- Let's suppose that we wanted to create a `Product` interface that represents a specific item in our online store. In addition, let's suppose that we wanted to have a method that would apply a `discount` to the original price and the admins of the store would be the ones that would be able to apply the discount percentage at which point we would get a new price returned to us from this method.

EXAMPLE 4:

```typescript
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}
```

- As the example above points out, the `applyDiscount` method  will take in an `discount` argument which is a `number` and return a `number` which will represent the discounted price.

- Remember that this method will be __REQUIRED__ for every variable that we create using this `interface`.

- __NOTE :__ the name of the parameter does __NOT__ need to be named anything specific but you will need to ensure that the names of this parameters make sense in the event that you get errors!

- Knowing all of this information, we can now move on to creating our actual variable for our first item and set the starting discount value.

EXAMPLE 4.1:

```typescript
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Jordans",
    price: 150,
    applyDiscount(discountAmount: number){
        const newPrice = this.price * (1-amountOfDiscount);
        this.price = newPrice;
        return this.price;
    }
}

shoes.applyDiscount(0.25) // returns reduced price at 25% discount
```

- One key thing to understand with the example above is that in our `shoes` variable, the `applyDiscount` method is __NOT__ performing any changes and is only setting the template for calculating the discount! 

- This means that the method will only be used __AFTER__ the variable has been created and initialized.

- [Back to Top](#table-of-contents)

---

## Reopening Interfaces:

- With regards to `interfaces` only, one thing that this data type has over standard `type aliases` is that it can be __REOPENED__ meaning that we can add more properties to the interface after it has been defined.

EXAMPLE 5:

```typescript
interface Person {
    name: string;
}

interface Person {
    age: number;
    showInfo(name: string, age: number) : string;
}

// PERFECTLY FINE!
const user1: Person = {
    name: "Mike Hawk",
    age: 45,
    showInfo(name: string, age: number){
        return `${this.name} is ${this.age} years old!`;
    }
}
```

- As the example above shows, if we re-declare `Person` after the first interface declaration, all that `typescript` will do is add the `age` property to the original interface definition for us to use.

- Main thing to understand here is that `interfaces` allow us to keep adding properties even after the first interface declaration without getting any errors whereas `type aliases` __WILL__ throw errors if we attempt to add another property after the first declaration.

- [Back to Top](#table-of-contents)

---

## Extending Interfaces:

- One big plus for using an `interface` is that you can extend your interfaces to other interfaces that you create thus operating more like classes and providing more Object Oriented code.

- Let's suppose that we wanted to have a way to differentiate between types of service dogs and standard pet dogs.

- For this, we will need to first define a `Dog` interface as follows:

EXAMPLE 6:

```typescript
interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 2,
    breed: "Golden Retriever",
    bark(){
        return "WOOF WOOF!";
    }
}
```

- Now that we have a `Dog` interface and a basic variable that uses this interface, let's move on to creating the specialized dogs who have specific jobs such as a K9 service dog, etc.

- Instead of copying all the information from the `Dog` interface and adding the additional properties for our special dogs, we can make use of the `extends` keyword which will provide us with access to the `Dog` interface properties and methods therefore avoiding redundant code.

EXAMPLE 6.1

```typescript
interface Dog {
    name: string;
    age: number;
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 2,
    breed: "Golden Retriever",
    bark(){
        return "WOOF WOOF!";
    }
}

interface ServiceDog extends Dog {
    service: "drug dog" | "bomb dog" | "therapy dog" | "guide dog";
}

const Kal: ServiceDog = {
    name: "Kal",
    age: 3,
    breed: "Doberman",
    bark(){
        return "WOOF WOOF!";
    },
    job: "bomb dog"
}
```

- In the example above, not only did we create a `ServiceDog` interface that inherits from the `Dog` interface, but we also made use of these properties in the `Kal` variable that we created which is a `ServiceDog` type.

- One thing to point out here is that with regards to `interfaces`, we are not limited to only __ONE__ interface inheritance but rather, we can inherit from __MULTIPLE__ `interfaces` which we wil briefly go over next.


- [Back to Top](#table-of-contents)

---

## Interface Multiple Inheritance:

- As pointed out previously, we can inherit from multiple `interfaces` and so we will do this by starting with a simple `Person` intrface.

EXAMPLE 7:

```typescript
interface Person {
    name: string;
}

interface Employee {
    readonly id : number;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string;
    skills: string[];
}

const Laron: Engineer = {
    name: "LaRon",
    id: 333,
    email: "laron.smith@example.com",
    level: "Sr",
    languages: ["JavaScript", "Python", "TypeScript"]
}
```

- In the example above, we first create a basic `Person` interface which just contains a `name` property since at the bare minimum, we will need this.

- Next, we created an `Employee` interface which contains a `readonly id` property that must be a number along with the `email` property for that employee.

- Lastly, we merged all the previous two interfaces into one `Engineer` interface which uses the properties of the parent interfaces along with adding its own properties.

- __NOTE :__ Keep in mind that if you are going to extend more than one interface, each interface will need to be separated by a comma.

- [Back to Top](#table-of-contents)

---

## Interface vs Type Aliases:

- Now that we've gone over the highlights of `interfaces` at a bare minimum, we can come back to the question that you might have had at the beginning of these notes: __WHY__ should we use `interfaces` instead of `type aliases`?

- One area where aliases and interfaces differ is using literals such as a single string to select one option or the other.

EXAMPLE 8:

```typescript
type Color = "red" | "blue";
```

- The example above __CANNOT__ be used with interfaces because the options are not contained inside an object.

- This means that if we are __NOT__ describing the shape of an object, `type aliases` will be a better option.

- Another key difference is that we can reopen `interfaces` and add new properties even after the interface has been defined. With `type aliases`, this is __NOT__ possible and will result in an error.

- With regard to `interfaces`, we can easily use other properties of the parent interfaces by inheriting those properties with the `extends` keyword.

- The same result requires a bit more syntax when using `type aliases` and require use of the intersection type `&`.

- Knowing all of this, remember that interfaces are used to just describe the __SHAPE__ of an object and they have flexibility to add properties and inherit properties / methods using the `extends` keyword.

- Using `interfaces` is more of a preference but there are more examples of `interfaces` being used in real world projects because of their flexibility.

- [Back to Top](#table-of-contents)

---
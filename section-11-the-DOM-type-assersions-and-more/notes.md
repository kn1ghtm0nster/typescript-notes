# The DOM, Type Assertions, and More!

## Table of Contents:

- [Back to Top](#table-of-contents)

---

## Project Setup:

* Setup for project requires the following:
	* [Node Install](https://nodejs.org/en/)
	* Typescript Install -> `npm install -g typescript`
		* See the [docs](https://www.typescriptlang.org/download) for more 
	* Configuration Typescript file -> `tsc -init`
	* Node Dependencies file -> `npm init -y`
	* Typescript only directory -> `src/`
	* Javascript only directory -> `dist/`
	* `.gitignore` -> include `node_module/` and `package.json` / `package-lock.json`
	* Install `server-lite` package through `npm`
	* Enable watch mode on tsc files -> `tsc -w`
	* Add script to package file -> `"start" : "server-lite"`
	* Configure `outDir` key in `tsconfig.json` file to be `./dist/`
* Start project with command `npm start`

- [Back to Top](#table-of-contents)

---

## Working With The DOM:

  * If you're working with the DOM, you won't have to make any guesses and that's because the object itself is already built into `typescript`! 
  * This means that simple definitions of DOM nodes can be declared as simple variables and this will be translated as normal such as `<button>Click Me!</button>` 
  * We can further see this in our TS file by using a variable with `querySelector` so we will have `const btn = document.querySelector("button");` and if we log that button, our appplication will know how to display that DOM node in our console.
  * The `lib` option in our `tsconfig.json` file will allow us to specify which libraries and syntax to use which also includes the `DOM`, and different types of syntax.
  * Keep in mind that the `DOM` object is added in to our projects by default but if you want to specify the version of syntax with the `DOM`, then you are able to do this as well.
  * The reason that this is useful is if you're attempting to use methods or syntax that is part of a more updated version of `JS`, then the `lib` option will need to be updated so that our `TS` file can make use of this new syntax.

- [Back to Top](#table-of-contents)

---

## The Lib Compiler Option:

  * In addition, we could also update the `target` key in our config file but our `lib` property allows us to add specific versions for other reasons.
  * __NOTE :__ the `lib` option is listed within the `compilerOptions` object.

- [Back to Top](#table-of-contents)

---

## Typescript's Non-Null Assertion Operator:

  * With regards to actually selecting items from the `DOM` and saving them to variales, if you hover over these in your text editor, you may notice that besides the `HTMLElement` type that the variable will contain, you will also see a union and the second option being `null`.
  * The reason that that the note above matters is because if we try to add an event listener to the button, our editor may warn us about the variable __POSSSIBLY__ containing a `null` type and the method does __NOT__ work on `null` types.
  * To get around this issue, we can add the `?` operator before our event handler so that we ensure the code only runs if the type of the variable is __NOT__ null.
  * This means that we will need to update our code so that it contains the following: 

```typescript
btn?.addEventListener("click", function(){

	alert("CLICKED!");

})
```

  * While the above is __ONE__ option of dealing with possible `null` types, the alternate option is to make use of the `Non-Null Assertion Operator - !` and this character will be placed at the end of our variable declaration.
  * This informes typescript that our data is __GUARANTEED__ not to be `null` (will have data) which further removes the union type from the variable.
  * This change will make our code look like the following:

```typescript
const btn = document.getElementById("btn")!;

btn.addEventListener("click", function(){

	alert("CLICKED!");

})
```

  * As you can see from our updated code above, adding the `non-null` character means that we no longer have to use the `optional chaining operator - ?`
  * Keep in mind that both options are tradeoffs of each other so consider using these wisely or when you know that a variable will FOR SURE not be `null`.
  * __NOTE :__ The `non-null` operator is for TS ONLY!

- [Back to Top](#table-of-contents)

---

## Type Assertions:

  * There are times in which we will know more than the language about a certain variable and its type so that we can access other methods or properties.
  * These are commonly known as `type assertions` and can be easily done with the syntax below.

  ```typescript
  const mystery: unknown = "hello!";

  const numChars = (mystery as string).length; // 6

  mystery // unknown
  ```

  * With the code above, the only drawback is that we may have a situation where the variable contains a `number` instead of a string and we are unable to access the `length` property of a number and thus we would get an `undefined` return in our console.


- [Back to Top](#table-of-contents)

---

## Type Assertions With The DOM:

  * Now, let's suppose that we wanted to create a generic todo list in our website.
  * For this,we would need to make use of the `input` element such as the following.

  ```typescript
  const btn = document.getElementById("btn")!;
  const input = document.getElementById("todoInput")!;

  btn.addEventListener("click", function(){
    alert(input.value);
  })
  ```

  * __NOTE :__ If you try and run the code above on your machine, you will get an error message in your editor stating that there is no such thing as the `value` property for this element.

  * This is becaue the basic `HTMLElement` interface in TS does __NOT__ contain this property however, the `HTMLInputElement` interface does and so, we can make use of `type assertions` to gain this access

```typescript
const btn = document.getElementById("btn")!;
const input = document.getElementById("todoInput")! as HTMLInputElement;

btn.addEventListener("click", function(){
	alert(input.value);
})
```

  * Another way to use `type assertions` is to use angle brackets such as follows:

```typescript
alert(<HTMLInputElement>.value);
```

  - __WARNING!__ this syntax does __NOT__ work if using `react` with `tsx` as this will cause issues for rendering the correct components.

- [Back to Top](#table-of-contents)

---

## Working with Events:

  - Moving on to using forms with the `DOM`, we will now suppose that we want to build a very basic todo app and for this, we will need to add a `form` to our HTML file and further, add the information to the `TS` file.
  - This now brings us to a useful trick when it comes to using `querySelector` as we have been using `getElementById` and then having to use `type assertions` to prevent issues with accessing specific methods and properties.
  - Using `querySelector` our variables in the `DOM` will have access to the correct types without having to use any assertions.
  - This now brings us to the starting code below.

PROJECT CODE:

```HTML
<!DOCTYPE html>

<html lang="en">

	<head>
	
		<meta charset="UTF-8">
		
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
		
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
		<title>Typescript!</title>
	
	</head>
	
	<body>
	
		<form id="todoForm">
		
			<input type="text" placeholder="enter a task" id="todoInput">
		
		<button id="btn">Click Me!</button>
	
	</form>
	
	<script src="dist/index.js"></script>
	
	</body>

</html>
```

```typescript
const form = document.querySelector("form")!;

const input = document.getElementById("todoInput")! as HTMLInputElement;

const btn = document.getElementById("btn")! as HTMLButtonElement;

  

form.addEventListener("submit", function(e){

e.preventDefault();

console.log("SUBMITTED!");

})
```

  - With the version above, notice that the callback function within the `addEventListener` is using the `event` object which if listed inside the callback, `TS` will be able infer the type of the `event` argument as these are `SubmitEvents`.
  - Now, if you take the function __OUTSIDE__ of the callback area, then `TS` will not have any information on the type however, we can add this part after the `event` argument as follows:

```typescript
const form = document.querySelector("form")!;

const input = document.getElementById("todoInput")! as HTMLInputElement;

const btn = document.getElementById("btn")! as HTMLButtonElement;

  

function handleSubmit(e: SubmitEvent){

e.preventDefault();

console.log("SUBMITTED!")

}

form.addEventListener("submit", handleSubmit)
```

  - The main thing to understand is that even with the `event` object, we need to inform `TS` of the type and `SubmitEvent` is one of those events.


- [Back to Top](#table-of-contents)

---

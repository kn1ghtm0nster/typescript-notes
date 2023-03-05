# Modules

## Table of Contents:

---

## Working Without Modules:

  - The main point of this section is to cover the topic of `modules`
  - Keep in mind that `modules` are a way of sharing code between our files based on the code that we have written for our projects.
  - One thing that needs to be addressed before we can move on to showing how this concept works is a typescript specific way of sharing code called `namespaces`.
  - __NOTE :__ Keep in mind that this was the __PREVIOUS__ way of sharing code across files prior to the adoption of the current `ES Module` standard.
  - Now, while the `namespaces` standard is __NOT__ completely deprecated, it is still highly recommended that you use the `ES Module` standard as this contains most of the functionality from `namespaces`.
  - In addition, `ES Module` standards align with the direction that `JS` is headed.
  - Ultimately, using `namespaces` is not a bad thing but it is not critical to master for basic `TS` code sharing.
  - Let's suppose that we are working on a large application that needs to share fucntions that we write __BUT__ we don't want to make these files `modules` since the functions are small bits of code that are going to be used in another file for a specific purpose.
  - One thing that wecan do with `TypeScript` is define our main utility file and index files as follows:

EXAMPLE 1:

```typescript
// utils.ts

function add(x: number, y: number): number {
	return x + y;
}

function sample<T>(arr: T[]): T {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
```

```typescript
// index.ts
sample([12, 234, 29]) // works just fine
add(4,3) // works just fine
```

  - In the example above, if we compile our code, we will also not see any issues.
  - The reason that we will not see issues is because `TS` will consider our files `script` files and __NOT__ `module` files due to the files not containing an `export` or `import` declaration within the files that are making use of our `utils` file.
  - This also means that we will need to include the files in our `HTML` file __IN THE CORRECT ORDER__ otherwise, `JS` will throw errors in the console.

- [Back to Top](#table-of-contents)

---

## Using TypeScript Modules:

  - As the last section pointed out, not using the `export`, `import`, or top level `await` keywords in our files means that our files are `scripts` and will be treated as such.
  - This means that we will have to include these files in the correct order within our project and that can get very tricky very quickly.
  - If we want to avoid this issue, we can therefore, make use of the `import` and `export` keywords in our `utils` file (or other file(s)) which will enable the `ES Module` features from within `TS`.
  - __WARNING!__ this will cause other code that is relying on this code to require that you import the module itself by using the `import` keyword otherwise, you will see an error.
  - Keeping our example from the previous section, let's now suppose that we wanted to enable `modules` in our files. Our code will now look something like the following:

EXAMPLE 2:

```typescript
// utils.ts

export function add(x: number, y: number): number {
	return x + y;
}

export function sample<T>(arr: T[]): T {
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}
```

```typescript
// index.ts
import {add, sample} from './utils.js'

console.log(sample([12, 234, 29])); // works just fine
console.log(add(4,3)) // works just fine
```

  - Notice that the example above shows `utils.js` instead of `utils.ts` and that's because the final compiled code will all be in `JS`.
  - Ultimately the main point to take away is that in order to make use of the `ES Module` features, you will need to make sure you use `import`, `export` or a top level `await`.

- [Back to Top](#table-of-contents)

---

## Changing Compilation Module System:

  - In the previous section, the functions inside the `utils.ts` file were updated to `modules` which will ensure that `TS` compiles the results into `JS` in a module format.
  - Keep in mind that depending on your configuration settings for compiling, the default syntax may be different.
  - Let's suppose that we wanted to use the previous section's sample code in our project but instead of using `node`, we wanted to see this information in the browser's console.
  - If you have the output `JS` version to an earlier version that did __NOT__ have the `module` features such as `ES5`, then you will see an error being displayed in the console.
  - One option that you __COULD__ use is removing the `import` / `export` keywords in your project files which would no longer make those files `modules` but simple scripts __HOWEVER__ the onus of how the files are used in the overall project is now on __YOU__.
  - Another common approach is to ensure that you are using an output version in your files that make use of the `import` / `export` features.
  - The issue here is that your browser will __NOT__ know how to use these `module` files which means that you will need to ensure that the `type` property in the `script` tag in the main `index.html` file is included as the following example shows:

EXAMPLE 3:

```HTML
<script type="module" src=".dist/index.js"></script>
```

  - __NOTE :__ If you are running the code locally and __NOT__ with a live-server, you will need to make use of your server package / extension as not doing this will yield an error in the browser.
  - Once the server is showing your page, the console should be displaying the code from the previous examples just fine.
  - Ultimately, the main thing here is that changing the `module` key in the `tsconfig.json` file will allow us to make use of the `module` system if we use a version that is something other than `commonJS` or an earlier version than `ES6`.
  - Often times we will make use of the `module` syntax in `.ts` projects.

- [Back to Top](#table-of-contents)

---

## Import/Export Syntax In Depth:

  - If you've not had experience with the standard `import`  /  `export` syntax of `TS` or `JS` modules, this section is for you.
  - As you may have notice in the previous examples, we are exporting two different functions at the same time from the same file.
  - These are what are known as `named exports / imports` as the actual name of the function or object you exported __MUST__ be provided.
  - The alternate option is known as `default exports` as this often involves exporting __ONE__ large class or a specific object within a file of other objects that are also being exported.
  - Let's suppose that we wanted to use a `User` class in a new file called `User.ts` and make use of this class in our `index.ts` file.

EXAMPLE 4:

```typescript
// User.ts

export default class User {
	constructor (public username: string, public email: string){}
	logout(): void {
		console.log(`${this.username} has logged out!`);
	}
}
```

```typescript
// index.ts

import User from './User.js' // <--- works just fine!
```

  - __NOTE :___ Keep in mind that because `default` exports keep their defined behavior, we can name them whatever we want when importing these objects into our other files but often times, the same or similar names are kept for consistency.
  - Next, let's suppose that we want to also write a basic generic helper function __BUT__ we don't want to include this in the actual class itself.
  - This means that our function will be outside the class and exported in a different manner.

EXAMPLE 4.1:

```typescript
// User.ts

export default class User {
	constructor (public username: string, public email: string){}
	logout(): void {
		console.log(`${this.username} has logged out!`);
	}
}

export function userHelper(){
	console.log("user helper!")
}
```

```typescript
// index.ts

import User from './User.js' // <--- works just fine!
import {userHelper} from './User.js' // <--- Also works!
```

  - __NOTE :__ instead of keeping the `User` and `userHelper` function in different lines, we can also combine these by adding them in the same line doing the following:

EXAMPLE 4.2:

```typescript 
import User, {userHelper} from './User.js'
```

  - Lastly, we can also give our imported objects or functions different names by providing alternate names as below:

EXAMPLE 4.3:

```typescript:
import User, {userHelper as helperFunc} from './User.js'
```


- [Back to Top](#table-of-contents)

---

## Importing Types:

  - So far we have only worked with `classes` and `functions` but now, let's suppose that we want to work with a file that primarily stores `types`? How does this code work after compilation?


EXAMPLE 5:

```typescript
// types.ts

export interface Person {
	username: string;
	email: string;
}

export type Color = "red" | "green" | "blue";
```

```typescript
// User.ts

import {Person} from './types.js'

export default class User implements Person {
	constructor (public username: string, public email: string){}
	logout(): void {
		console.log(`${this.username} has logged out!`);
	}
}

export function userHelper(){
	console.log("user helper!")
}
```

  - In the example above, we are making use of the `Person` interface within the `User` class in a different file __BUT__ since `Person` is a __TYPE__, after the code has compiled, you will notice that the `Person` type is gone within the finished `JS` files.
  - This is the normal behavior for compilation and is a __GOOD__ thing.
  - In addition, in more recent versions of `TS`, developers have begun adding the `type` keyword in their imports to inform `TS` that the code being imported is just a `type` and nothing else.

EXAMPLE 5.1:

```typescript
import {type Person} from './types.js'
```

- [Back to Top](#table-of-contents)

---

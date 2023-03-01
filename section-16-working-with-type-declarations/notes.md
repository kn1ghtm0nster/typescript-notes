# Working With Type Declarations

## Table of Contents:

---

## Intro:

  - These notes will focus on working with 3rd party libraries when working within a typescript ecosystem.
  - Up until now, we've used code and syntax that is native to `TS`, but now, we will learn about external libraries.
  - First up is using the concept that is known as `type declarations` and in fact, we've seen these types of files previously which are commonly known as `.d.ts` files.
  - These types of files are very important as they literally declare the `types` that will be used with the `.ts` files that we will be interacting with. No `JS` is ever involved with these types of files.
  - You can find these files in your own projects such as the `lib.dom.d.ts` which describes the shapes and types that enable us to make use of the `DOM` such as using the `console`.
  - Coming back to the points from above, the reason that these files matter is because there will be times where the package that we install from `npm` does __NOT__ contain these type declarations.
  - This means that we will need to go out ourselves and find those actual 3rd party type declaration files from the web.

- [Back to Top](#table-of-contents)

---

## Using 3rd Party Libraries - Axios:

  - As mentioned in the previous section, we will begin working with external libraries starting with one of the most popular libraries `Axios`.
  - Assuming that we already have an ongoing project, we will need to add `Axios` by running the command `npm i axios` or `npm install axios` which will add the package to our project normally.
  - The good thing about `Axios` is that it comes with support for `TS` environments so we don't have to do extra work in our projects to make use of its `types` so that we can make requests to external endpoints without issues.
  - Next, we will look into actually using this package in our own projects.
  - Going further, if you ever need to verify support for `TS` types, you can look within the `node_modules` folder in your project and search for the `.d.ts` files.

- [Back to Top](#table-of-contents)

---

## Working With Axios Types:

  - As mentinoed in the previous section, we will  now take a quick look at using `Axios` with a `TS` project.
  - If you want to see this for yourself, then you can make free requests without having to request a private key to the [JSON Placeholder API](https://jsonplaceholder.typicode.com/).

EXAMPLE 1:

```typescript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users/1').then((res) => {
	console.log('WOO!!');
}).catch(e){
	console.log("ERROR!", e);
}
```

  - Once you've finished the code above, you can run the logic without having to open a browser window by using `node`.
  - This involves finding the `JS` file in the correct directory and running the `node` command along with the filename so the command would look something like this: `node <FILENAME>.js`
  - One thing to point out from the example above is that the code does __NOT__ look like the `TS` syntax that we've been working with.
  - If we were to look further at the `type declaration` file, we would see the definitions of the interfaces and types be something in particular.
  - This means that we can provide specific types in our code so that we better understand what we will pass through the methods or what we are expecting in return such as the following:

EXAMPLE 1.1:

```typescript
import axios from 'axios';

// User interface definition...

axios.get<User>('https://jsonplaceholder.typicode.com/users/1').then((res) => {
	console.log('WOO!!');
}).catch(e){
	console.log("ERROR!", e);
}
```

  - In the example above, if we were to define our own `User` interface that followed the same schema as the enpoint we are requesting, then we would be able to make use of our `User` interface so that we can inform our `get` method of the type of data that we are using and what to expect to enforce rules.
  - Ultimately, the main theme to understand is that `Axios` and other libraries will come with their own `TS` support files.

- [Back to Top](#table-of-contents)

---

## Installing Types Separately:

  - Besides using `Axios`, there may be times where we are using other popular libraries however, these same libraries may not have their `type declaration` files.
  - For these scenarios, we would need to make use of an external resource to find these files as we ourselves would not know the types for these libraries due to their complexity and size.
  - Let's suppose that you wanted to work with the module `lodash` which by itself does __NOT__ contain `TS` types.
  - This means that if we try what the docs suggest in `lodash` and import the library, we will get an error within our editor informing us about the missing types

EXAMPLE 2:

```typescript
import _ from 'lodash'; // ERROR!
```

  - This means that we need to try and define these types for `TS` to understand but since the official package doesn't have this support, we need to look elsewhere.
  - Within the `TS` docs you can even find this information on how to install these `type` files such as `npm i --save-dev @types/[LIBRARY]`.
  - Going further, you can gain more information on the packages available by going to the [official GH page](https://github.com/DefinitelyTyped/DefinitelyTyped)
    - __WARNING!__ the GH repo is __MASSIVE__ so viewing all available type declaration files available.
  - Once we run the command from the earlier notes, we will get the specific type for our library so for our example above, we would need to run `npm i --save-dev @types/lodash`.
  - If you ever need to search for a package and verify that it has `@types` support, you can check [here](https://www.npmjs.com/~types)

- [Back to Top](#table-of-contents)

---

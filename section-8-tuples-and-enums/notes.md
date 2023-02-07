# Tuples and Enums

## Table of Contents:

- [Intro to Tuples](#intro-to-tuples)
- [Tuples P2](#tuples-p2)
- [Intro to Enums](#intro-to-enumss~``)
- [Enums P2](#enums-p2)
- [Enums Behind the Scenes](#enums-behind-the-scenes)

---

## Intro to Tuples:

- Next, we will introduce a data type that is __ONLY__ available in `TypeScript` and that is commonly known as the `Tuple` type.

- In short, `Tuples` are `arrays` that have a fixed length and furthermore, the items within the array will be a specific `type` of data.

- This means that each element within the array will not only need to be a specific type but the items need to follow the pattern that is defined within the `tuple`

EXAMPLE 1:

```typescript
let stuff: string[] = ['tesadfs', 'asdfsdfdf', 'asdfasf'];
```

- We have seen the example above before to create general array type variables, but first, let's consider using a stricter approach to our variables so that we can ensure that our arrays have the correct data types.

- Expanding from our example above, remember that we can also use `union` operators to set an array to be either one or another type of data.

EXAMPLE 1.1:

```typescript
let stuff: (string | number)[] = ['test', 1234];
```

- While the updated code above does add more structure, as to what type of data the array can contain, it does not take the `length` of the array into account which means that we could have an arrray that has X many elements.

- This is where `Tuples` come into play as these data types now limit the number of elements in the array as well as each element's data type.

- Futhermore, within these data types, the ordering of the elements __MATTERS__ so if the data type ordering is incorrect, you will get errors!

- Taking all the above into consideration, we can create a basic `tuple` in our code so it will look something like this:

EXAMPLE 1.3:

```typescript
let firstTuple: [number, string] = [1234, 'testing'];
```

- The example above shows what a generic `tuple` can look like but the main thing to keep in mind is that the `firstTuple` variable contains an array of elements that is a __FIXED__ length and contains a specific order of data types for each element.

- Moving on, let's now suppose that we want to create a variable that contains a color value in the format of `RGB`. This means that we would need to not only create an array to contain these values, but also ensure that this array contains a specific length and data type for each element.

- Taking all that we've learned so far, the code will look something like this:

EXAMPLE 1.4:

```typescript
let rgb: [number, number, number] = [123, 54, 24];
```

- In the example above, we now ensure that our varaible for not only contains the correct data types, but also contains the correct __AMOUNT__ of elements as a traditional array can contain more than just three elements.

- __REMEMBER :__ `tuple` data types do __NOT__ exist in standard `JavaScript`!!!


- [Back to Top](#table-of-contents)

---

## Tuples P2:

- Now that we've had a basic introduction to `tuple` data types, we are going to build on top of the knowledge that we have previously learned which involves mixing data types and a custom data type with tuples.

- Suppose that we want to create a data type that holds basic `http responses` and we will make use of a tuple to ensure that we have the correct response data types.

EXAMPLE 2:

```typescript
type HTTPResponse = [number, string];

const res: HTTPResponse = [200, 'OK'];
```

- With the example above, we now ensure that we have a `number` __FIRST__ and then the `string` type which will contain a message.

- Keep in mind that if you were to try and chance the first element in our example above to be a string, you will see an error for attempting that change.

- __NOTE :__ Be aware that even though we are not able to change specific indexes in our tuple types, there nothing preventing the language from adding additional elements to the tuple itself!

- In addition to being able to add additional elements to the tuple after creation, we are also able to __REMOVE__ elements after the tuple has been set.

- Going one step further, let's suppose that we wanted to keep a collection of responses that follow the response pattern that we have previously defined.

- This means that we can continue to build on top of the knowledge we've gained so that we have have a collection of responses such as the following:

EXAMPLE 2.1:

```typescript
type HTTPResponse = [number, string];

const responses: HTTPResponse[] = [[200, "OK"], [404, "NOT FOUND"]];
```

- [Back to Top](#table-of-contents)

---

## Intro to Enums:

- [Back to Top](#table-of-contents)

---

## Enums P2:

- [Back to Top](#table-of-contents)

---

## Enums Behind the Scenes:

- [Back to Top](#table-of-contents)

---
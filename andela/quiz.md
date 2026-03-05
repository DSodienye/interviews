**Question**: Which statement about the `let` keyword is true?

**Answer**:
- The correct answer is: **C. It cannot be redeclared in the same scope.**
- `let` has block scope, not function scope (so A is incorrect).
- `let` can be used to declare variables, but not global variables in the same way as `var` (so B is misleading).
- `let` is hoisted, but not initialized, so accessing it before declaration throws an error (so D is misleading).
- The key property of `let` is that it cannot be redeclared in the same scope.

**Key Steps**:
- Understand the difference between `var`, `let`, and `const`.
- Remember that `let` is block-scoped and cannot be redeclared in the same block.

**Explanation**:
- `let` variables are block-scoped, meaning they are only accessible within the block they are defined.
- You cannot redeclare a `let` variable in the same scope; doing so will throw a syntax error.
- `let` is hoisted, but not initialized, so using it before declaration results in a ReferenceError.
- This makes `let` safer and more predictable than `var` for variable declarations.

---
**Question**: Which statement about the `this` keyword is true?

**Answer**:
- The correct answer is: **A. It can be changed using the bind method.**
- The value of `this` in JavaScript depends on how a function is called, not where it is defined or called.
- The `bind` method allows you to set the value of `this` explicitly for a function.
- The other options are incorrect because:
  - `this` does not always refer to the object where the function is defined (B is incorrect).
  - `this` does not always refer to the object where the function is called (C is incorrect).
  - `this` can be used outside of object methods, such as in global or function scope (D is incorrect).

**Key Steps**:
- Understand how `this` works in JavaScript.
- Know that `bind`, `call`, and `apply` can change the value of `this`.
- Recognize that `this` is dynamic and context-dependent.

**Explanation**:
- In JavaScript, `this` refers to the object that is executing the current function.
- The value of `this` can be set explicitly using `bind`, `call`, or `apply`.
- `bind` returns a new function with `this` set to the provided value.
- This is important for event handlers, callbacks, and methods where you want to control the context.
- Understanding `this` is crucial for writing predictable and bug-free JavaScript code.

---
**Question**: What is the result of the following code snippet?
```js
const x = 5;
const y = "10";
console.log(x + y);
```

**Answer**:
- When adding a number (`x`) and a string (`y`) in JavaScript, the number is converted to a string and concatenation occurs.
- So, `5 + "10"` becomes `"510"` (a string).

**Key Steps**:
- Identify the types of `x` (number) and `y` (string).
- Recognize that the `+` operator with a string operand results in string concatenation.
- The output will be the string `"510"`.

**Code**: 
```js
const x = 5; // x is a number
const y = "10"; // y is a string
console.log(x + y); // outputs "510" because number + string results in string concatenation
```

**Explanation**:
- In JavaScript, the `+` operator concatenates if either operand is a string.
- Here, `x` is `5` (number) and `y` is `"10"` (string).
- `5 + "10"` results in `"510"` (string).
- The correct answer is **C. "510"**.
- Time complexity is O(1) since it's a simple operation. Space complexity is also O(1).

---
**Question**: Which statement is true about prototype inheritance in JavaScript?

**Answer**:
- The correct answer is: **A. Every object has a prototype, except for the base object.**
- In JavaScript, all objects inherit from a prototype, except for the base object (`Object.prototype`), which has `null` as its prototype.
- Prototypes can be modified at runtime (B is also true), but A is the most fundamental and direct answer.
- Object properties are not stored in their prototype objects (C is incorrect).
- Prototypes form a chain (prototype chain), not a tree-like structure (D is incorrect).

**Key Steps**:
- Understand that prototype inheritance is based on a chain, not a tree.
- Know that every object (except the base object) has a prototype.
- Recognize that the prototype chain ends at `Object.prototype`, whose prototype is `null`.

**Explanation**:
- JavaScript uses prototype-based inheritance, where objects inherit properties and methods from their prototype.
- The prototype chain allows property and method lookup up the chain.
- The base object (`Object.prototype`) is the only object without a prototype.
- This is a core concept in JavaScript's inheritance model.

---
**Question**: Which of the following is a way to prevent modifications to an object in JavaScript?

**Answer**:
- The correct answer is: **B. Use the `freeze` method on the object.**
- `Object.freeze()` makes an object immutable: properties cannot be added, removed, or changed.
- `const` only prevents reassignment of the variable, not modification of the object itself.
- `Object.seal()` prevents adding or removing properties, but allows modification of existing properties.
- `Object.preventExtensions()` only prevents adding new properties, but existing properties can still be changed or removed.

**Key Steps**:
- Use `Object.freeze(obj)` to make an object fully immutable.
- Understand the differences between `freeze`, `seal`, and `preventExtensions`.

**Explanation**:
- `Object.freeze()` is the strictest: it prevents any changes to the object.
- `Object.seal()` allows changing existing properties but not adding/removing.
- `Object.preventExtensions()` only blocks adding new properties.
- `const` does not make the object immutable, just the variable binding.
- For full immutability, always use `Object.freeze()`.

---
**Question**: What is the output of the given JavaScript code snippet involving prototype inheritance and method calls?

**Answer**:
- The code creates an `Animal` constructor with a `walk` method on its prototype.
- `Dog` is a constructor that calls `Animal` to set the `name` property.
- `Dog.prototype` is set to inherit from `Animal.prototype`.
- `myDog` is created as a new `Dog` with the name `'Rover'`.
- Calling `myDog.walk()` will use the inherited `walk` method, and `this.name` will be `'Rover'`.

**Key Steps**:
- `myDog` is an instance of `Dog`, which inherits from `Animal`.
- The `name` property is set to `'Rover'` on `myDog`.
- `walk()` logs `${this.name} is walking.`
- So, the output is `"Rover is walking."`

**Code**: 
```js
function Animal(name) {
  this.name = name; // sets the name property
}

Animal.prototype.walk = function() {
  console.log(`${this.name} is walking.`); // logs the name property with "is walking."
};

function Dog(name) {
  Animal.call(this, name); // calls Animal constructor, sets this.name
}

Dog.prototype = Object.create(Animal.prototype); // sets up inheritance

const myDog = new Dog('Rover'); // creates a Dog with name 'Rover'
myDog.walk(); // calls walk, which logs "Rover is walking."
```

**Explanation**:
- `myDog` is an instance of `Dog`, which inherits from `Animal`.
- The `name` property is set to `'Rover'` via the `Animal` constructor.
- The `walk` method is inherited from `Animal.prototype`.
- When `myDog.walk()` is called, `this.name` refers to `'Rover'`.
- The output is: **"Rover is walking."** (Option D).
- Time complexity is O(1) for property access and method call.
- This demonstrates classical inheritance and prototype chaining in JavaScript.

---
**Question**: What is the output of the following JavaScript code snippet involving variable hoisting?

**Answer**:
- The code demonstrates variable hoisting with `var` inside a function.
- The inner `var a` declaration is hoisted to the top of the function, but its assignment (`a = 2`) is not.
- When `console.log(a)` runs, the local `a` exists but is `undefined` at that point.

**Key Steps**:
- `var a = 1;` declares and initializes `a` globally.
- Inside `foo()`, `var a` is hoisted, so within `foo`, `a` is local and initially `undefined`.
- `console.log(a);` prints `undefined` because the local `a` shadows the global `a`, but hasn't been assigned yet.
- After the log, `a` is set to `2`, but this does not affect the output.

**Code**: 
```js
var a = 1; // global variable a is set to 1

function foo() {
  console.log(a); // logs the local a, which is hoisted and undefined at this point
  var a = 2; // local variable a is declared and set to 2 after the log
}

foo(); // calls foo, output is undefined
```

**Explanation**:
- Variable declarations using `var` are hoisted to the top of their function scope.
- Only the declaration is hoisted, not the assignment.
- So, inside `foo`, `var a` is hoisted, making `a` local and initially `undefined`.
- The output is **`undefined`** (Option C).
- This is a common JavaScript interview question to test understanding of hoisting and scope.

---
**Question**: Which of the following statements about arrow functions is true?

**Answer**:
- The correct answer is: **D. They can have a variable number of arguments.**
- Arrow functions do NOT have their own `this` context (A is incorrect); they inherit `this` from their enclosing scope.
- Arrow functions CANNOT be used as constructors (B is incorrect).
- Arrow functions do NOT have their own `prototype` property (C is incorrect).
- Arrow functions CAN accept a variable number of arguments using rest parameters (`...args`), so D is correct.

**Key Steps**:
- Eliminate options based on arrow function characteristics:
  - No own `this`
  - Not usable as constructors
  - No `prototype` property
  - Can use rest parameters for variable arguments

**Explanation**:
- Arrow functions inherit `this` from their lexical scope.
- They cannot be used with `new` and do not have a `prototype`.
- You can define arrow functions with rest parameters to accept any number of arguments, e.g., `(...args) => {}`.
- This makes option D the only correct statement.

---
**Question**: What is the output of the following JavaScript code snippet when a method is detached from its object and called?

**Answer**:
- When you assign `const greet = person.greet;` and then call `greet()`, the function loses its context (`this` is no longer bound to `person`).
- In this case, `this` inside `greet` will be `undefined` (in strict mode) or the global object (in non-strict mode), but since there is no `name` or `age` property on `undefined` or the global object, both will be `undefined`.
- Therefore, the output will be:  
  **"Hi, my name is undefined and I'm undefined years old."** (Option B).

**Key Steps**:
- Detaching a method from its object loses the original `this` context.
- Calling the detached function results in `this` being `undefined` or the global object.
- Accessing `this.name` and `this.age` returns `undefined`.

**Code**: 
```js
const person = {
  name: 'John', // defines name property
  age: 30, // defines age property
  greet() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`); // logs name and age from this context
  }
};

const greet = person.greet; // detaches greet from person, loses context
greet(); // calls greet with undefined context, so this.name and this.age are undefined
```

**Explanation**:
- In JavaScript, when a method is called as a standalone function, `this` is not bound to the original object.
- As a result, `this.name` and `this.age` are `undefined`.
- The output is:  
  **"Hi, my name is undefined and I'm undefined years old."**
- This is a common pitfall with JavaScript's `this` binding and method detachment.

---
**Question**: Which of the following statements about closures in JavaScript is true?

**Answer**:
- The correct answer is: **A. They allow a function to access variables from its parent scope.**
- Closures are a fundamental concept in JavaScript that enable functions to remember and access variables from the scope in which they were created, even after that scope has finished executing.
- The other options are incorrect:
  - Closures do not require the `new` keyword.
  - Closures can be created with any function, not just arrow functions.
  - Closures are not limited to classes.

**Key Steps**:
- Understand that closures are created whenever a function is defined inside another function and accesses variables from the outer function.
- Recognize that closures are not tied to specific function types or class structures.

**Explanation**:
- Closures are used extensively in JavaScript for data privacy, callbacks, and functional programming patterns.
- Example:
  ```js
  function outer() {
    let count = 0; // variable in parent scope
    return function inner() {
      count++; // inner function accesses parent variable
      return count;
    }
  }
  const counter = outer();
  counter(); // 1
  counter(); // 2
  ```
- Here, `inner` forms a closure over `count`, allowing it to access and modify `count` even after `outer` has finished executing.

---
**Question**: What is the output of the Promise.race with one promise resolving after 1000ms and another rejecting after 500ms?

**Answer**:
- `Promise.race` returns the result of the first promise that settles (either resolves or rejects).
- `promise1` resolves after 1000ms with `'Promise 1'`.
- `promise2` rejects after 500ms with `'Promise 2 Error'`.
- Since `promise2` settles first (rejects after 500ms), the `.catch` block will run and log `'Promise 2 Error'`.

**Key Steps**:
- Identify which promise settles first: `promise2` (500ms, reject).
- `Promise.race` will use the result of `promise2`.
- The error will be caught and logged.

**Code**: 
```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1'); // resolves after 1000ms
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 Error'); // rejects after 500ms
  }, 500);
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result); // would log if a promise resolves first
}).catch((error) => {
  console.log(error); // logs if a promise rejects first
});
```

**Explanation**:
- `Promise.race` returns the result of the first settled promise.
- `promise2` rejects after 500ms, which is before `promise1` resolves.
- The `.catch` block logs `'Promise 2 Error'`.
- **Output:** `'Promise 2 Error'` (Option B).
- Time complexity is O(1) for promise creation, but the output depends on the fastest promise.

---
**Question**: What is the output of the code using `Promise.any` with one rejected and one resolved promise?

**Answer**:
- `Promise.any` returns the first fulfilled (resolved) promise, ignoring any rejected promises unless all are rejected.
- In this code, `promise1` is rejected and `promise2` is resolved with `'Promise 2'`.
- Therefore, the `.then` block will run and log `'Promise 2'`.

**Key Steps**:
- `Promise.any` checks all promises.
- Ignores rejections unless all promises reject.
- Returns the value of the first resolved promise.

**Code**: 
```js
const promise1 = Promise.reject('Promise 1 Error'); // promise1 is rejected
const promise2 = Promise.resolve('Promise 2'); // promise2 is resolved

Promise.any([promise1, promise2]).then((result) => {
  console.log(result); // logs the first resolved value, which is 'Promise 2'
}).catch((error) => {
  console.log(error); // only runs if all promises are rejected
});
```

**Explanation**:
- `Promise.any` resolves as soon as any promise resolves.
- Here, `promise2` resolves, so `'Promise 2'` is logged.
- The correct answer is **B. Promise 2**.
- The `.catch` block would only run if both promises were rejected.

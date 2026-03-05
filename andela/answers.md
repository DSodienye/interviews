## **1. What's your experience with Vue.js?**

**Answer:**
I've worked with Vue.js building **scalable SPA and SSR applications**, primarily using **Vue 3** via **Nuxt**, using TypeScript, State managements, Vue Router, and REST integrations.
I've implemented reusable components, composables, route guards, form handling, state management, and optimized performance.
Also built some projects like Customer portals, Admin panels, Consumers app, Business website, and in more particular ValueJet's passengers portal and Seat selection module for the business.

---

## **2. What's your experience with Agile?**

**Answer:**
Worked in Agile teams using **Scrum**:

* Carry out sprints
* Daily standups
* Jira task boards
* Project planning, reviews, issue tracking
* Close collaboration with product owners
  Focused on continuous delivery and quick iterations.

**Steps of Agile**
Planning - Tasks Creation - Task Assignment - Development - Review - Deployment

---

## **3. What are mixins?**

**Answer:**
Mixins are inheritable components or pages in the vue system, let you **reuse logic** across components by injecting properties, methods, or lifecycle hooks in the components that needs it.
Example: Component named, Animal can be inherited by Human or Dog, with the logic/function of walk, eat, sleep. data props of eyes, limbs. etc

```js
// mixin.js
export default {
  data: () => ({ count: 0 }),
  methods: { inc() { this.count++ } }
}
```

```js
// component
mixins: [mixin]
```

---

## **4. Pros and cons of mixins**

**Pros:**

* Reusability of code
* Prevent repetition of code
* Quick to plug into multiple components

**Cons:**

* Namespace conflicts
* Harder to trace where properties come from
* Data conflicts

---

## **5. What are composables?**

**Answer:**
A composable is a **reusable function** that uses the Composition API to share logic.

```js
// useCounter.js
export function useCounter() {
  const count = ref(0)
  const inc = () => count.value++
  return { count, inc }
}
```

They replace mixins.

---

## **6. Difference between composable and utility function**

**Answer:**

* **Composable:**

  * Uses reactive APIs (`ref`, `computed`, `watch`)
  * Returns reactive state
  * Works inside Vue reactivity

* **Utility function:**

  * Pure JS function
  * No reactivity
  * Used for formatting, calculations, helpers

Example utility:

```js
export const formatName = n => n.toUpperCase()
```

---

## **7. What are directives?**

**Answer:**
Directives are special attributes that give instructions to the DOM.

Built-in examples:

* `v-if`
* `v-for`
* `v-model`
* `v-show`

Custom directive:

```js
app.directive('focus', {
  mounted(el) { el.focus() }
})
```

---

## **8. Difference between `ref` and `reactive`**

**Answer:**

* `ref()` → for primitives data-type ex: number, string, boolean; exposes `.value`
* `reactive()` → for non-primitive data-type ex: objects/arrays; no `.value`; deeply reactive

```js
const count = ref(0)
const user = reactive({ name: 'Dan' })
```

---

## **9. Difference between computed and watchers**

**Answer:**

* **computed** → returns a derived value; cached
* **watch** → runs side effects when something changes in it (API calls, logging)

Example computed:

```js
const fullName = computed(() => first.value + last.value)
```

Example watcher:

```js
watch(searchTerm, v => fetchUsers(v))
```

---

## **10. What are modifiers and v-model modifiers?**

### **Modifiers:**

Add special behavior to directives.

Example:

```html
<input @click.stop="doSomething" />
```

### **v-model modifiers:**

these are special modifier dedicate to the model directive, aka. the 2-way bind, it is use to Transform input before saving it.

```html
<input v-model.trim="name" />   <!-- trims whitespace -->
<input v-model.number="age" />  <!-- converts to number -->
```

---

## **11. Where to use a state manager?**

**Answer:**
Use a state manager like Pinia or Vuex when:

* Multiple components need the same state
* State needs to persist (cart, auth)
* App logic becomes large
* Avoiding prop drilling

Avoid it for small local state inside a single component.

---

## **12. Difference between PUT and PATCH**

**PUT:**

* used for need to carry out Full update of the resource
* Client sends entire object
* Replaces old record

**PATCH:**

* Partial update
* Client sends only changed fields

---

## **13. Explain HTTP Status Codes**

* **200 OK** - Request successful, response has data (GET)
* **201 Created** - successfully led to the creation of the resource (POST)
* **204 No Content** - Successful but no response body (DELETE)
* **400 Bad Request** - Client error (invalid input)
* **401 Unauthorized** - Authentication required or failed
* **403 Forbidden** - Server understands the request but refuses to authorize it

---

## **14. Difference between sessionStorage and localStorage**

* **localStorage:**

  * Persistent (until cleared)
  * Shared across tabs

* **sessionStorage:**

  * Clears when tab closes
  * Not shared across tabs

Both store strings only.

---

## **15. Explain `this` in different function scopes**

* **Normal function:** `this` depends on how the function is called
* **Arrow function:** `this` is lexical (inherits from parent scope)
* **Class methods:** `this` refers to the class instance
* **Vue Options API:** `this` refers to the component instance
* **Vue Composition API:** No `this` in `setup()`

Example:

```js
const obj = {
  a: 1,
  getA() { return this.a }  // 1
}

const arrow = () => this.a // depends on outer scope
```

---

## **16. What is Closure, Pure function, Recursive function, Hoisting?**

### **Closure**

A function that remembers variables from its outer scope.

```js
function outer() {
  let x = 10
  return () => x + 1  // closure
}
```

### **Pure function**

Always returns the same result for the same input
Does not modify anything outside itself (no side effects)

```js
const add = (a,b) => a + b
```

### **Recursive function**

Calls itself.

```js
function factorial(n){
  return n <= 1 ? 1 : n * factorial(n-1)
}
```

### **Hoisting**
Hoisting means JavaScript moves variable and function declarations to the top of their scope before execution.

```js
console.log(x)
var x = 5
```
Internally JavaScript sees it as:
```js
var x
console.log(x) // undefined
x = 5
```

---

## **17. Difference between primitives and non-primitives**

### **Primitives (immutable, stored by value):**

* string, number, boolean, null, undefined, bigint, symbol

### **Non-primitives (mutable, stored by reference):**

* Objects, Arrays, Functions, Maps, Sets

---

## **18. Difference between Set and Map and Object**

### **Set:**

* Stores unique values
* No key/value pairs
* Ideal for uniqueness filtering

```js
new Set([1,1,2]) // {1,2}
```

### **Map:**

* Stores key → value pairs
* Keys can be any type
* In-Built methods like (get, set, has)
* Insertion is Ordered

```js
const map = new Map()
map.set('name', 'Victor')
```

### **Object:**

* Stores key → value pairs
* Keys are only String/Symbol
* Better for lookups
* Order is not determined

```js
const obj = new Object()
obj.name = 'Victor'
```

Here are **concise, well-explained, interview-ready answers** for the next questions:

---

## **19. Difference between `var`, `let`, and `const` (and their scopes)**

### **`var`**

* **Function-scoped** (visible inside the entire function)
* Not block-scoped (ignores `{ }`)
* Gets **hoisted** and initialized to `undefined`
* Can be **redeclared**

```js
if (true) {
  var x = 10
}
console.log(x) // 10 (leaked outside block)
```

---

### **`let`**

* **Block-scoped** (limited to `{ }`)
* Hoisted but **not initialized** (Temporal Dead Zone)
* Cannot be redeclared in the same scope
* Reassignable

```js
if (true) {
  let y = 20
}
console.log(y) // ReferenceError
```

---

### **`const`**

* **Block-scoped**
* Must be initialized once
* Cannot be reassigned
  (**but object properties can change**)

```js
const user = { name: "Dan" }
user.name = "Victor" // allowed
```

---

### **Summary Table**

| Feature       | `var`           | `let`     | `const`   |
| ------------- | ----------------- | ----------- | ----------- |
| Scope         | function          | block       | block       |
| Hoisting      | yes (initialized) | yes (TDZ)   | yes (TDZ)   |
| Redeclaration | allowed           | not allowed | not allowed |
| Reassignment  | allowed           | allowed     | not allowed |

---

## **20. Explain the various Vue lifecycle hooks (Vue 3)**

### Hooks inside `setup()`:

### **onBeforeMount**

* Called before the component is added to the DOM
  Use: last-minute data prep.

### **onMounted**

* Component is now in the DOM
  Use: API calls, DOM access.

```js
onMounted(() => fetchUsers())
```

---

### **onBeforeUpdate**

* Called before virtual DOM re-renders
  Use: read old DOM values before update.

### **onUpdated**

* DOM updated
  Use: actions after re-render.

---

### **onBeforeUnmount**

* Before a component is destroyed
  Use: cleanup, timers, listeners.

### **onUnmounted**

* After destruction
  Use: final cleanup.

---

### **onErrorCaptured**

* Catches errors in child components
  Use: error reporting/logging.

---

### Diagram (ordered)

```
setup()
onBeforeMount
onMounted
onBeforeUpdate
onUpdated
onBeforeUnmount
onUnmounted
```

---

## **21 What can cause a data leak in a Vue project?**

### **i. Not cleaning up side effects**

Leaving listeners, intervals, or subscriptions running after component unmount.

```js
onMounted(() => {
  window.addEventListener('resize', handler)
})

onUnmounted(() => {
  window.removeEventListener('resize', handler)
})
```

If not cleaned — ❗ memory leak.

---

### **ii. Long-lived reactive references**

Storing large objects in global reactive stores or `ref` that never get cleared.

Example:
Keeping huge API data inside Pinia even when not needed.

---

### **iii. Using watchers incorrectly**

Creating watchers that run indefinitely or watch deep objects without cleanup.

```js
watch(() => bigObject, fn, { deep: true }) // heavy
```

---

### **iv. Large DOM updates or uncontrolled lists**

Rendering thousands of items without virtualization.

---

### **v. Circular references in data**

Vue's reactivity wraps objects; circular nested objects can grow memory usage.

---

### **vi. Event bus misuse (Vue 2)**

Listeners never removed → memory leak.

---

### **vii. Unclosed WebSockets / API streams**

Forgetting to close:

* WebSocket connections
* SSE streams
* Firebase listeners

---

### **viii. Global variables inside composables**

If a composable stores values outside `setup()`, the data stays in memory for the application's lifetime.

## **22 Difference between `justify-item` and `align-item`

**justify-items:** Aligns items along the inline axis (horizontal).	
**align-items:** Aligns items along the block axis (vertical).

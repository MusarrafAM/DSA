//! Prototype & Prototypal Inheritance in JavaScript

// 1. What is Prototypal Inheritance?
// - Objects in JavaScript inherit properties and methods from other objects.
// - Each object has a hidden internal property `[[Prototype]]` (accessible via `__proto__`).
// - This prototype object contains shared methods and properties.

// 2. Prototype Chain
// - When accessing a property, JavaScript:
//   1. First looks for it on the object itself.
//   2. If not found, it checks the object's prototype.
//   3. Continues up the prototype chain until reaching `Object.prototype`.
//   4. If still not found, returns `undefined`.

// Example
// let person = { name: "Musarraf" };
// console.log(person.toString()); // Exists in Object.prototype
// - `toString()` is **not in `person`**, but it exists in `Object.prototype`.

// 3. Arrays and Prototypes
// - Arrays are **objects** and inherit from `Array.prototype`.
// - Methods like `.map()`, `.filter()`, `.reduce()` exist in `Array.prototype`, not on individual arrays.

// Example
// let arr = ["Muhammed", "Musarraf", "Adam"];
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(Array.prototype.__proto__ === Object.prototype); // true

// arr.map(name => console.log(name)); // Works because `map()` is in Array.prototype

// 4. Objects and Prototypes
// - Objects **inherit** from `Object.prototype`.
// - Methods like `.hasOwnProperty()` and `.toString()` are from `Object.prototype`.

// Example
// let obj = { name: "Musarraf", city: "Kalmunai" };

// console.log(obj.__proto__ === Object.prototype); // true
// console.log(obj.hasOwnProperty("name")); // true

// 5. Creating Objects with `Object.create()`
// - `Object.create(proto)` creates a new object with a given prototype.

// Example
// let animal = { eats: true };
// let dog = Object.create(animal); // dog inherits from animal

// console.log(dog.eats); // true (inherited)
// console.log(dog.__proto__ === animal); // true

//! Important
// 6. Constructor Functions and Prototypes
// - Functions used as **constructors** (`new`) have a `prototype` property for shared methods.

// Example
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.name}`);
// };

// let user = new Person("Alice");
// user.greet(); // Hello, my name is Alice

// console.log(user.__proto__ === Person.prototype); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true

// 7. Class Syntax (ES6) & Prototypes
// - JavaScript **classes** are syntactic sugar over prototypal inheritance.

// Example
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// let user = new Person("Musarraf");
// user.greet(); // Hello, I'm Musarraf
// console.log(user.__proto__ === Person.prototype); // true

// 8. Overriding Inherited Properties
// - Child objects can override inherited properties.

// Example
// let car = { wheels: 4, brand: "Toyota" };
// let myCar = Object.create(car);
// myCar.brand = "Honda"; // Overrides inherited property

// console.log(myCar.brand); // Honda (own property)
// console.log(myCar.wheels); // 4 (inherited)

// 9. Checking Prototype Inheritance
// - Use `Object.getPrototypeOf(obj)` or `instanceof` to check inheritance.

// Example
// console.log(Object.getPrototypeOf(myCar) === car); // true
// console.log(myCar instanceof Object); // true

// ### **Key Takeaways**
// ✅ **Prototype Chain:** Objects inherit properties/methods from their prototype.
// ✅ **Inheritance Mechanism:** Uses `Object.create()`, constructor functions, or `class`.
// ✅ **Efficient Memory Usage:** Shared methods exist in the prototype, not each object.
// ✅ **Method Lookup:** JS searches for a property in the object, then up the prototype chain.
// ✅ **Overriding:** Child objects can override properties/methods from their prototype.

// This covers everything you need for **Prototype & Prototypal Inheritance** in JavaScript! 🚀🔥

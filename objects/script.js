"use strict";

// // creating a object
// let user = {
//   name: "John",
//   surname: "Smith",
// };

// // changing the value of a property
// user.name = "Pete";

// // deleting a the property
// delete user.name;

// let test = {};

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0 ? true : false;
// }

// alert(isEmpty(user));

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   for (key in salaries) {
//     sum += salaries[key];
//   }
//   return sum;
// }

// alert(sumSalaries(salaries));

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumericValue(obj, num) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= num;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumericValue(menu, 3));

// this
/* let calculator = {
  read() {
    this.a = +prompt("a ?", 0);
    this.b = +prompt("b ?", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
 */

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();

/***
 * Constructor Functions
 * ---------------------
 * They are just regular functions which are named starting with a capital letter
 * They are executed with the "new" keyword to create instances of objects
 * Whenever a function is executed with the "new" keyword it creates a object
 * Thereby any thing defined with the "this" refernces to that object
 * By default it returns the object itself
 */

// Defining a constructor function
function User(name, age) {
  this.name = name;
  this.age = age;
}

/**
 *
 * we can use the "new.target" function to check whether the constructor was
 * called using the "new" keyword or not, returns undefined if not and
 * refernce to object if yes.
 */

function Employees(name, id) {
  if (!new.target) {
    return new Employees(name, id);
  }

  this.name = name;
  this.id = id;
}

/**
 * Constructors usually dont have a return type, so the expected behavior is as follows
 * - if the return is another object, then returns that object
 * - for anything else, ignores it and returns the object itself
 */
// Object return
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- returns this object
}

alert(new BigUser().name); // Godzilla, got that object

// Empty return
function SmallUser() {
  this.name = "John";

  return; // <-- returns this
}

alert(new SmallUser().name); // John

/**
 * Constructor are also allowed to have methods, which can be defined
 * in the constructor itself or in the prototype of the constructor
 */
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    alert(`My name is ${this.name}`);
  };
}

/**
 * Create new Calculator
 * importance: 5
 * Create a constructor function Calculator that creates objects with 3 methods:
 * read() prompts for two values and saves them as object properties with names a and b respectively.
 * sum() returns the sum of these properties.
 * mul() returns the multiplication product of these properties.
 */

function Calculator() {
  this.read = function () {
    this.a = +prompt("a ?", 0);
    this.b = +prompt("b ?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

/* Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.
 */

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    return (this.value += +prompt("value ?", 0));
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);

/**
 * Optional Chaining ?.
 * --------------------
 * Optional chaining stops executing if the property doesnt exist, just returns undefined if the
 * value doesnt exist and the value if it does.
 */
let user = {};

alert(user?.address?.streetname); // returns undefined as the property address doesnt exist

/**
 * other variants of optional chaining include
 * ?.()
 * ?.[]
 */

// checking for function is present
let userAdmin = {
  admin() {
    alert("This is the Admin account");
  },
};

let userGuest = {};

userAdmin.admin?.(); // Checks whether such a function exists
userGuest.admin?.(); // Returns undefined as such a function doesnt exist

// checking whether the key is present
let key = "firstName";

let user1 = {
  firstName: "Akshay",
};

let user2 = null;

alert(user1?.[key]); // Akshay
alert(user2?.[key]); // undefined

/**
 * Symbol type
 * --------------------
 * Symbol is a primitive data type that is unique and immutable. It can be used as a key for object properties.
 * Each time you create a symbol, even with the same description, it will be unique.
 * Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object,
 * and which are hidden from any mechanisms other code will typically use to access the object.
 *
 * Symbols are always going to be unique, even if the have the same name
 */

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

/**
 * This can be rather helpful when we try to change the value of some property or add a new one,
 * like if it has been defined in some other code block this might lead to overwritting the property
 * whereas with symbols they will always be unique
 *
 * in order to use them as a object literal we need to access the value they hold, hence []
 */
let user = {
  [id1]: "123",
};

/**
 * Symbol properties are usually skipped by for in and Object.keys, but Object.assign can copy them
 * This is to hide the symbol values so it doesnt interfere or alter other values
 */
let user = {
  // belongs to another code
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // we can access the data using the symbol as the key

/**
 * Global Symbol registry
 * --------------------
 * The global symbol registry is a place where symbols can be stored and accessed by name.
 * So basic idea here is that we need symbols that we can access again and again
 * So we can create symbol value store it in a register accessed by a unique id
 * then using this id we can access it using the id value
 */
let id1 = Symbol.for("id");

let id2 = Symbol.for("id");

alert(id1 == id2); // true

/**
 * we can use the function Symbol.keyFor(sym) to return the symbol name
 */

alert(Symbol.keyFor(id1));

/**
 * System Symbols
 * --------------
 * There exist many “system” symbols that JavaScript uses internally,
 * and we can use them to fine-tune various aspects of our objects.
 * For Example
 * - Symbol.hasInstance
 * - Symbol.isConcatSpreadable
 * - Symbol.iterator
 * - Symbol.toPrimitive
 */

/**
 * Object to primitive conversion
 * ------------------------------
 * When any operation is performed on an object it is auto converted into a primitive and
 * the operations are performed. So the result is never going to be another object
 * As js gets confused on what to do when an object is encountered with an operation
 * So it tries to find hints to convert the object to primitives based on the properties
 * or values inside the object that would better fit the operation it has to perform
 *
 * There are basically only 3 types of hints
 * - String (converts to string based on string based operations)
 * - Number (converts to number based on operation)
 * - Default (this is the last option vailable if none of the above seem to work)
 *
 *
 * We can use [Symbol.toPrimitive](hint) to describe the primitive we would like to return
 */
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**
 * If the engine cannot find any [Symbol.toPrimitive](hint) it moves on to find any defintion
 * inside the toString() or valueOf() functions
 */

let user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

// Task to create a player object that handles primitive conversions
let player = {
  name: "Shadow",
  level: 12,
  coins: 800,

  toString() {
    return `${this.name} - Level ${this.level}`;
  },

  valueOf() {
    return coins;
  },
};

let character = {
  name: "Obsidian",
  level: 20,
  coins: 2000,

  [Symbol.toPrimitive](hint) {
    return hint === "String" ? `${this.name} has ${coins} coins` : this.coins;
  },
};

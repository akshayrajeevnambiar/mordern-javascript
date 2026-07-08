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

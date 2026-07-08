"use strict";
alert("I'm javascript");

// variables
let admin, name;

name = "John";
admin = name;

alert(admin);

const planetName = "Earth";
const currentVisitorName = "Akshay";

// interactions
alert("This is an alert box");
let result = prompt("What is your name", "John Doe");
let choice = confirm("Is the name correct ?");

alert(result);

// type conversions
let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);

let a = "5";
let b = "6";
alert(a + b); // 56
alert(+a + +b); // 11

// conditionals
user_choice = prompt("Please enter a number: ");
alert(Number(user_choice) > 0 ? "1" : Number(user_choice) < 0 ? "-1" : "0");

// Logical Operators
role = prompt("Please enter your role: ");
if (role == "Cancelled") {
  alert("Cancelled");
} else if (role == "Admin") {
  password = prompt("Please password: ");
} else {
  alert("I dont know yet");
}

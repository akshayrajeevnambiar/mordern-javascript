/**
 * Methods of primitives
 * ---------------------
 * there are essentially 7 primitive types,
 * - number -> Number
 * - string -> String
 * - boolean -> Boolean
 * - bigInt -> BigInt
 * - symbol -> Symbol
 * - null
 * - undefined
 * JS actually provides us methods to work with primitives, they are essentailly
 * considered as objects by using an Onject wrapper class around them, having the method
 * then destroying the class after the operation intended was completed
 */

/**
 * Numbers
 * -------
 * shorthands to writting big numbers
 * 1e-3 === 1 / 1000;
 * 1e3 === 1 * 1000;
 * Binary, hex and ocatal representations
 * alert( 0xff ); // hex form of 255
 * let a = 0b11111111; // binary form of 255
 * let b = 0o377; // octal form of 255
 *
 * toString method can be used to convert numbers into different bases like
 */

let num = 255;
alert(num.toString(16)); //ff
alert(num.toString(2)); //11111111
alert((123456).toString(36)); // 2n9c (the max digit latin also included)

/**
 * in the above example we use ".." to indicate the direct use of a method
 * on the number. Whereas if we use "." JS might think its a decimal point
 */

/**
 * Rounding
 * --------
 * - Math.floor -> Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
 * - Math.ceil -> Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
 * - Math.round -> Rounds to the nearest integer, middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.
 * - Math.trunc -> Removes anything after the decimal point without rounding
 * - Math.toFixed(n) -> rounds to specific decimal point
 */

/**
 * Impresise Calcualations
 * -----------------------
 * Basically theres 64 bit to store a number, 52 of which store the number,
 * 11 of which store the postion of the decimal point, and 1 to store the sign.
 * Hence when there is a number that takes up more than this space, meaning
 * overflows the 64 bit space, the number is automatically considered as "Infinity"
 */

let largeNumber = 1e500; // Infininty
alert(largeNumber);

/**
 * some other popular functioins include
 * - isNaN(n) -> checks for NaN conditions
 * - isFinite(n) -> checks whether  regular number of infinite
 * There are even stricter version of this such as the
 * - Number.isNaN(n)
 * - Number.isFinite(n)
 */
num = prompt("Enter a number to check");
alert(isFinite(num));

/**
 * There is another special method to compare objects, much more reliable one
 * Object.is(a, b) -> compares two object for equality just like ===
 */
alert(NaN === NaN); // false (checks for the equality based on rules)
alert(Object.is(NaN, NaN)); // true (checks if the underlying objects are equal)

console.log(0 === -0);
console.log(Object.is(0, -0));

/**
 * ParseInt and ParseFloat
 * -----------------------
 * Even though its true we can use Number of '+' to convert to number
 * they fail when the string contains things like "100px" and return NaN
 * This is where parseInt helps, they extract the number value from it
 * wherever possible. Incase of an error the number read so far is returned
 * So usually they read from left to right which means if they encounter a
 * letter first they'll return NaN
 */

console.log(Number("100px")); // NaN
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.34em")); // 12.34
console.log(parseInt("a123")); // NaN

/**
 * the parseInt also has a second argument radix theat basically allows to
 * set what base do you want the number to be read
 */
console.log(parseInt("0xff", 16)); // 255

/**
 * Some of the other prominent math fucntions are follows
 */
console.log(Math.random()); // returns a number between 0 and 1
console.log(Math.max(1, 2, 4)); // returns max number
console.log(Math.min(1, 2, 4)); // returns the min number
console.log(Math.pow(2, 3)); // returns 2^3

// Task 1: Create a script that prompts the visitor to enter two numbers and then shows their sum.
function getSum(num1, num2) {
  return num1 + num2;
}

let a = parseFloat(prompt("a ?"));
let b = parseFloat(prompt("b ?"));

if (!(isNaN(a) || isNaN(b))) {
  console.log(getSum(a, b));
}

// Task 2: Create a function readNumber which prompts for a number until the visitor
// enters a valid numeric value.
function readNumber() {
  let num = 0;
  do {
    num = +prompt("Enter a Number");
    console.log(num);
  } while (isNaN(num));
}

readNumber();

// Task 3: Write the function random(min, max) to generate a random floating-point
// number from min to max (not including max).

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random(5, 10));

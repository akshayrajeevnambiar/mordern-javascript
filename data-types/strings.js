/**
 * Strings
 * --------
 * The following are some of the most used methods in strings
 */
console.log("Akshay".length); // returns the length of the string
/**
 * We can even use [pos] with positive and negetive values to access characters
 * Strings are immutable
 */

console.log("Akshay"[5]); // y
console.log("Rajeev"[-1]); // undefined
console.log("Rajeev".at(-1)); // v

let name = "Akshay";
name[3] = "l"; // Error: Strings are immutable

console.log("Akshay".toLowerCase()); //akshay

/**
 * Searching for a substring
 * --------------------------
 * - str.indexOf(substr, pos)
 *      searches for a given substring returns the position of its first occurance
 *      -1 if not found, the 'pos' is the starting index of the search. If its called again
 *      finds the next occurance
 * - str.lastIndexOf(substr, pos)
 *      Similar to index of but returns the last index of the substring occurance
 * - str.includes(substr, pos)
 *      returns true or false depending on the presence of the substring,
 *      pos defines the starting point of the search
 * - str.startsWith(substr)
 *      returns true if starts with substr else false
 * - str.endsWith(substr)
 *      returns true if ends with substr else false
 *
 */

console.log(name.indexOf("shay")); // 2
console.log(name.lastIndexOf("aks")); // -1
console.log(name.includes("aks")); // false
console.log(name.startsWith("Aks")); // true
console.log(name.endsWith("shay")); // true

/**
 * Getting a substring
 * -------------------
 * There are 3 methods to get a substring
 * - str.slice(start [, end])
 *      gets subtring from the start index to end (not including it)
 *      allows for negetive index
 * - str.substring(start [, end])
 *      same as slice, but if the start is greater than the end then swaps them
 *      doesnt allow for negetive index
 * - str.substr(start, length of desired characters)
 */

console.log(`String slice: ${name.slice(2)}`); //shay
console.log(`String substring: ${name.substring(4, 1)}`); //ksha
console.log(`String substr: ${name.substr(1, 4)}`); //ksh

/**
 * Comparing Strings
 * -----------------
 * - str.codePointAt(pos)
 *      returns the code value of a character at pos in the string
 * - String.fromCodePoint(code)
 *      returns the character based on the numeric code
 * - str1.localCompare(str2)
 *      The call str.localeCompare(str2) returns an integer indicating whether str is less,
 *      equal or greater than str2 according to the language rules:
 *          - Returns a negative number if str is less than str2.
 *          - Returns a positive number if str is greater than str2.
 *          - Returns 0 if they are equivalent.
 */

console.log("z".codePointAt(0)); // 122
console.log(String.fromCodePoint(122)); // z
console.log("Österreich".localeCompare("Zealand")); // -1

// Task 1: Write a function ucFirst(str) that returns the
// string str with the uppercased first character
function ucFirstCharacter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirstCharacter("akshay"));

// Task 2: Write a function checkSpam(str) that returns true if
// str contains ‘viagra’ or ‘XXX’, otherwise false.
function checkSpam(str) {
  return (
    str.toLowerCase().includes("viagara") || str.toLowerCase().includes("xxx")
  );
}

console.log(checkSpam("Viagara Products for sale")); // true
console.log(checkSpam("Cars extended warranty")); // false

// Task 3: Create a function truncate(str, maxlength) that checks the length of the
// str and, if it exceeds maxlength – replaces the end of str with the ellipsis
// character "…", to make its length equal to maxlength.
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + "…";
}

console.log(
  truncate("What I'd like to tell on this topic is:", 20) ==
    "What I'd like to te…",
);

// Task 4: Create a function extractCurrencyValue(str) that would extract the
// numeric value from such string and return it.
function extractCurrencyValue(str) {
  return +str.slice(1);
}

console.log(extractCurrencyValue("$120") === 120);

/**CHALLENGE 1: Word Analyser **/
/**
 * Create a function that returns an object like the following
 *    {
        original: "JavaScript",
        lowercase: "javascript",
        uppercase: "JAVASCRIPT",
        length: 10,
        firstCharacter: "J",
        lastCharacter: "t",
        startsWithCapital: true,
        containsScript: true
      }
 */
function analyzeWord(word) {
  return {
    original: word,
    lowerCase: word.lowerCase(),
    uppercase: word.toUpperCase(),
    length: word.length,
    firstCharacter: word[0],
    lastCharacter: word[word.length - 1],
    startsWithCapital: word[0] === word[0].toUpperCase(),
    containsScript: word.toLowerCase().includes("script"),
  };
}

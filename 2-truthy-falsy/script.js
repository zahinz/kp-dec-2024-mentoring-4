console.log("Lesson 2 - Truthy & Falsy");

//  Boolean - True or False, 1 or 0

// Boolean
let yes = true;
let no = false;

// console.log(Boolean(yes)); //  True is a truthy value
// console.log(Boolean(no)); //  False is a falsy value

// String
let firstName = "zahin";
let lastName = ""; //empty string
console.log("firstName", Boolean(firstName)); //  firstName is a truthy value
console.log("lastName", Boolean(lastName)); //  lastName is a falsy value

// number
let number = 123;
let zero = 0;
console.log("number", Boolean(number)); //  number is a truthy value
console.log("zero", Boolean(zero)); //  0 is a falsy value

// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

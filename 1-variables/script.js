console.log("Lesson no 1 - Variable");

// container - letak barang dalam tu
// container warna kuning, and kita kucing dalam tu. container kuning = kucing
// naming convention for variable -> camelCase
// setiap variable ada value

var yellowContainer = "kucing";
// console.log(yellowContainer);
var firstName = "zahin";

// modern way utk variable
let lastName = "zahin";
// console.log(lastName);
const pi = 3.141592653589793238462643383279502884197;
// console.log(pi);

// REASSIGMENT
// only for var and let
yellowContainer = "harimau";
// console.log(yellowContainer);
lastName = "siddiq";
// console.log(lastName);

// VALUE
// Data type
//  1. string
//  2. number
//  3. boolean
//  4. undefined
//  5. null
//  6. object

console.log(typeof yellowContainer);
console.log(typeof firstName);
console.log(typeof pi);

let num1 = "1";
let num2 = 1;
console.log(typeof num1, typeof num2);
// concatenation = string + number
let fullName = firstName + " " + lastName;
let total = num1 + num2;
console.log(total);
console.log(fullName);

let num3 = 2;
let num4 = 2;
// operation
let total2 = num3 + num4;
console.log(typeof num3, typeof num4);
console.log(total2);

let isAtifHasGirlfriend = false;
console.log(typeof isAtifHasGirlfriend);

let atifGirlfriend = undefined;
console.log(typeof atifGirlfriend);

let animals = ["cat", "tiger", "lion"];
console.log(animals);
console.log(typeof animals);

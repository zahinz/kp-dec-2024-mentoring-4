console.log("Lesson 3 - Condition");

("if else");

console.log(Boolean(""));
if ("") {
  // truthy statement
  console.log("yes its true");
} else {
  // falsy statement
  console.log("no its false");
}

// COMPARISON OPERATORS
// ===
// !==
// >
// <
// >=
// <=

let num1 = 1;
let num2 = 2;
let num3 = "1";

console.log("equal", num1 == num3);
console.log("scrict equal", num1 === num3);
console.log("greater than", num1 > num2);
console.log("less than", num1 < num2);

const drivingAge = 18;
let age = 18;
if (age >= 18) {
  console.log("you are eligible to drive");
} else {
  console.log("you cannot drive");
}

// bmi calculator - underweight, normal, overweight
// bmi = weight (kg) / (    height (m)^2)

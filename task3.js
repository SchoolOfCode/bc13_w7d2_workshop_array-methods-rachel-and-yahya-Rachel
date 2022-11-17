let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let numOne = 3;
let numTwo = 5;
let numThree = 60;
let numFour = 90;

// checks whether an element is multiple of above variables
const multiple = (element) =>
  element % numOne === 0 ||
  element % numTwo === 0 ||
  element % numThree === 0 ||
  element % numFour === 0;

console.log(someNumbers.some(even));
// expected output: true

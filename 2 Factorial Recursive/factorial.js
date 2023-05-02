/*
Write a function that returns the factorial of a number.
Calling factorial(4) should return 24.
*/

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720

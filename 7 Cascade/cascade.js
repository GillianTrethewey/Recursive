/*

Write a function cascade that takes a positive integer and 
prints a cascade of this integer. 
Hint - this very challenging problem can be solved with and without string manipulation!

cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345
*/

function cascade(s) {
  s = s.toString();
  console.log(s);
  if (s.length === 1) return;
  cascade(s.slice(0, -1));
  console.log(s);
}

cascade(111);
cascade(12345);

function cascade(number) {
  if (number > 9) {
    let newNumber = Math.floor(number / 10);
    console.log(number);
    cascade(newNumber);
  }
  console.log(number);
}

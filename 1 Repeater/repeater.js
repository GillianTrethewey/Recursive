/*
Write a function that takes an input character and returns that character repeated 5 times using recursion. 
For example, if the input is 'g', then the output should be 'ggggg'.
*/

function repeater(char) {
  if (char.length === 5) return char;
  char += char[0];
  return repeater(char);
}

console.log(repeater("g"));
console.log(repeater("j"));

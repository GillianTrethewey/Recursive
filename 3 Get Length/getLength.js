/*
Get the length of an array using recursion without accessing its length property.
*/

function getLength(array, index) {
  index = index || 0;

  if (array[index + 1]) {
    return getLength(array, index + 1);
  } else if (index === 0) {
    return 0;
  } else {
    return index + 1;
  }
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0

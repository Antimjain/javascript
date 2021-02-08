// Write the program using fatarrow function?
var a = [1, 2, 3, 4];
function sumUsingFunction(acc, value) {
  return acc + value;
}
var sumOfArrayUsingFunc = a.reduce(sumUsingFunc);
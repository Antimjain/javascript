// Doesn't modify the original array(immutable
// Returns the subset of original array
// Used to pick the elements from array

let arr = [1,2,3,4,5,6]
console.log(arr.slice(0));     //[1,2,3,4,5,6]
console.log(arr.slice(1));     //[ 2, 3, 4, 5, 6 ]
console.log(arr.slice(2,4));   //[3,4]
console.log(arr.slice(4,6));   //[ 5, 6 ]
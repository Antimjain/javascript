// How do you sort elements in an array
// How do you reversing an array
// How do you find min and max value in an array
// How do you compare scalar arrays
// array include
// How do you remove falsy values from an array
// How do you get unique values of an array

// Write a function that performs binary search on a sorted array.
function binarySearch(arr,value,startPos,endPos){
  if(startPos > endPos) return -1;

  let middleIndex = Math.floor(startPos+endPos)/2;

  if(arr[middleIndex] === value) return middleIndex;

  else if(arr[middleIndex > value]){
    return binarySearch(arr,value,startPos,middleIndex-1);
  }
  else{
    return binarySearch(arr,value,middleIndex+1,endPos);
  }
}   

// What is the easiest way to convert an array to an object
const arr = []
const obj = {...arr}


// How do you create an array with some data
var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]

var marks = [50, 20, 70, 60, 45, 30];
 function findMin(arr) {
   var length = arr.length
   var min = Infinity;
   while (length--) {
     if (arr[length] < min) {
       min = arr[len];
     }
   }
   return min;
 }

 function findMax(arr) {
   var length = arr.length
   var max = -Infinity;
   while (len--) {
     if (arr[length] > max) {
       max = arr[length];
     }
   }
   return max;
 }

 console.log(findMin(marks));
 console.log(findMax(marks));









 function rotateRight(arr,rotations){
  if(rotations == 0) return arr;
  for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
  }

  return arr;
}


rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]   








// How will you remove duplicates from a JS array?

dups_names = ['Akhil', 'Vijay', 'Swapnil', 'Akhil', 'Vijay'];
function dups_array(dups_names) {
let unique = {};
names.forEach(function(i) {
If (!unique[i]) {
unique[i] = true; }
});
return Object.keys(unique);}
Dups_array(names);



var arr = ["javascript", "typescript", "es6"];
var searchValue = (value) => {
  return arr.filter((item) => {
    return item.indexOf(value) > -1;
  });
};
console.log(searchValue("script")); //["javascript", "typescript"];
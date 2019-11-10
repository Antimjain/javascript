function sayHi(){
    console.log("hiii");
}
sayHi(); //hiii
var sayHi2 = sayHi;
sayHi2(); //hiii



var sayHi = new Function("console.log(\"Hi!\");");
sayHi(); // outputs "Hi!"
var sayHi2 = sayHi;
sayHi2(); // outputs "Hi!"



//function as argument
var numbers = [ 1, 5, 8, 4, 7, 10, 2, 6 ];
// numbers.sort(function(first, second) {
//  return first - second;
// });
console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"
numbers.sort();
console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"
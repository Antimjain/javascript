var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
// console.log(book.hasOwnProperty("toString"));
console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book); // true
console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype); // true

//ECMA6
var object = {};
console.log(Object.prototype.isPrototypeOf(object)); // true
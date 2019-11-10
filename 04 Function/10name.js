// function callMe(){
// }
// console.log(callMe.name) //callMe

// var say = function (){
// }
// console.log(say.name) //say

// var sayMe = function hello(){
// }
// console.log(sayMe.name) //hello



// var doSomething = function doSomethingElse() {
// // empty
// };
// var person = {
//     get firstName() {
//         return "Nicholas"
//     },
//     sayName: function() {
//         console.log(this.name);
//     }
// }
// console.log(doSomething.name); // "doSomethingElse"
// console.log(person.sayName.name); // "sayName"
// console.log(person.firstName.name); // undefined


// var doSomething = function() {
// // empty
// };
// console.log(doSomething.bind().name); // "bound doSomething"
// console.log((new Function()).name); // "anonymous"


// function Person(name) {
//     this.name = name;
// }
// var person = new Person("Nicholas");
// var notAPerson = Person("Nicholas");
// console.log(person); // Person { name: 'Nicholas' }
// console.log(notAPerson); // "undefined"


// function Person(name) {
//     console.log(new.target)
//     if (typeof new.target !== "undefined") {
//         this.name = name;
//     } else {
//         // throw new Error("You must use new with Person.")
//     }
// }
// var person = new Person("Nicholas");
// var notAPerson = Person.call(person, "Michael"); // error! doubt


"use strict";
if (true) {
    console.log(typeof doSomething); // "function"
    function doSomething() {
        // empty
    }
    doSomething();
}
console.log(typeof doSomething); // "undefined"



if (true) {
    // console.log(typeof doSomething); // throws an error
    let doSomething = function () {
    // empty
    }
    doSomething();
}
console.log(typeof doSomething); //undefined
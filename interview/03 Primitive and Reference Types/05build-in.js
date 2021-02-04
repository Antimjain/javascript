// Array    => An ordered list of numerically indexed values
// Date     => A date and time
// Error    => A runtime error (there are also several more specific error subtypes)
// Function => A function
// Object   => A generic object
// RegExp   => A regular expression

let items = new Array();
console.log(items)    //[]

let date = new Date();
console.log(date);   //2019-07-21T10:38:44.599Z

let func = new Function();
console.log(func);  //[Function: anonymous]

let err = new Error("something went wrong");
console.log(err);  //Error: something went wrong

var object = new Object();
console.log(object);  //{}

var re = new RegExp("\\d+");
console.log(re);     ///\d+/
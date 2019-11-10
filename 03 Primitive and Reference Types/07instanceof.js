let items = [];
let obj ={};
function identify(){
}
 
console.log(items instanceof Array);       //true
console.log(items instanceof Object);      //true
console.log(items instanceof identify);    //false
console.log(obj instanceof Object);        //true
console.log(obj instanceof Array);         //false
console.log(obj instanceof Function);      //false
console.log(identify instanceof Function); //true
console.log(identify instanceof Array);    //false
console.log(identify instanceof Object);   //true


var name = "Nicholas";
var count = 10;
var found = false;
console.log(name instanceof String); // false
console.log(count instanceof Number); // false
console.log(found instanceof Boolean); // false
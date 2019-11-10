// To make primitives seem more like references, JavaScript has three
// primitive wrapper types: String, Number, and Boolean. JavaScript creates
// these objects behind the scenes so that you can treat primitives like
// regular objects, but the temporary objects are destroyed as soon as the
// statement using them is complete. Although you can create your own
// instances of primitive wrappers, it’s best not to do that because it can
// be confusing.


var name = "Nicholas";
var firstChar = name.charAt(0);
console.log(firstChar);  //N

//js do
var name = "Nicholas";
var temp = new String(name);
var firstChar = temp.charAt(0);
temp = null;
console.log(firstChar);  //N

var name = new String("Nicholas");
var count = new Number(10);
var found = new Boolean(false);
console.log(typeof name); // "object"
console.log(typeof count); // "object"
console.log(typeof found); // "object"

var name = "Nicholas";
name.last = "Zakas";
console.log(name.last); // undefined

// what the JavaScript engine does
var name = "Nicholas";
var temp = new String(name);
temp.last = "Zakas";
temp = null; // temporary object destroyed
var temp = new String(name);
console.log(temp.last); // undefined
temp = null;
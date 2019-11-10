// all properties that you add to an object are enumerable, which
// means that you can iterate over them using a for-in loop. Enumerable
// properties have their internal [[Enumerable]] attributes set to true. The
// for-in loop enumerates all enumerable properties on an object, assigning
// the property name to a variable. For example, the following loop outputs 
// the property names and values of an object:

var property;
for (property in object) {
    console.log("Name: " + property);
    console.log("Value: " + object[property]);
}


var properties = Object.keys(object);
// if you want to mimic for-in behavior
var i, len;
for (i=0, len=properties.length; i < len; i++){
    console.log("Name: " + properties[i]);
    console.log("Value: " + object[properties[i]]);
}



var person1 = {
    name: "Nicholas"
};
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // true
var properties = Object.keys(person1);
console.log("length" in properties); // true
console.log(properties.propertyIsEnumerable("length")); // false
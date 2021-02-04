var object = {};
console.log(object.toString()); // "[object Object]"
object.toString = function() {
    return "[object Custom]";
}; 
console.log(object.toString()); // "[object Custom]"

// delete own property
delete object.toString;

console.log(object.toString()); // "[object Object]"

// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString()); // "[object Object]"
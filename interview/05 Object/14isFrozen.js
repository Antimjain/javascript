var person = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person)); // true
console.log(Object.isSealed(person)); // false
console.log(Object.isFrozen(person)); // false

Object.freeze(person);
console.log(Object.isExtensible(person)); // false
console.log(Object.isSealed(person)); // true
console.log(Object.isFrozen(person)); // true

person.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person); // false
person.name = "Greg";
console.log(person.name); // "Nicholas"


delete person.name;
console.log("name" in person); // true
console.log(person.name); // "Nicholas"

var descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false
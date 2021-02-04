var person = {
    name: "Nicholas"
};
console.log(Object.isExtensible(person)); // true

Object.preventExtensions(person);

console.log(Object.isExtensible(person)); // false


person.sayName = function() {
    console.log(this.name);
};
console.log("sayName" in person); // false
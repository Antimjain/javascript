var person = {};
Object.defineProperty(person, "name", {
    value: "Nicholas",
});


console.log("name" in person); // true
console.log(person.propertyIsEnumerable("name")); // false
console.log(person.name) //Nicholas
console.log("beforeDelete", person.name) //beforeDelete Nicholas
delete person.name;
console.log(person.name) //Nicholas
console.log("afterDelete", person.name) //afterDelete Nicholas
console.log("person", person)  // {}
console.log("name" in person); // true
person.name = "Greg";          
console.log(person.name);      // "Nicholas"  Because writable is false, the property is read-only.

// default is false

Object.defineProperty(person, "name", {
    value: "Nicholas",
    writable: true,      // Allows you to change the value (person.name = "Greg")
    configurable: true,  // Allows you to delete the property
    enumerable: true     // Allows it to show up in console.log(person)
});
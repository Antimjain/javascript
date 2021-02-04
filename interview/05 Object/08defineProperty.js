var person = {};
Object.defineProperty(person, "name", {
    value: "Nicholas",
});


console.log("name" in person); // true
console.log(person.propertyIsEnumerable("name")); // false
console.log(person.name) //Nicholas
console.log("beforeDelete", person) //beforeDelete {}
delete person.name;
console.log(person.name) //Nicholas
console.log("afterDelete", person) //afterDelete {}
console.log("person", person)  // {}
console.log("name" in person); // true
person.name = "Greg";          
console.log(person.name);      // "Nicholas"
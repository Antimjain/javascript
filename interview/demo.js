var person = {};
Object.defineProperty(person, "name", {
    value: "Nicholas",
});



console.log("beforeDelete", person.name) //Nicholas
delete person.name;
console.log(person.name) //Nicholas
console.log("afterDelete", person.name) //Nicholas
console.log("person", person)  // {}
console.log("name" in person); // true
person.name = "Greg";          
console.log(person.name);      // "Nicholas"
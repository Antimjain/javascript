// Enumerable == which determines whether you can iterate over the property
// Configurable ==   which determines whether the property can be changed

var person = {
    name: "Nicholas"
};
Object.defineProperty(person, "name", {
    enumerable: false
});
console.log("name" in person);                    // true
console.log(person.propertyIsEnumerable("name")); // false


var properties = Object.keys(person);
console.log(properties.length);         // 0
Object.defineProperty(person, "name", {
    configurable: false
});

// try to delete the Property
delete person.name;
console.log("name" in person); // true
console.log(person.name);      // "Nicholas"

// Object.defineProperty(person, "name", { // error!!! Cannot redefine property: name
//     configurable: true
// });
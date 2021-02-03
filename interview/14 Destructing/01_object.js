//ECMA 5
let options = {
  repeat: true,
  save: false
 };
 // extract data from the object
 let repeat = options.repeat,
save = options.save;

// Object Destructuring
let node = {
  type: "Identifier",
  name: "foo"
 };
 let { type, name } = node;
 console.log(type); // "Identifier"
 console.log(name); // "foo"


//  Default Values UNDEFINED
let node = {
  type: "Identifier",
  name: "foo"
 };
 let { type, name, value } = node;
 console.log(type); // "Identifier"
 console.log(name); // "foo"
 console.log(value); // undefined



 let node = {
  type: "Identifier",
  name: "foo"
 };
 let { type, name, value = true } = node;
 console.log(type); // "Identifier"
 console.log(name); // "foo"
 console.log(value); // true



//  Assigning to Different Local Variable Names
let node = {
  type: "Identifier",
  name: "foo"
};
let { type: localType, name: localName } = node;
console.log(localType); // "Identifier"
console.log(localName); // "foo"


let node = {
  type: "Identifier"
 };
 let { type: localType, name: localName = "bar" } = node;
 console.log(localType); // "Identifier"
 console.log(localName); // "bar"
 
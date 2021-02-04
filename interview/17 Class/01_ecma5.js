function PersonType(name) {
  this.name = name;
 }
 PersonType.prototype.sayName = function() {
  console.log(this.name);
 };
 var person = new PersonType("Nicholas");
 person.sayName(); // outputs "Nicholas"
 console.log(person instanceof PersonType); // true
 console.log(person instanceof Object); // true









 class PersonClass {
  // equivalent of the PersonType constructor
  constructor(name) {
  this.name = name;
  }
  // equivalent of PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
 }
}
let person = new PersonClass("Nicholas");
person.sayName(); // outputs "Nicholas"
console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true
console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"














class Foo {
  constructor() {
  Foo = "bar"; // throws an error when executed...
  }
 }
 // but this is okay after the class declaration
 Foo = "baz";
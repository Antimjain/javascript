function PersonType(name) {
  this.name = name;
 }
 // static method
//  doesn’t depend on an instance of PersonType for its data
PersonType.create = function(name) {
  return new PersonType(name);
 };
 // instance method
 PersonType.prototype.sayName = function() {
  console.log(this.name);
 };
 var person = PersonType.create("Nicholas");
 












//ECMA 6  static keyword
 class PersonClass {
  // equivalent of the PersonType constructor
  constructor(name) {
  this.name = name;
  }
  // equivalent of PersonType.prototype.sayName
  sayName() {
  console.log(this.name);
  }
  // equivalent of PersonType.create
  static create(name) {
  return new PersonClass(name);
  }
 }
 let person = PersonClass.create("Nicholas");
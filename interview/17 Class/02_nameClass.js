let PersonClass = class PersonClass2 {
  // equivalent of the PersonType constructor
  constructor(name) {
  this.name = name;
  }
  // equivalent of PersonType.prototype.sayName
  sayName() {
  console.log(this.name);
  }
 };
 console.log(typeof PersonClass); // "function"
 console.log(typeof PersonClass2); // "undefined"









//  Classes as First-Class Citizens
function createObject(classDef) {
  return new classDef();
 }
 let obj = createObject(class {
  sayHi() {
  console.log("Hi!");
  }
 });
 obj.sayHi(); // "Hi!"



 let person = new class {
  constructor(name) {
  this.name = name;
  }
  sayName() {
  console.log(this.name);
  }
 }("Nicholas");
 person.sayName(); // "Nicholas"
 
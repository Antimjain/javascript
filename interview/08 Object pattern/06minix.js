function Person(name) {
    this.name = name;
}

// Person.prototype = Object.create(EventTarget.prototype);
//     Person.prototype.constructor = Person;
//     Person.prototype.sayName = function() {
//     console.log(this.name);
//     this.fire({ type: "namesaid", name: name });
// };

// var person = new Person("Nicholas");
// console.log(person instanceof Person); // true
// console.log(person instanceof EventTarget); // true

// function Person(name) {
//     this.name = name;
// }
// mixin(Person.prototype, new EventTarget());
// mixin(Person.prototype, {
//     constructor: Person,
//     sayName: function() {
//         console.log(this.name);
//         this.fire({ type: "namesaid", name: name });
//     }
// });
// var person = new Person("Nicholas");
// console.log(person instanceof Person); // true
// console.log(person instanceof EventTarget); // false

// var person = mixin(new EventTarget(), {
//     name: "Nicholas",
//     sayName: function() {
//         console.log(this.name);
//         this.fire({ type: "namesaid", name: name });
//     }
// });
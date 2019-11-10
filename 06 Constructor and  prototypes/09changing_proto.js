function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    },
    toString: function() {
        return "[Person " + this.name + "]";
    }
}; 

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false
// add a new method
Person.prototype.sayHi = function() {
    console.log("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
Object.freeze(person1);
Person.prototype.sayHi = function() {
    console.log("Helloo");
};
person1.sayHi(); // outputs "Helloo"
person2.sayHi(); // outputs "Helloo"
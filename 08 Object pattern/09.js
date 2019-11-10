function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(this.name);
};
var person1 = Person("Nicholas"); // note: missing "new"
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"

function Person(name) {
    if (this instanceof Person) {
    // called with "new"
    } else {
    // called without "new"
    }
}

function Person(name) {
    if (this instanceof Person) {
    this.name = name;
    } else {
    return new Person(name);
    }
}

var person1 = new Person("Nicholas");
var person2 = Person("Nicholas");
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true
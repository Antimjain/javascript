var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
// is the same as
var book = Object.create(Object.prototype, {
    title: {
        configurable: true,
        enumerable: true,
        value: "The Principles of Object-Oriented JavaScript",
        writable: true
    }
});

var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

var person2 = Object.create(person1, {
    name: {
        configurable: true,
        enumerable: true,
        value: "Greg",
        writable: true
    }
});
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"
console.log(person1.hasOwnProperty("sayName")); // true
console.log(person1.isPrototypeOf(person2));    // true
console.log(person2.hasOwnProperty("sayName")); //false

var nakedObject = Object.create(null);
console.log("toString" in nakedObject); // false
console.log("valueOf" in nakedObject);  // false
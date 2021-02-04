function Person(name) {
    this.name = name;
}
Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
    console.log(this.name);
    this.fire({ type: "namesaid", name: name });
};
var person = new Person("Nicholas");
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // true

function Person(name) {
    this.name = name;
}
mixin(Person.prototype, new EventTarget());
mixin(Person.prototype, {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});
var person = new Person("Nicholas");
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // false

var person = mixin(new EventTarget(), {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});

function mixin(receiver, supplier) {
    Object.keys(supplier).forEach(function(property) {
        var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
        Object.defineProperty(receiver, property, descriptor);
    });
    return receiver;
}
var person = mixin(new EventTarget(), {
    get name() {
        return "Nicholas"
    },
    sayName: function() {
        console.log(this.name);
        this.fire({ type: "namesaid", name: name });
    }
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"

function mixin(receiver, supplier) {
    if (Object.getOwnPropertyDescriptor) {
        Object.keys(supplier).forEach(function(property) {
            var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
            Object.defineProperty(receiver, property, descriptor);
        });
    } else {
        for (var property in supplier) {
            if (supplier.hasOwnProperty(property)) {
                receiver[property] = supplier[property]
            }
        }
    }
    return receiver;
}
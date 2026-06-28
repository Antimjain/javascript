// 'This' keyword refers to the object from where it was called.
// 1. The Global Context - console.log(this); // window (in a browser)
// 2. obj inside method
const person = {
    name: "Alice",
    greet: function () {
        console.log(this.name);
    },
};

person.greet(); // "Alice"
// 3. constructor
function User(name) {
    this.name = name; // 'this' refers to the new instance created
}

const u1 = new User("Bob");
console.log(u1.name); // "Bob"

// 4. Explicit Binding (call, apply, bind)
function sayHello() {
    console.log(this.title);
}

const obj = { title: "Manager" };

sayHello.call(obj); // "Manager" (we forced 'this' to be 'obj')

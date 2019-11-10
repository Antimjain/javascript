function Person(){
    //empty
}

var person1 = new Person(); //constructor
var person2 = new Person(); //constructor

var person1 = new Person //constructor without ()
var person2 = new Person //constructor without ()

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = new Person("antim");
var person1 = new Person("teehu");
var person2 = new Person("vaibhav");
console.log(person1.name) // teehu
console.log(person2.name) // vaibhav

person1.sayName(); //teehu
person2.sayName(); //vaibhav
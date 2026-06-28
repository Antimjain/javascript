function Person(name, age) {
    this.name = name || "John";
    this.age = age || 24;
    this.displayName = function () {
        console.log(this.name);
    }; // inside constructor function, this refers to the instance of the object created by the constructor function
}
// Person.name method name - Person
Person.name = "John"; //failed due to the read-only rule,  STATIC METHOD
Person.displayName = function () {
    console.log(this.name);
}; //STATIC METHOD

var person1 = new Person("John");
person1.displayName(); //John
Person.displayName(); // this.name -> Person.name -> Person

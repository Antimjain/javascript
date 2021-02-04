function Person(name) {
    Object.defineProperty(this, "name", {
        get: function() {
            return name;
        },
        set: function(newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
    this.sayName = function() {
        console.log(this.name);
    };
}

var person1 = Person("antim"); 
console.log(person1 instanceof Person); //false
console.log(typeof person1); //undefined
console.log(name);  //antim
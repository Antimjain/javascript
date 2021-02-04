// in operator checks for both own properties and prototype properties,

let object = {
    name : "antim",
    age  : 25,
}

console.log("name" in object);   //true
console.log("age" in object);    //true
console.log("title" in object);  //false

var person1 = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

console.log("sayName" in person1); //true
console.log("title" in person1);   //false
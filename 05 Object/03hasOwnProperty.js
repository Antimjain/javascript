let person = {
    name : "antim",
    age  : 23
}

console.log("name" in person);              //true
console.log(person.hasOwnProperty("name")); //true


console.log("toString" in person);              //true
console.log(person.hasOwnProperty("toString")); //false

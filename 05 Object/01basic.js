var person1 = {
    name: "Nicholas"
};
var person2 = new Object();  // creating obj
person2.name = "Nicholas";   // [[Put]]name
person1.age = "Redacted";    // [[Put]]age
person2.age = "Redacted";    // [[Put]]age
person1.name = "Greg";       // [[Set]]name
console.log(person1.name)
person2.name = "Michael";    // [[Set]]name 
console.log(person2.name)
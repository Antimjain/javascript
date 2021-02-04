function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};
var person2 = {
    name: "Greg"
};
// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1"); // outputs "person1:Nicholas"
// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2(); // outputs "person2:Greg"

// attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); // outputs "person2:Nicholas"
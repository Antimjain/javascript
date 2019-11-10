function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    console.log(this.name);
};

Person.prototype.favorites = [];
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
person1.favorites.push("pizza");
person2.favorites.push("quinoa");
console.log(person1.favorites); // "pizza,quinoa"
console.log(person2.favorites); // "pizza,quinoa"
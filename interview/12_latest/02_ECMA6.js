function createPerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
//ecma6
function createPerson(name, age) {
    return {
        name,
        age,
    };
}
var person = {
    name: "Nicholas",
    sayName: function () {
        console.log(this.name);
    },
};
//ecma6
var person = {
    name: "Nicholas",
    sayName() {
        console.log(this.name);
    },
};

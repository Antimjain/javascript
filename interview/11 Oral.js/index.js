var y = 1;
if (function f() {}) {
    y += typeof f;
}
console.log(y); //1undefined

var k = 1;
if (1) {
    eval(function foo() {});
    k += typeof foo;
}
console.log(k); //1undefined

var k = 1;
if (1) {
    function foo() {}
    k += typeof foo;
}
console.log(k); //1function

var output = (function (x) {
    delete x;
    return x;
})(0);

console.log(output); //0

var x = 1;
var output = (function () {
    delete x;
    return x;
})();

console.log(output); //1

var x = { foo: 1 };
var output = (function () {
    delete x.foo;
    return x.foo;
})();

console.log(output); //undefined

var Employee = {
    company: "xyz",
};
var emp1 = Object.create(Employee);
delete emp1.company; //fails to remove the property because it does not exist as an "own" property on emp1.
console.log(emp1.company); //xyz

var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3]; //["redwood", "bay", "cedar", undefined, "maple"]

var trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];

console.log(trees.length); //5

var foo = function bar() {
    return 12;
};
typeof bar(); //Reference Error

var bar = function () {
    return 12;
};
typeof bar(); //"number

var foo = function bar() {
    // foo is visible here
    // bar is visible here
    console.log(typeof bar); // Work here :) //function
};
// foo is visible here
// bar is undefined here"

function User(name) {
    this.name = name || "JsGeeks";
}

var person = (new User("xyz")["location"] = "USA");
console.log(person); //USA
// The assignment new User("xyz")["location"] = "USA" returns the assigned value "USA" rather than the object itself, so person becomes the string "USA".

var a = 10;
function callme() {
    console.log(a); //undefined hosting
    var a = 20;
}

callme();
console.log(a); //10 global read

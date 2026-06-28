var employeeId = "abc123";
function foo() {
    employeeId = "123bcd";
    return;
}
foo();
console.log(employeeId); //123bcd because employeeId is a global variable and it is reassigned inside the function foo.

var employeeId = "abc123";
function foo() {
    employeeId = "123bcd";
    return;
    function employeeId() {}
}
foo();
console.log(employeeId); //abc123

var employeeId = "abc123";
function foo() {
    employeeId();
    return;
    function employeeId() {
        console.log(typeof employeeId); //function
    }
}
foo();

function foo() {
    employeeId();
    var product = "Car";
    return;

    function employeeId() {
        console.log(product); //top level assignment but product is not defined yet because of hoisting
    }
}
foo(); //undefined

(function foo() {
    bar();
    function bar() {
        abc();
        console.log(typeof abc);
    }
    function abc() {
        console.log(typeof bar);
    }
})(); // function function

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl(); //undefined because of hoisting, x is declared but not assigned yet.

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1,
            y = 2;
        console.log(x); //1
    }
    console.log(x); //undefined
    console.log(y); //2 global
})();

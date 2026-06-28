typeof undefined == typeof NULL; // true
console.log(0.1 + 0.2); // Outputs 0.30000000000000004
console.log(0.1 + 0.2 == 0.3); // Outputs false

console.log(sum(2, 3)); // Outputs 5
console.log(sum(2)(3)); // Outputs 5

(function (x) {
    return (function (y) {
        console.log(x); //1
    })(2);
})(1);

var length = 10;
function fn() {
    console.log(this.length); //10 window obj
}

var hero = {
    _name: "John Doe",
    getSecretIdentity: function () {
        return this._name;
    },
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); //undefined because this is not pointing to hero object
console.log(hero.getSecretIdentity()); //John Doe because this is pointing to hero object

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        arguments[0]();
    },
};

obj.method(fn, 1);

console.log(
    (function f(n) {
        return n > 1 ? n * f(n - 1) : n;
    })(10),
);

console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

(function () {
    var a = (b = 3);
})();

console.log("a defined? " + (typeof a !== "undefined"));
console.log("b defined? " + (typeof b !== "undefined"));

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); //"outer func:  this.foo = bar"
        console.log("outer func:  self.foo = " + self.foo); //"outer func:  self.foo = bar"

        (function () {
            console.log("inner func:  this.foo = " + this.foo); //undefined because this is pointing to window object
            console.log("inner func:  self.foo = " + self.foo); //"inner func:  self.foo = bar" because self is pointing to myObject
        })();
    },
};
myObject.func();

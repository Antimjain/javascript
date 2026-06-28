var obj1 = {
    address: "Mumbai,India",
    getAddress: function () {
        console.log(this.address);
    },
};

var getAddress = obj1.getAddress;
var obj2 = { name: "akshay" };
obj2.getAddress(); //error don't have address in obj2

(function runFunc() {
    console.log("1" + 1); //11
    console.log("A" - 1); //NaN
    console.log(2 + "-2" + "2"); //2-22
    console.log("Hello" - "World" + 78); //NaN
    console.log("Hello" + "78"); //Hello78
})();

let a = 0;
let b = false;
console.log(a == b); //true
console.log(a === b); //false

let hero = {
    powerLevel: 99,
    getPower() {
        return this.powerLevel;
    },
};

let getPower = hero.getPower;

let hero2 = { powerLevel: 42 };
console.log(getPower());
console.log(getPower.apply(hero2));

// Code 2

const a = function () {
    console.log(this);

    const b = {
        func1: function () {
            console.log(this);
        },
    };

    const c = {
        func2: () => {
            console.log(this);
        },
    };

    b.func1();
    c.func2();
};

a();

// Code 3

const b = {
    name: "Vivek",
    f: function () {
        var self = this;
        console.log(this.name);
        (function () {
            console.log(this.name);
            console.log(self.name);
        })();
    },
};

b.f();

// Code 1

(function (a) {
    return (function () {
        console.log(a);
        a = 23;
    })();
})(45);

// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element) {
    let newArray = new Array(700).fill("♥");
    return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again

// Code 3

// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

var y = 1;
if (function F() {}) {
    y += typeof F;
}
console.log(y);

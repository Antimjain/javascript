/* 
no this , super , arguments
new.target bindings
Cannot be called with new ,No prototype
Can’t change this
No arguments object
No duplicate named parameters

Arrow functions cannot be used as constructors and also does not supports this, arguments, super, or new.target keywords.
*/

function withoutArrow(val) {
    return val;
}

withArrow = (val) => val;

let getTempItem = (id) => ({ id: id, name: "Temp" });
// effectively equivalent to:
let getTempItem = function (id) {
    return {
        id: id,
        name: "Temp",
    };
};

/* default params
rest and spread 
arrow
without arrow (this binding)
*/

// 1. no new keyword
sum = (x, y) => {
    return x + y;
};
console.log(sum(2, 3));
console.log(new sum(2, 3)); //cann't call with new  sum is not a constructor

// 2. no arguments object
sum1 = (x, y) => {
    console.log(arguments); //arguments is not defined
    return x + y;
};
console.log(sum1(2, 3));

// 3.Duplicate parameter name not allowed in this context
sum2 = (x, x) => {
    return x + y;
};
console.log(sum2(2, 3)); // Duplicate parameter name not allowed in this context

// 4.No this
sum3 = (x, y) => {
    console.log(this); //{}
    return x + y;
};
console.log(sum3(2, 3));

let me = {
    name: "Ashutosh Verma",
    thisInArrow: () => {
        console.log("My name is " + this.name); // no 'this' binding here
        //My name is undefined
    },
    thisInRegular() {
        console.log("My name is " + this.name); // 'this' binding works here
        //My name is Ashutosh Verma
    },
};
me.thisInArrow();
me.thisInRegular();

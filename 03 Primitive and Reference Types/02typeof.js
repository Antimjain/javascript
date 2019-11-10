// console.log(typeof(name)); //undefined
// console.log(typeof("name")); //string
// console.log(typeof(100)); //number
// console.log(typeof(true)); //boolean
// console.log(typeof(null)); //object

// console.log(undefined == null); // true
// console.log(undefined === null); // false

// console.log("5" == 5); // true
// console.log("5" === 5); // false

// console.log(typeof typeof 1); //string

// var z = 1, y = z = typeof(x)
// console.log(y)   //undefined  right to left

let foo = function bar(){
    return 10;
}
// console.log(typeof bar()); //ReferenceError: bar is not defined
console.log(typeof foo()); //number
console.log(typeof foo); //function


let asd = function foo(){
    console.log(typeof asd) //funtion
    console.log(typeof foo) //funtion
}
console.log(typeof asd) //funtion
console.log(typeof foo) //undefined      //invisible
asd()
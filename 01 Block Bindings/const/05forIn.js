//for in loop const work like let
object = {
    name : "antim",
    age  : 22,
    status: "single"
};
var arr = [];

for (const key in object){
    console.log(key); //name  age status
    arr.push(key)
}
console.log(arr); // [ 'name', 'age', 'status' ]

arr.forEach(function(func) {
    // func();     // outputs "a", then "b", then "c"
});


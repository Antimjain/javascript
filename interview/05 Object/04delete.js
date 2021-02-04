// let person = {
//     name : "nick",
//     age  : 23
// }
// console.log("name" in person);     //true
// console.log(delete person.name);   //true
// console.log("name" in person);  //false
// console.log( person.name);      //undefined
// console.log( person.age);       //23


// var output = function (x){
//     delete x;
//     return x;
// }(0);
// console.log(output);  //o   
// // delete doesnot effect local variable but used to delete property from an object


// var x = 1;
// var output = function (x){
//     delete x;
//     return x;
// }();
// console.log(output); //undefined


// var obj = {
//     foo:1
// }
// var output = function (){
//     // console.log(delete obj.foo) //true
//     delete obj.foo;
//     return obj.foo;
// }();
// console.log(output); //undefined


let emp = {
    company : "comp",
}
let emp1 = Object.create(emp);
delete emp1.company;
console.log(emp1.company) //comp does not delete proto property


let arr = [1,2,3,4,5];
delete arr[2];
console.log(arr) //[ 1, 2, <1 empty item>, 4, 5 ]
console.log(arr.length) //5
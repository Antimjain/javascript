var strA = "hi there";
var strB = strA;
strB="bye there!";
console.log (strA) //hi there


var objA = {prop1: 42};
var objB = objA; 
objB.prop1 = 90;
console.log(objA)  //{prop1: 90};


var objA = {prop1: 42};
var objB = objA;
objB = {}; //derefrence
console.log(objA) //{prop1: 42};


var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA) //[42,1,2,3,4,5];


var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice(); // copies all the elements of the array returning the new array
arrB[0]=42; //arrA and arrB 2 different array
console.log(arrA) //[0,1,2,3,4,5]


var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
// [{prop1: 42}, {someProp: "also value of array A!"}, 3,4,5].


var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
// [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
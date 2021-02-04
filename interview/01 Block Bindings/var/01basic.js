var a = 10;
var a = 20;
console.log(a); //20

function callme(){
    var b = 30;
    console.log(b); //30    function scope
};
// console.log(b) 
callme();


var c;
console.log(c); //undefined
c = 50;
console.log(c); // 50

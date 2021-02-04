let a = 10;
a = 20;
console.log(a);

let b = 10;
let b = 20;
console.log(b); //error Identifier 'b' has already been declared

if(true){
    let c = 20;
    console.log(c);
} else {
    console.log(c);
    //c is not available
}
console.log(c); //error c is not defined

var d = 10;
let d = 20;
console.log(d); // Identifier 'd' has already been declared

var e = "hiii";
if(true){
    let e = "hello";
    console.log(e); //"hello"
}
console.log(e); //"hiii"
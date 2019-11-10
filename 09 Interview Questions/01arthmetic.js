var bar = true;
console.log(bar+1);       // 2
console.log(bar+false)    // 1 (1+0)
console.log(bar+true)     // 2
console.log(bar+"false")  // truefalse

console.log(1 + 1);       // 2
console.log(true + 1);    // 2
console.log(false + 1);   // 1
console.log("true" + 1);  // true1
console.log("bar"+true);  // bartrue
console.log("bar"+"bar"); // barbar
console.log(1 + "hii");   // 1hii

console.log(1<2<3) //true
console.log(3<2>1) //false
const a = 10;
a = 20;
console.log(a) //error Assignment to constant variable.


const b;
console.log(b) //error Missing initializer in const declaration

const c = 10;
const c = 20;
console.log(c) //error Identifier 'c' has already been declared
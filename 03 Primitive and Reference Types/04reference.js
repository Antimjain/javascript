let object1 = new Object();
let object2 = object1

console.log(object1); //{}
console.log(object2); //{}

// ------------------------------------------- !
//                 !        memory              !
// object1=========!                           !
//                 !        object                   !
// object2 ========!                           !
//                 !                           !
// ------------------------------------------- !


//adding property in object
object1.name = "antim";
console.log(object1.name); //antim
console.log(object2.name); //antim

//Dereferencing
object1 = null;
console.log(object1); //null
console.log(object2); //{ name: 'antim' }
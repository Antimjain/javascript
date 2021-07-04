// // 1. no new keyword
// sum = (x, y)=>{
//   return x+y
// }
// console.log(sum(2,3))
// // console.log(new sum(2,3)) cann't call with new


// // 2. no arguments object
// add = (x, y)=>{
//   // console.log(arguments) 
//   return x+y
// }
// console.log(add(2,3))



// // 3.Duplicate parameter name not allowed in this context
// add = (x, x)=>{
//   return x+y
// }
// console.log(add(2,3))




// // 4.No this
// add = (x, y)=>{
//   // console.log(this) {}
//   return x+y
// }
// console.log(add(2,3))


let me = { 
  name: "Ashutosh Verma", 
  thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    //My name is undefined
  }, 
  thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    //My name is Ashutosh Verma
  } 
};
me.thisInArrow(); 
me.thisInRegular();

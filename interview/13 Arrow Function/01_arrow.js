/* 
no this 
super
arguments
new.target bindings
Cannot be called with new 
No prototype
Can’t change this
No arguments object
No duplicate named parameters
*/

function withoutArrow(val){
  return val;
}

withArrow = (val)=> val

let getTempItem = id => ({ id: id, name: "Temp" });
// effectively equivalent to:
let getTempItem = function(id) {
 return {
  id: id,
  name: "Temp"
 };
};

/* default params
rest and spread 
arrow
without arrow (this binding)
*/
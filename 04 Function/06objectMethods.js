// var object = {
//     name : "teehu",
//     sayName : function(){
//         console.log(object.name); //teehu
//         console.log(this.name);   //teehu
//     }
// }

// object.sayName();


function sayNameForAll(){
    console.log(this.name)
}

let person1 = {
    name : "antim",
    sayName:sayNameForAll
}
let person2 = {
    name : "vaibhav",
    sayName:sayNameForAll
}
let name = "Michael";
var sername = "jain";  //IN browser this.sername ==jain

person1.sayName(); 
person2.sayName();
sayNameForAll(); //undefined

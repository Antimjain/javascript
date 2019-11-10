//programmer know about the parameter to be pass
function sayName(label){
    console.log(label + this.name)
}

person1 = {
    name : "antim",
}

person2 = {
    name : "nick",
}

name = "vaibhav"

sayName.call(person1, "my name is ");  // my name is antim
sayName.call(person2 , "my name is "); // my name is nick 
sayName.call(global ,"my name is ");   // my name is vaibhav
sayName.call(this ,"my name is ");     // my name is undefined



sayName.call(global ,"my name is ");   // my name is undefined  //in browser
sayName.call(this ,"my name is ");     // my name is vaibhav    //in browser
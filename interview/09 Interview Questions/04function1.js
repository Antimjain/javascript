//1
function callMe(){
    console.log("callme", this)
}
callMe() //window


//2
var obj = {
    name : "antim",
    sayName : function(){
        console.log(this.name) //antim
    }
}
obj.sayName()


//3
var obj1 = {
    name : "vaibhav",
    sayName : function(){
        return this.name;
    }
}
console.log(obj1.sayName()) //vaibhav


//4
var obj3 = {
    name : "vaibhav",
    sayName : function(){
        (function(){
        console.log(this.name); //undefined
        })
    }
}
console.log(obj3.sayName()) 


//5
var obj4 = {
    name : "vaibhav",
    sayName : function(){
        let say = this;
        (function(){
            console.log(say.name); //vaibhav
        }())
    }
}
obj4.sayName();


//6
function myFunc(){
    console.log(this) //window
    console.log(this.msg) //undefined
}
myFunc.msg = "hiii"
console.log(myFunc())



//7
function myOtherFunc(){
    // console.log(this) //window
    console.log(myOtherFunc.msg) //hiiii
}
myOtherFunc.msg = "hiii"
myOtherFunc()


//8
function myFun(){
    myFun.msg = "hiii bae"
    // console.log(this) //window
    console.log(myFun.msg) //"hiii bae
}
myFun()


//9
function myParam(param1 ,param2){
  console.log(myParam.length)
}
myParam() //2
myParam('a', 's')//2
myParam('a', 's', 'd')//2


//10
function myFunction(){
    console.log(myFunction.length) //0 0 0
    console.log(arguments.length) //0 2 3
}
myFunction() //0
myFunction('a', 's')//2
myFunction('a', 's', 'd')//3


//11 let a = 2 is declared in the global scope.
function did(){
   let a = 5
   doing();
}
function doing(){
    console.log(a);  //2
} 
let a =2
did();



function saw(){
    let b = 5
    function seen(){
        console.log(b);  //5
    } 
    seen();
}
let b =2
saw();
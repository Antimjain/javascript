var obj1 = {
  address : "Mumbai,India",
  getAddress: function(){
  console.log(this.address); 
}
}
     
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();     //error don't hace address in obj2






function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}

func1();

// Code 2:

function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}

}

func2();


// Code 3:


(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();







// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);



// Code 2:

function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}

runFunc();


// Code 3:

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));


// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};

x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};

console.log(x[y]);



// Code 2:

function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}

runFunc();


// Code 3:

let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));









// Code 1

let hero = {
  powerLevel: 99,
  getPower(){
    return this.powerLevel;
  }
}

let getPower = hero.getPower;

let hero2 = {powerLevel:42};
console.log(getPower());
console.log(getPower.apply(hero2));



// Code 2

const a = function(){
  console.log(this);

  const b = {
    func1: function(){
      console.log(this);
    }  
  }

  const c = {
    func2: ()=>{
      console.log(this);
    }
  }

  b.func1();
  c.func2();
}

a();



// Code 3

const b = {
  name:"Vivek",
  f: function(){
    var self = this;
    console.log(this.name);
    (function(){
      console.log(this.name);
      console.log(self.name);
    })();
  }
}

b.f();



// Code 1

(function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);


// Code 2

// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

function bigFunc(element){
  let newArray = new Array(700).fill('♥');
  return newArray[element];
}

console.log(bigFunc(599)); // Array is created
console.log(bigFunc(670)); // Array is created again



// Code 3

// The following code outputs 2 and 2 after waiting for one second
// Modify the code to output 0 and 1 after one second.

function randomFunc(){
  for(var i = 0; i < 2; i++){
    setTimeout(()=> console.log(i),1000);
  }
}

randomFunc();


var y = 1;
if (function F(){})
{
y += typeof F;
}
console.log(y);
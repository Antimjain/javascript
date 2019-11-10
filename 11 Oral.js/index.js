var y = 1;
  if (function f(){}) {
    y += typeof f;
  }
console.log(y);


var k = 1;
  if (1) {
    eval(function foo(){});
    k += typeof foo;
  }
console.log(k); 

var k = 1;
if (1) {
    function foo(){};
    k += typeof foo;
}
  console.log(k); 


  var output = (function(x){
    delete x;
    return x;
  })(0);
  
  console.log(output);


  var x = 1;
var output = (function(){
    delete x;
    return x;
  })();
  
  console.log(output);

  var x = { foo : 1};
var output = (function(){
    delete x.foo;
    return x.foo;
  })();
  
  console.log(output);



  var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
  console.log(emp1.company);


  var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];


var trees = ["xyz","xxxx","test","ryan","apple"];
delete trees[3];
  
  console.log(trees.length);


  var foo = function bar(){ return 12; };
typeof bar();   //Reference Error

var bar = function(){ return 12; };
typeof bar();  //"number


var foo = function bar(){ 
    // foo is visible here 
    // bar is visible here
 	console.log(typeof bar()); // Work here :)
 };
// foo is visible here
// bar is undefined here"


function User(name) {
    this.name = name || "JsGeeks";
  }
  
  var person = new User("xyz")["location"] = "USA";
  console.log(person);


var a = 10;
function callme(){
  console.log(a);
  var a= 20;
}

callme();
console.log(a);
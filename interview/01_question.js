let x = "100"
x = +x
console.log(x, typeof x) //100 number

x = "hello"
x = +x
console.log(x, typeof x) // NaN number


// What are enhanced object literals
//ES6
var x = 10, y = 20
obj = { x, y }
console.log(obj); // {x: 10, y:20}
//ES5
var x = 10, y = 20
obj = { x : x, y : y}
console.log(obj); // {x: 10, y:20}






var x = 220;
var y = "Hello";
var z = undefined;
console.log(x && y) //"Hello"
console.log(y && z) // undefined





console.log("Welcome to JS world"[0]) //"W"





const obj = {};
console.log(obj.someprop.x); //error




let a = { a: 1 };
let b = { a: 1 };
let c = a;

console.log(a === b); // logs false even though they have the same property
console.log(a === c); // logs true hmm


console.log(3 > 2 > 1); //false left to right






(function () {
  try {
      throw new Error();
  } catch (x) {
      var x = 1, y = 2;
      console.log(x);
  }
  console.log(x);
  console.log(y);
})();









var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);






var hero = {
  _name: 'John Doe',
  getSecretIdentity: function (){
      return this._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero); //fix
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());






console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10)); //10 factorial








var a={},
    b={key:'b'}, //"[object Object]"
    c={key:'c'}; //"[object Object]"

a[b]=123; //a["[object Object]"]
a[c]=456;

console.log(a[b]);




console.log("1 && 2 = "+(1 && 2));





var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));



var result;
for (var i = 5; i > 0; i--) {
  result = result + i; //undefined+i
}
console.log(result); // Output: NaN



var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1)); //array 1: length=5 last=j,o,n,e,s
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1)); //array 2: length=5 last=j,o,n,e,s
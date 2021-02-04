function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA()); //funcA Window {...} innerFunc1 Window {...} innerFunA11 Window {...}


var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);
	})()
};
	
console.log(obj.innerMessage);  ///undefined true



var obj = {
	message: "Hello",
	innerMessage: function() {
		return this.message;
	}
};
console.log(obj.innerMessage()); //Hello



var obj = {
    message: 'Hello',
    innerMessage: function () {
      (function () {
        console.log(this.message);
      }());
    }
};
console.log(obj.innerMessage()); //undefined



var obj = {
    message: 'Hello',
    innerMessage: function () {
        var self = this;
        (function () {
            console.log(self.message);
        }());
    }
};
console.log(obj.innerMessage()); //'Hello'


function myFunc(){
	console.log(this.message);
}
myFunc.message = "Hi John";
console.log(myFunc()); //undefined



function myFunc(){
	console.log(myFunc.message);
}
myFunc.message = "Hi John";
console.log(myFunc()); //Hi John



function myFunc() {
    myFunc.message = 'Hi John';
    console.log(myFunc.message); //'Hi John'
} 
console.log(myFunc());


function myFunc(param1,param2) {
    console.log(myFunc.length);
  }
console.log(myFunc()); //2
console.log(myFunc("a","b"));//2
console.log(myFunc("a","b","c","d")); //2


function myFunc() {
    console.log(arguments.length);
  }
console.log(myFunc()); //0
console.log(myFunc("a","b")); //2
console.log(myFunc("a","b","c","d")); //4
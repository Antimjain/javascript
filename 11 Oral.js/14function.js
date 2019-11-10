var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);
	})()
};
console.log(obj.innerMessage); //undefined true

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
console.log(obj.innerMessage()); //Hello

function myFunc(){
	console.log(this.message); //undefined
}
myFunc.message = "Hi John";
console.log(myFunc());


function myFunc(){
	console.log(myFunc.message);
}
myFunc.message = "Hi John";
console.log(myFunc()); //Hi John


function myFunc() {
    myFunc.message = 'Hi John';
    console.log(myFunc.message);
}
console.log(myFunc()); //'Hi John'

function myFunc(param1,param2) {
    console.log(myFunc.length); //2 2 2
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));


function myFunc() {
    console.log(arguments.length); // 0 2 4
}
console.log(myFunc());
console.log(myFunc("a","b"));
console.log(myFunc("a","b","c","d"));
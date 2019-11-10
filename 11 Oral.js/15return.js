(function(){
	function sayHello(){
		var name = "Hi John";
		return 
		{
			fullName: name
		}
	}
    console.log(sayHello().fullName); 
    // Uncaught TypeError: Cannot read property 'fullName' of undefined
})();

function getNumber(){
	return (2,4,5);
}
var numb = getNumber();
console.log(numb); //5


function getNumber(){
	return;
}
var numb = getNumber();
console.log(numb); //undefined


function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}
console.log(mul(2)(3)[0]); //6
console.log(mul(2)(3)[1](4)); //10


function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result); //6
console.log(mul(2)(3).sum(4)); //10
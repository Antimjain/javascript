// var employeeId = 'abc123';
// function foo(){
// 	employeeId = '123bcd';
// 	return;
// }
// foo();
// console.log(employeeId); //123bcd


// var employeeId = 'abc123';
// function foo() {
// 	employeeId = '123bcd';
// 	return;
//     function employeeId() {}
// }
// foo();
// console.log(employeeId); //abc123


// var employeeId = 'abc123';
// function foo() {
// 	employeeId();
// 	return;
//     function employeeId() {
// 		console.log(typeof employeeId); //function
// 	}
// }
// foo();



// var employeeId = 'abc123';
// function foo() {
// 	employeeId();
// 	return;

// 	function employeeId() {
// 		console.log(typeof employeeId);
// 	}
// }
// foo(); //function


// function foo() {
// 	employeeId();
// 	var product = 'Car'; 
// 	return;

// 	function employeeId() {
// 		console.log(product);
// 	}
// }
// foo(); //undefined


// (function foo() {
// 	bar();
//     function bar() {
// 		abc();
// 		console.log(typeof abc);
// 	}
//     function abc() {
// 		console.log(typeof bar);
// 	}
// }());  // function function
function passWordMngr() {
	var password = '12345678';
	this.userName = 'John';
	return {
		pwd: password
	};
}
// Block End
var userInfo = passWordMngr();
console.log(userInfo.pwd); //12345678
console.log(userInfo.userName); //undefined




var employeeId = 'aq123';
function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(Employee.employeeId); //undefined




var employeeId = 'aq123';
function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId); //bq1uy
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId); //1BJKSJ
console.log(new Employee().employeeId); //bq1uy




var employeeId = 'aq123';
(function Employee() {
	try {
		throw 'foo123';
	} catch (employeeId) {
		console.log(employeeId);//// foo123 
	}
	console.log(employeeId); //aq123
}());
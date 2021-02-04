//enum true so can add property
(function() {
	'use strict';
	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';
	Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: true
	})
	console.log(Object.keys(person));  // ["name", "salary", "country", "phoneNo"]
})();

(function() {
	'use strict';
	var person = {
		name: 'John'
	};
	person.salary = '10000$';
	person['country'] = 'USA';
    Object.defineProperty(person, 'phoneNo', {
		value: '8888888888',
		enumerable: false
	})
    console.log(Object.keys(person));  //["name", "salary", "country"]
})();

(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = Object.create(objA);
	console.log(objA.toString() == objB.toString()); //true
	console.log(objA.toString() === objB.toString()); //true
}());

(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	console.log(objA == objB);
	console.log(objA === objB);
	console.log(objA.toString() == objB.toString());
	console.log(objA.toString() === objB.toString()); //true true true true
}());

(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
	console.log(objA.foo);
	console.log(objB.foo); //bar bar
}());

//important both 2 
(function() {
	var objA = Object.create({
		foo: 'foo'
	});
	var objB = objA;
	objB.foo = 'bar';
    delete objA.foo;
	console.log(objA.foo); //foo
	console.log(objB.foo); //foo
}());

(function() {
	var objA = {
		foo: 'foo'
	};
	var objB = objA;
	objB.foo = 'bar';
	delete objA.foo;
	console.log(objA.foo);
	console.log(objB.foo);
}());
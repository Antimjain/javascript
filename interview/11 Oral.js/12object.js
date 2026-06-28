(function () {
    "use strict";

    var person = {
        name: "John",
    };
    person.salary = "10000$";
    person["country"] = "USA";

    Object.defineProperty(person, "phoneNo", {
        value: "8888888888",
        enumerable: true,
    });

    console.log(Object.keys(person));
})(); // ["name", "salary", "country", "phoneNo"]

(function () {
    "use strict";

    var person = {
        name: "John",
    };
    person.salary = "10000$";
    person["country"] = "USA";

    Object.defineProperty(person, "phoneNo", {
        value: "8888888888",
        enumerable: false,
    });

    console.log(Object.keys(person));
})(); //["name", "salary", "country"]

(function () {
    var objA = {
        foo: "foo",
        bar: "bar",
    };
    var objB = {
        foo: "foo",
        bar: "bar",
    };
    console.log(objA == objB);
    console.log(objA === objB);
})(); //false false

(function () {
    var objA = new Object({ foo: "foo" });
    var objB = new Object({ foo: "foo" });
    console.log(objA == objB);
    console.log(objA === objB);
})(); //false false

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = Object.create({
        foo: "foo",
    });
    console.log(objA == objB);
    console.log(objA === objB);
})(); //false false

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = Object.create(objA);
    console.log(objA == objB);
    console.log(objA === objB);
})(); //false false

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = Object.create(objA); // new memory reference
    console.log(objA.toString() == objB.toString());
    console.log(objA.toString() === objB.toString());
})(); // true true

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = objA;
    console.log(objA == objB);
    console.log(objA === objB);
    console.log(objA.toString() == objB.toString());
    console.log(objA.toString() === objB.toString());
})(); //true true true true

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = objA;
    objB.foo = "bar";
    console.log(objA.foo); //bar
    console.log(objB.foo); //bar
})();

(function () {
    var objA = Object.create({
        foo: "foo",
    });
    var objB = objA;
    objB.foo = "bar";

    delete objA.foo;
    console.log(objA.foo); //foo Its hidden fallback prototype (__proto__): { foo: "foo" }
    console.log(objB.foo); //foo
})();

(function () {
    var objA = {
        foo: "foo",
    };
    var objB = objA;
    objB.foo = "bar";

    delete objA.foo; //The delete operator completely removes the foo key from the object in memory.
    console.log(objA.foo); //undefined
    console.log(objB.foo); //undefined
})();

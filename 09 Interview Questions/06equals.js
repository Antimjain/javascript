//question 1
function callMe(){
    obj1 = {
        name : "antim",
        age : "23"
    }

    obj2 = {
        name : "antim",
        age : "23"
    }

    console.log(obj1 == obj2);   //false
    console.log(obj1 === obj2);  //false
}
callMe();


//question 2
function call(){
    let a = new Object({
        foo: 'foo'
    })
    let b = new Object({
        foo: 'foo'
    })
    console.log(a == b);   //false
    console.log(a === b);  //false
}
call()


//question 3
function sayMe(){
    let a = Object.create({
        foo: 'foo'
    })
    let b = Object.create({
        foo: 'foo'
    })
    console.log(a == b);   //false
    console.log(a === b);  //false
}
sayMe()


//question 4
function say(){
    let a = Object.create({
        foo: 'foo'
    })
    let b = Object.create({a})
    console.log(a == b);   //false
    console.log(a === b);  //false
}
say()


//question 5
function foo(){
    let a = Object.create({
        foo: 'foo'
    })
    let b = Object.create({a})
    console.log(a.toString() == b.toString());   //true
    console.log(a.toString() === b.toString());  //true
}
foo()


//question 6
function bar(){
    let a = Object.create({
        bar: 'bar'
    })
    let b = a
    console.log(a == b);   //true
    console.log(a === b);  //true
    console.log(a.toString() == b.toString());   //true
    console.log(a.toString() === b.toString());  //true
}
bar()

//question 7
function abc(){
    let a = Object.create({
        foo: 'foo'
    })
    let b = a
    b.foo = 'bar'
    console.log(a.foo);   //bar
    console.log(b.foo);   //bar
}
abc()


//question 8
function asd(){
    let a = Object.create({
        foo: 'foo'
    })
    let b = a
    b.foo = 'bar';
    delete a.foo
    console.log(a.foo);   //foo
    console.log(b.foo);   //foo
}
asd()


//question 9
function pwd(){
    let a = {
        foo: 'foo'
    }
    let b = a
    b.foo = 'bar';
    delete a.foo
    console.log(a.foo);   //undefined
    console.log(b.foo);   //undefined
}
pwd()
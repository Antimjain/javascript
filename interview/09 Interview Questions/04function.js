var b =1 
function outer(){
    var b =2;
    function inner(){
        b ++
        var b =3
        console.log(b) //3
    }
    inner();
}
outer()

var a ={}
b = {key: 'b'}
c = {key: 'c'}
// b.toString() -> a["[object Object]"]
// c.toString() -> a["[object Object]"]
// a["[object Object]"] = 123;
// a["[object Object]"] = 456;

a[b] = 123
console.log(a[b]) //123
a[c] = 456
console.log(a[b]) //456
console.log(a[c]) //456


//FIX
const a = new Map();
const b = {key: 'b'};
const c = {key: 'c'};
a.set(b, 123);
a.set(c, 456);
console.log(a.get(b)); // 123
console.log(a.get(c)); // 456


abc()
function abc(){
    // console.log(xyz())    //xyz is not a function``
    console.log(typeof xyz)  //undefined
    var xyz = function(){

    }
}

var emp = 123
function abc(){
    emp = 456
}
abc();
console.log(emp) //456


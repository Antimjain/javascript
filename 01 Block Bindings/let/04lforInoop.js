var arr = [];
object = {
    "a": "name",
    "b": "value"
}
for(let key in object){
    console.log(key); // a b
    arr.push(key);
}
console.log(arr); //[ 'a', 'b' ]

arr.forEach(function(key){
    console.log(key); //a b
});

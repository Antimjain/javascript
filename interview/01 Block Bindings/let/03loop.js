for(let i=0 ; i<5; i++){
     console.log(i) //0 to 4
}
// console.log(i) //ReferenceError: i is not defined


var arr = [];
for(let i = 0 ; i<5; i++){
    arr.push(i);
}
// console.log(arr); //[ 0, 1, 2, 3, 4 ]


arr.forEach(function(val){
     console.log(val)  //1 2 3 4
}) 


for (let i = 0; i < 10; i++) {
    process(items[i]);
}
// i is not accessible here - throws an error
console.log(i);
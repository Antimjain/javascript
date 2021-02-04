// Modifies the original array(mutable)
// Returns the deleted elements as array
// Used to insert or delete elements to/from array



let arr = [1,2,3,4,5]
// arr.splice(3)   
// console.log(arr)  [ 1, 2, 3 ]

//insert
arr.splice(1,0,"antim")   //1st index   0 means insert and last param is args
console.log(arr)          //[ 1, 'antim', 2, 3, 4, 5 ]

//remove
arr.splice(1,1)
console.log(arr)      //[ 1, 2, 3, 4, 5 ]

//remove and insert 
arr.splice(2,1,"upsert");
console.log(arr);      //[ 1, 2, 'upsert', 4, 5 ]

//delete count
arr.splice(2, 3);
console.log(arr); //[ 1, 2 ]

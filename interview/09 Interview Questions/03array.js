//1... do empty an array
let arr = [1,2,3,4];

arr.length = 0
console.log(arr)           // []


arr = []
console.log(arr)           //[]


arr.splice(0, arr.length);
console.log(arr)          //[]


while (arr.length>0){
    arr.pop() 
    // [ 1, 2, 3 ]
    // [ 1, 2 ]
    // [ 1]
    console.log(arr) //[]
}

// 2... how to check if object is an array or not 
arr = [76,88]
Array.isArray(arr) 
console.log(Array.isArray(arr)) //true

//3
let array = new Array('100');
console.log(array) //[ '100' ]
console.log(array.length) //1

//4
let array = new Array(100);
console.log(array) //[ <100 empty items> ]
console.log(array.length) //100

// 5
let array1 = [];
let array2 = new Array(100);
let array3 = new Array(['1','2','3','4','5','6'])
console.log(array1) //[]
console.log(array2) //[ <100 empty items> ]
console.log(array3) //[ [ '1', '2', '3', '4', '5', '6' ] ]
console.log(array3.length) //1


// 6
let array = new Array('a','b','c')
array[10] = 'n'
delete array[10]
console.log(array.length) //1

//7
let animal = ['cow','cat']
animal.push('dog')
animal.push('horse')
console.log(animal.length) //4


//7
let ani = ['cow','cat']
ani.push('dog')
ani.unshift('horse')
console.log(ani)  //[ 'horse', 'cow', 'cat', 'dog' ]
console.log(ani.length) //4


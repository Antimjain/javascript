// arr.indexOf(searchElement[, fromIndex])
var array = [1,2,3,4,5,6]
console.log(array.indexOf(0)) //-1      
console.log(array.indexOf(1)) //0   1 ka index 0
console.log(array.indexOf(2)) //1
console.log(array.indexOf(2, 3)) //-1
console.log(array.indexOf(2, 10)) //-1
console.log(array.indexOf(3)) //2
console.log([{name:'joe'},{name:'john'}].indexOf({name:'john'}))   //-1
console.log([[1,2,3,4,5]].indexOf([3]))   //-1
console.log("asdfegh".indexOf('e')) //4

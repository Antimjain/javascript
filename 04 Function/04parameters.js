function reflect(val){
    return val;
}

let res = reflect(9,5);
console.log(res) //9
console.log(reflect.length) //1   no of parameter              

reflect = function() {
    return arguments[0];
    // return arguments[1];
};
console.log(reflect("Hi!"));     // "Hi!"       
console.log(reflect("Hi!", 25)); // "Hi!"       
console.log(reflect.length);     // 0         
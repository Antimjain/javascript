var msg = "hello world";
//start with 0 index
console.log(msg.includes("hello")); //true
console.log(msg.includes("world")); //true
console.log(msg.includes("i"));     //false
console.log(msg.includes("o", 8));  //false 
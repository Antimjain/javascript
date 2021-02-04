var msg = "Hello world";
//start with 0 index
console.log(msg.startsWith("Hello")); //true
console.log(msg.startsWith("world")); //false
console.log(msg.startsWith("0"));     //false
console.log(msg.startsWith("o", 4));  //true 
var book = {
  title: "js book"
}
  
console.log("title" in book) //true
console.log(book.hasOwnProperty("title")) //true

console.log("hasOwnProperty" in book) //true
console.log(book.hasOwnProperty("hasOwnProperty")) //false (prototype property)

console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true
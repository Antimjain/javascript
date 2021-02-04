// Modifying Object.prototype
Object.prototype.add = function(value) {
    return this + value;
};

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};

console.log(book.add(5)); // [object Object]5
console.log("title".add("end")); //  titleend

// in a web browser
// console.log(document.add(true)); // "[object HTMLDocument]true"
// console.log(window.add(5)); // "[object Window]true"

var empty = {};
for (var property in empty) {
    console.log(property);
}

var empty = {};
for (var property in empty) {
    if (empty.hasOwnProperty(property)) {
        console.log(property);
    }
}
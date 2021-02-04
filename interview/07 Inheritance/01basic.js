// Methods Inherited from Object.prototype

// hasOwnProperty()        Determines whether an own property with the given name exists
// propertyIsEnumerable()  Determines whether an own property isenumerable
// isPrototypeOf()         Determines whether the object is the prototype of another
// valueOf()               Returns the value representation of the object
// toString()              Returns a string representation of the object

var now = new Date();
var earlier = new Date(2010, 1, 1);
console.log(now > earlier); // true

var book = {
    title: "The Principles of Object-Oriented JavaScript"
};
var message = "Book = " + book;
console.log(message); // Book = [object Object]"

var book = {
    title: "The Principles of Object-Oriented JavaScript",
    toString: function() {
        return "[Book " + this.title + "]"
        // Book = [object Object]
    }
};
var message = "Book = " + book;
console.log(message); //Book = [Book The Principles of Object-Oriented JavaScript]
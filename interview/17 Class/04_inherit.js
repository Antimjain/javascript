// ECMA 5
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
 }
 Rectangle.prototype.getArea = function() {
  return this.length * this.width;
 };
 function Square(length) {
  Rectangle.call(this, length, length);
 }
 Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
  value: Square,
  enumerable: true,
  writable: true,
  configurable: true
  }
 });
 var square = new Square(3);
 console.log(square.getArea()); // 9
 console.log(square instanceof Square); // true
 console.log(square instanceof Rectangle); // true












// ECMA 6
 class Rectangle {
  constructor(length, width) {
  this.length = length;
  this.width = width;
  }

  getArea() {
    return this.length * this.width;
    }
   }


class Square extends Rectangle {
    constructor(length) {
        // equivalent of Rectangle.call(this, length, length)
        super(length, length);
    }
}
var square = new Square(3);
console.log(square.getArea()); // 9
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true













// Shadowing Class Methods
class Square extends Rectangle {
    constructor(length) {
    super(length, length);
    }
    // override and shadow Rectangle.prototype.getArea()
    getArea() {
    return this.length * this.length;
    }
   }



   class Square extends Rectangle {
    constructor(length) {
    super(length, length);
    }
    // override, shadow, and call Rectangle.prototype.getArea()
    getArea() {
    return super.getArea();
    }
   }
const Parent = function() {
    this.name = "Parent";
}
Parent.prototype.greet = function() { console.log("hello from Parent"); }
const child = Object.create(Parent.prototype);
child.cry = function() {
    console.log("waaaaaahhhh!");
}
child.cry();
// Outputs: waaaaaahhhh!
child.greet();
// Outputs: hello from Parent

// child.constructor
// ƒ () {
//     this.name = "Parent";
// }
// child.constructor.name
// "Parent"
function Child() {
    Parent.call(this);
    this.name = 'child';
  }
  
Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;

const c = new Child();

c.cry();
// Outputs: waaaaaahhhh!

c.greet();
// Outputs: hello from Parent

c.constructor.name;
// Outputs: "Child"
// Nested Object Destructuring
let node = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 10,
      column: 15
    },
    end: {
      line: 1,
      column: 4
    }
  }
};

let {loc:{start}, loc:{end:{line}}} = node
console.log("loc", start, line)

console.log(start.line); // 1
console.log(start.column); // 1


let node1 = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 10,
      column: 15
    },
    middle: {
      line: 25,
      column: 35
    },
    end: {
      line: 1,
      column: 4
    }
  }
};

let {loc:{middle:middleName}} = node1
console.log("middleName", middleName.line)


// no variables declared!
let { loc: {} } = node;
let node = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end: {
      line: 1,
      column: 4
    }
  },
  range: [5, 3]
};


let { loc: { start }, range: [ startIndex, lastIndex ]} = node;
console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex, lastIndex); // 5, 3
 

//  Default Values for Destructured Parameters

function setCookie(name, value,
  {
  secure = false,
  path = "/",
  domain = "example.com",
  expires = new Date(Date.now() + 360000000)
  } = {}
 ) {
  // empty
}
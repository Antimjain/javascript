// Create a function that, given a DOM Element on the page, will visit the element itself and all of its descendents (not just its immediate children). For each element visited, the function should pass that element to a provided callback function.

// The arguments to the function should be:

// a DOM element
// a callback function (that takes a DOM element as its argument)

function Traverse(p_element,p_callback) {
  p_callback(p_element);
  var list = p_element.children;
  for (var i = 0; i < list.length; i++) {
      Traverse(list[i],p_callback);  // recursive call
  }
}







// The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        nextListItem();
    }
};

// The potential stack overflow can be avoided by modifying the nextListItem function as follows:

var list = readHugeList();

var nextListItem = function() {
    var item = list.pop();

    if (item) {
        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
// The stack overflow is eliminated because the event loop handles the recursion, not the call stack. When nextListItem runs, if item is not null, the timeout function (nextListItem) is pushed to the event queue and the function exits, thereby leaving the call stack clear. When the event queue runs its timed-out event, the next item is processed and a timer is set to again invoke nextListItem. Accordingly, the method is processed from start to finish without a direct recursive call, so the call stack remains clear, regardless of the number of iterations.











// Assuming d is an “empty” object in scope, say:

var d = {};
// …what is accomplished using the following code?

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});

// The snippet of code shown above sets two properties on the object d. Ideally, any lookup performed on a JavaScript object with an unset key evaluates to undefined. But running this code marks those properties as “own properties” of the object.

// This is a useful strategy for ensuring that an object has a given set of properties. Passing this object to Object.keys will return an array with those set keys as well (even if their values are undefined).





// Consider the following code snippet:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }
// (a) What gets logged to the console when the user clicks on “Button 4” and why?

// (b) Provide one or more alternate implementations that will work as expected.



// (a) No matter what button the user clicks the number 5 will always be logged to the console. This is because, at the point that the onclick method is invoked (for any of the buttons), the for loop has already completed and the variable i already has a value of 5. (Bonus points for the interviewee if they know enough to talk about how execution contexts, variable objects, activation objects, and the internal “scope” property contribute to the closure behavior.)

// (b) The key to making this work is to capture the value of i at each pass through the for loop by passing it into a newly created function object. Here are four possible ways to accomplish this:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', (function(i) {
//     return function() { console.log(i); };
//   })(i));
//   document.body.appendChild(btn);
// }
// Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   (function (i) {
//     btn.addEventListener('click', function() { console.log(i); });
//   })(i);
//   document.body.appendChild(btn);
// }
// Or, we could replace the for loop with a call to the array object’s native forEach method:

// ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function() { console.log(i); });
//   document.body.appendChild(btn);
// });
// Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:

// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }







function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}






var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();





(() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x);
    }
    console.log(x);
    console.log(y);
  })();





  [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
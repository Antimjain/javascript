/* A promise is a placeholder for the result of an asynchronous operation.
Instead of subscribing to an event or passing a callback to a function, the
function can return a promise, as shown here: */

/* The Promise Life Cycle 
1. Fulfilled The promise’s asynchronous operation has completed
successfully.
2. Rejected The promise’s asynchronous operation didn’t complete
successfully due to either an error or some other cause. 

*/

// Note Any object that implements the then() method as described in the preceding paragraph is called a thenable. All promises are thenables, but all thenables are not
// promises

// readFile promises to complete at some point in the future
let promise = readFile("example.txt");
promise.then(function(contents) {
    // fulfillment
    console.log(contents);
    }, function(err) {
    // rejection
    console.error(err.message);
    });
    promise.then(function(contents) {
    // fulfillment
    console.log(contents);
    });
    promise.then(null, function(err) {
    // rejection
    console.error(err.message);
});




let promise = readFile("example.txt");
// original fulfillment handler
promise.then(function(contents) {
    console.log(contents);
    // now add another
    promise.then(function(contents) {
        console.log(contents);
    });
});
 
// job scheduling
//  In job scheduling, you add a new job to the
// job queue to say, “Don’t execute this right now, but execute it later.

let promise = new Promise(function(resolve, reject) {
    console.log("Promise");
    resolve();
});
console.log("Hi!");

//Promise
//Hi



let promise = new Promise(function(resolve, reject) {
    console.log("Promise");
    resolve();
});

promise.then(function() {
    console.log("Resolved.");
});
console.log("Hi!");

//Promise Hi Resolved
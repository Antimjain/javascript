// Creating Settled Promises
// Using Promise.resolve()

let promise = Promise.resolve(42);
promise.then(function(value) {
 console.log(value); // 42
});

// Using Promise.reject()
let promise = Promise.reject(42);
promise.catch(function(value) {
 console.log(value); // 42
});







let thenable = {
  then: function(resolve, reject) {
    resolve(42);
  }
};
let p1 = Promise.resolve(thenable);
p1.then(function(value) {
  console.log(value); // 42
});





let thenable = {
  then: function(resolve, reject) {
  reject(42);
  }
 };
 let p1 = Promise.resolve(thenable);
 p1.catch(function(value) {
  console.log(value); // 42
 });



//  Executor Errors
let promise = new Promise(function(resolve, reject) {
  throw new Error("Explosion!");
 });
 promise.catch(function(error) {
  console.log(error.message); // "Explosion!"
 });

 
 let promise = new Promise(function(resolve, reject) {
  try {
  throw new Error("Explosion!");
  } catch (ex) {
  reject(ex);
  }
 });
 promise.catch(function(error) {
  console.log(error.message); // "Explosion!"
 });
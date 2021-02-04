let promise = readFile("example.txt");
promise.then((contents) => {
 // fulfillment
 console.log(contents);
}).catch((err) => {
 // rejection
 console.error(err.message);
});


let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});
p1.then(function(value) {
  console.log(value);
}).then(function() {
  console.log("Finished");
});

// 42
// Finished


let p1 = new Promise(function(resolve, reject) {
  throw new Error("Explosion!");
 });
 p1.catch(function(error) {
  console.log(error.message); // "Explosion!"
  throw new Error("Boom!");
 }).catch(function(error) {
  console.log(error.message); // "Boom!"
 });
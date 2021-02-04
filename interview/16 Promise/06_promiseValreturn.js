let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});
p1.then(function(value) {
  console.log(value); // "42"
  return value + 1;
}).then(function(value) {
  console.log(value); // "43"
});

//same code with rejection handler
let p1 = new Promise(function(resolve, reject) {
  reject(42);
 });
 p1.catch(function(value) {
  // first fulfillment handler
  console.log(value); // "42"
  return value + 1;
 }).then(function(value) {
  // second fulfillment handler
  console.log(value); // "43"
 });


//  Returning Promises in Promise Chains
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = new Promise(function(resolve, reject) {
  resolve(43);
 });
 p1.then(function(value) {
  // first fulfillment handler
  console.log(value); // 42
  return p2;
 }).then(function(value) {
  // second fulfillment handler
  console.log(value); // 43
 });










 let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = new Promise(function(resolve, reject) {
  resolve(43);
 });
 let p3 = p1.then(function(value) {
  // first fulfillment handler
  console.log(value); // 42
  return p2;
 });
 p3.then(function(value) {
  // second fulfillment handler
  console.log(value); // 43
 });







 let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = new Promise(function(resolve, reject) {
  reject(43);
 });
 p1.then(function(value) {
  // first fulfillment handler
  console.log(value); // 42
  return p2;
 }).then(function(value) {
  // second fulfillment handler
  console.log(value); // never called bcz p2 is rejected
 });







 let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = new Promise(function(resolve, reject) {
  reject(43);
 });
 p1.then(function(value) {
  // first fulfillment handler
  console.log(value); // 42
  return p2;
 }).catch(function(value) {
  // rejection handler called because p2 is rejected
  console.log(value); // 43 
 });








 let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 p1.then(function(value) {
  console.log(value); // 42
  // create a new promise
  let p2 = new Promise(function(resolve, reject) {
  resolve(43);
  });
  return p2
 }).then(function(value) {
  console.log(value); // 43
 });
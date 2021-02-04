/* The Promise.all() Method
The Promise.all() method accepts a single argument, which is an iterable
(such as an array) of promises to monitor, and returns a promise that is
resolved only when every promise in the iterable is resolved. The returned
promise is fulfilled when every promise in the iterable is fulfilled, */


let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});
let p2 = new Promise(function(resolve, reject) {
  resolve(43);
});
let p3 = new Promise(function(resolve, reject) {
  resolve(44);
});
let p4 = Promise.all([p1, p2, p3]);
p4.then(function(value) {
  console.log(Array.isArray(value)); // true
  console.log(value[0]); // 42
  console.log(value[1]); // 43
  console.log(value[2]); // 44
});











let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = new Promise(function(resolve, reject) {
  reject(43);
 });
 let p3 = new Promise(function(resolve, reject) {
  resolve(44);
 });
 let p4 = Promise.all([p1, p2, p3]);
 p4.catch(function(value) {
  console.log(Array.isArray(value)) // false
  console.log(value); // 43
 });
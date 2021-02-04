class MyPromise extends Promise {
  // use default constructor
  success(resolve, reject) {
  return this.then(resolve, reject);
  }
  failure(reject) {
  return this.catch(reject);
  }
 }
 let promise = new MyPromise(function(resolve, reject) {
  resolve(42);
 });
 promise.success(function(value) {
  console.log(value); // 42
 }).failure(function(value) {
  console.log(value);
 });

//  Because static methods are inherited, the MyPromise.resolve() method, the
// MyPromise.reject() method, the MyPromise.race() method, and the MyPromise.all()
// method are also present on derived promises.

let p1 = new Promise(function(resolve, reject) {
  resolve(42);
 });
 let p2 = MyPromise.resolve(p1);
 p2.success(function(value) {
  console.log(value); // 42
 });
 console.log(p2 instanceof MyPromise); // true
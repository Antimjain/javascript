// var funcs = [];
// for (var i = 0; i < 10; i++) {
//     funcs.push(function() { console.log(i); });
// }

// funcs.forEach(function(func) {
//     func();     // outputs the number "10" ten times
// });



// //solution
var funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push((function(value) {
        return function() {
            console.log(value);
        }
    }(i)));
}

funcs.forEach(function(func) {
    func();     // outputs 0, then 1, then 2, up to 9
});
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
} // 0 1 2 3 4

(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
    }, 1000);
    setTimeout(function () {
        console.log(3);
    }, 0);
    console.log(4);
})(); // 1 4 3 2

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
} // 5 5 5 5 5

function firstFunction() {
    // Simulate a code delay
    setTimeout(function () {
        console.log("First function called");
    }, 1000);
}
function secondFunction() {
    console.log("Second function called");
}
firstFunction();
secondFunction();

// Output;
// Second function called
// First function called

(function func1() {
    setTimeout(() => {
        console.log(x);
        console.log(y);
    }, 3000);

    var x = 2;
    let y = 12;
})();

(function () {
    setTimeout(() => console.log(1), 2000);
    console.log(2);
    setTimeout(() => console.log(3), 0);
    console.log(4);
})(); // 2 4 3 1

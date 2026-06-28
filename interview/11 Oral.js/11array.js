(function () {
    var array = new Array("100");
    console.log(array); //'100'
    console.log(array.length); //1;
})();

(function () {
    var array1 = [];
    var array2 = new Array(100);
    var array3 = new Array(["1", 2, "3", 4, 5.6]);
    console.log(array1); //[]
    console.log(array2); //[undefined 100 times]
    console.log(array3); //[["1", 2, "3", 4, 5.6]]
    console.log(array3.length); //1
})();

(function () {
    var array = new Array("a", "b", "c", "d", "e"); //4 idx
    array[10] = "f"; //[("a", "b", "c", "d", "e" undefined 5 times, "f"]
    delete array[10]; //["a", "b", "c", "d", "e", undefined 6 times,]
    console.log(array.length); //11
})();

(function () {
    var array = [1, 2, 3, 4, 5];
    console.log(array.indexOf(2)); //1
    console.log([{ name: "John" }, { name: "John" }].indexOf({ name: "John" })); //-1
    console.log([[1], [2], [3], [4]].indexOf([3])); //-1
    console.log("abcdefgh".indexOf("e")); //4
})();

(function () {
    var array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];
    console.log(array.indexOf(2)); //1
    console.log(array.indexOf(2, 3)); //6
    console.log(array.indexOf(2, 10)); //-1
})();

(function () {
    var numbers = [2, 3, 4, 8, 9, 11, 13, 12, 16];
    var even = numbers.filter(function (element, index) {
        return element % 2 === 0;
    });
    console.log(even); //[2, 4, 8, 12, 16]

    var containsDivisibleby3 = numbers.some(function (element, index) {
        return element % 3 === 0;
    });
    console.log(containsDivisibleby3); //true
})();

(function () {
    var containers = [2, 0, false, "", "12", true];
    var containers = containers.filter(Boolean);
    console.log(containers); //[2, "12", true]

    var containers = containers.filter(Number);
    console.log(containers); //[2, "12", true]

    var containers = containers.filter(String);
    console.log(containers); //[2, "12", true]

    var containers = containers.filter(Object);
    console.log(containers); //[2, "12", true]
})();

(function () {
    var list = ["foo", "bar", "john", "ritz"];
    console.log(list.slice(1));
    console.log(list.slice(1, 3));
    console.log(list.slice());
    console.log(list.slice(2, 2));
    console.log(list);
})();
// [ 'bar', 'john', 'ritz' ] [ 'bar', 'john' ] [ 'foo', 'bar', 'john', 'ritz' ] [] [ 'foo', 'bar', 'john', 'ritz' ]

(function () {
    var list = ["foo", "bar", "john"];
    console.log(list.splice(1));
    console.log(list.splice(1, 2));
    console.log(list);
})();
// [ 'bar', 'john' ] [] [ 'foo' ]

(function () {
    var arrayNumb = [2, 8, 15, 16, 23, 42];
    arrayNumb.sort();
    console.log(arrayNumb); // [ 15, 16, 2, 23, 42, 8 ]
})();

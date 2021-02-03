let colors = [ "red", "green", "blue" ];
let [ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"
let [ , , thirdColor ] = colors;
console.log(thirdColor); // "blue"


// Destructuring Assignment
let colors = [ "red", "green", "blue" ],
 firstColor = "black",
 secondColor = "purple";
[ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"


// Default Values
let colors = [ "red" ];
let [ firstColor, secondColor = "green" ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"
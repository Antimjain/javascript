let colors =  [ "red", 
                [ "green", "lightgreen" ], 
                "blue" 
              ];
// later
let [ firstColor, [ secondColor, thirdcolor ] ] = colors;
console.log(firstColor); // "red"
console.log(secondColor, thirdcolor); // "green", lightgreen
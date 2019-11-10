// How to remove first character from string using JavaScript
let name = "antim";
let length = name.length;
let newStr = "";

for(i = 1; i<=length-1; i++){
    newStr += name[i]
}

console.log(newStr);
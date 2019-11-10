// // Convert String To Number
// function str(str){
//     return Number(str)
// }
// console.log(str("20"))


// function removeLast(str){
    
//     // return Number(str)
// }
// console.log(removeLast("antim"))

function noReverse(no){
    debugger;
    let rev = 0;
    while ( no != 0 ) {
        mod = no % 10;
        rev = rev*10+mod;
        no = parseInt(no/10);
    }
    return rev;
}

let pal = 23846823;
let rev = noReverse(pal);
let isPalindrome = pal === rev ? true: false;
console.log(isPalindrome);
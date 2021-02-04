function callMe(a,b,...c){
    return c
}

let data = callMe(1,2,3,4,6,7,7)
console.log(data) //[ 3, 4, 6, 7, 7 ]

console.log(callMe.name) //callMe
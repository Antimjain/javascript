// for(let i=1; i<=5; i++){
//     // console.log(i)
//     let str = ""
//     for(let j=0; j<i; j++){
//         str += "* "
//     }
//     console.log(str)
// }

// let n= 10
// for(i=0; i<=n; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }


// function factorial(n){
//     let res = 1;
//     for(i=n; i>=1; i--){
//         res *= i
//     }
//     return res;
// }

// console.log(factorial(3));

// function recursiveFactorial(n){
//     if(n==1){
//         return 1;
//     }
//     return n* recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(100));



// function fibonacci(n){
//     let arr = [1,1]
//     for(i=2; i<n; i++){
//         let res = arr[i-1] + arr[i-2]
//         arr.push(res)
//     }
//     console.log(arr)
// }
// fibonacci(5)


// function fib(n){
//     let prev1 = 1
//     let prev2 = 1
//     for(i=0; i<n-2; i++){
//         let sum = prev1 + prev2;
//         prev1 = prev2
//         prev2 = sum;
//         if(sum <= 2){
//             console.log(1)
//             console.log(1)
//         } 
//         console.log(sum)
//     }
// }
// fib(6)

function fib(n){
    let prev1 = 1
    let prev2 = 1
    let sum = 0
    while(true){
        sum = prev1 + prev2;
        if(sum>n) {break;}
        [prev1, prev2] = [prev2, sum]
        if(sum <= 2){
            console.log(1)
            console.log(1)
        } 
        console.log(sum)
    } 
}
fib(100)
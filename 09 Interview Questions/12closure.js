// for(i = 0 ; i<=5; i++){
//     setTimeout(()=>{
//         console.log(i)
//     }, i*1000 ) //6 6 6 6 6 6
// }

for(i = 1 ; i<=5; i++){
    (function(){
        var j =i
        setTimeout(()=>{
            console.log(j)
        }, j*1000 ) //1 2 3 4 5 
    })()
}

for(i = 1 ; i<=5; i++){
    (function(){
        var j =i
        setTimeout(()=>{
            console.log(j)
        }, j*1000 ) //1 2 3 4 5 
    })(i)
}

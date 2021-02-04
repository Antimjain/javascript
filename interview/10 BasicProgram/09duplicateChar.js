// function isDuplicate(str){
//     let length = str.length;
//     for(i=0; i<=length; i++){
//         for(j=i+1; j<=length; j++){
//             if( str[i] == str[j]){
//                return true
//             }
//         }
//     }
//     return false
// }
// console.log(isDuplicate("foobar"));


function charCount(str,char){
    let length = str.length;
    let count = 0
    for(i=0; i<=length; i++){
        if( str[i] == char){
            count ++
        }
    }
    return count
}
console.log(charCount("antimaaaaa", "a"));

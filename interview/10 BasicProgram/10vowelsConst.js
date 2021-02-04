// count vowels and consonants in a given String
// function isVowels(str[i]){
//     if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ){
//         console.log("Vowels")
//     }else{
//         console.log("consonant")
//     } 
// }

// isVowels("n")


function vCount(str){
    let length = str.length
    let vowels = 0;
    var consonants = 0;
    for(i=0; i<=length-1; i++){
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" ){
            vowels += 1;
        }else {
            consonants ++
        }
       
    }
    console.log("vowels",vowels)
    console.log("consonants",consonants)
}
vCount("antimjain")
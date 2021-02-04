function isPrime(no){
    for(i=2; i<no; i++){
        if(no%i === 0){
            console.log("No is not Prime")
            return;
        }
    }
    console.log("No is Prime")
}

isPrime(89)
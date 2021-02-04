function isAmstrong(no){
    const strNo = ''+no
    let sum = 0
    for(i=0; i<=strNo.length-1; i++){
        sum += parseInt(strNo[i])**strNo.length;
    }
    if ( sum == no ) {
        console.log("This is amstrong No")
    } else {
        console.log("This is not amstrong No")
    }
}

isAmstrong(3711)
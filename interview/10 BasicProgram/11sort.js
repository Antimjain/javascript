let arr = [10,8,3,7,2];
length = arr.length;
for(i=0; i<length; i++){
    for(j=length-1; j>i; j--){
        if(arr[j]<arr[j-1]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }
    }
    console.log(arr)
}

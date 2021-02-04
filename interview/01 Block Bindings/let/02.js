//The Temporal Dead Zone
console.log(typeof name) //undefined
if(true){
    // console.log(typeof name) //name is not defined
    let name = "antim";
    console.log(typeof name) // string
}
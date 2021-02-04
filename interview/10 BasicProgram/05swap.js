// Program to swap two numbers
function swap(a,b){
    [a,b] = [b,a]
    console.log(a)
    console.log(b)
}
swap(10,20)


function swapping(a,b){
    a = a+b
    b = a-b
    a = a-b
    console.log(a)
    console.log(b) 
}
swapping(50,30)


function swap3rd(a,b){
    let temp = a
    a = b
    b = temp
    console.log(a)
    console.log(b) 
}
swap3rd(40,80)
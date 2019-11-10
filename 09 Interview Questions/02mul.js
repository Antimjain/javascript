console.log(mul(2)(3)(4)); //24

function mul(x){
    return function(y){
        return function(z){
            return x * y* z;
        }
    }
}
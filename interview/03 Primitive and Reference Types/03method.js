var name = "Antim";
console.log(name.toLowerCase()); //antim
console.log(name.charAt(0))      //A  index 0 
console.log(name.substring(2,4)) //ti
console.log(name.substring(1,3)) //nt

var number =10.6543;
console.log(number.toFixed(3)); //10.654
console.log(number.toString(16));  //a.a780346dc5d6


var flag = true;
console.log(flag.toString());  //true

/*Despite the fact that they have methods, primitive values themselves are not objects.
JavaScript makes them look like objects to provide a consistent experience in the
language, as you’ll see later in this chapter.*/
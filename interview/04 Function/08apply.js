//programmer dont know about the parameter to be pass
function sayNameForAll(label) {
    console.log(label + ":" + this.name);
}
var person1 = {
    name: "Nicholas"
};

var person2 = {
    name: "Greg"
};

name = "Michael";

sayNameForAll.apply(this, ["global"]); // outputs "global:Michael" //jsbin
sayNameForAll.apply(person1, ["person1"]); // outputs "person1:Nicholas"
sayNameForAll.apply(person2, ["person2"]); // outputs "person2:Greg"
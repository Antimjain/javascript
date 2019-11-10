var person = (function() {
    var age = 25;
    function getAge() {
        return age;
    }
    function growOlder() {
        age++;
    }
    return {
        name: "Nicholas",
        getAge: getAge,
        growOlder: growOlder
    };
}());

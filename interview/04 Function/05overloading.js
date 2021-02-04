// // in js appears in last will win
function sayMessage(message) {
    console.log(message);
}
function sayMessage() {
    console.log("Default message");
}
sayMessage("Hello!"); //Default message


var sayMessage = new Function("message", "console.log(message);");
sayMessage = new Function("console.log(\"Default message\");");
sayMessage("Hello!"); // outputs "Default message"


function sayMessage(message) {
    if (arguments.length === 0) {
        message = "Default message";
    }
    console.log(message); //Hello!
}
sayMessage("Hello!");  
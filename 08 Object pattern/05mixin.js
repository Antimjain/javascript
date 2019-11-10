function EventTarget(){
}
EventTarget.prototype = {
    constructor: EventTarget,
    addListener: function(type, listener){
        // create an array if it doesn't exist
        if (!this.hasOwnProperty("_listeners")) {
            this._listeners = [];
        }
        if (typeof this._listeners[type] == "undefined"){
            this._listeners[type] = [];
        }
        this._listeners[type].push(listener);
    },
    fire: function(event){
        if (!event.target){
            event.target = this;
        }
        if (!event.type){ // falsy
            throw new Error("Event object missing 'type' property.");
        }
        if (this._listeners && this._listeners[event.type] instanceof Array){
            var listeners = this._listeners[event.type];
            for (var i=0, len=listeners.length; i < len; i++){
                listeners[i].call(this, event);
            }
        }
    },
    removeListener: function(type, listener){
        if (this._listeners && this._listeners[type] instanceof Array){
            var listeners = this._listeners[type];
            for (var i=0, len=listeners.length; i < len; i++){
                if (listeners[i] === listener){
                    listeners.splice(i, 1);
                    break;
                }
            }
        }
    }
};

var target = new EventTarget();

target.addListener("message", function(event) {
    console.log("Message is " + event.data);
})

target.fire({
    type: "message",
    data: "Hello world!"
});

var person = new EventTarget();
person.name = "Nicholas";
person.sayName = function() {
    console.log(this.name);
    this.fire({ type: "namesaid", name: name });
};


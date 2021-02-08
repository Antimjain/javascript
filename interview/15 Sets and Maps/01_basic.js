// custom implementations of sets and maps using nonarray objects.
// A set is a list of values that cannot contain duplicates


// A map is a collection of keys that correspond to specific value.


// What is a WeakSet
// store a collection of weakly(weak references) held objects. 
var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user);    // true
ws.delete(user); // removes user from the set
ws.has(user);    // false, user has been removed
ws.length(); //2


// What are the differences between WeakSet and Set
// The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it. Other differences are,

// Sets can store any value Whereas WeakSets can store only collections of objects
// WeakSet does not have size property unlike Set
// WeakSet does not have methods such as clear, keys, values, entries, forEach.
// WeakSet is not iterable.



// The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. 
// In this case, keys must be objects and the values can be arbitrary values. The syntax is looking like as below,
var ws = new WeakMap();
 var user = {};
 ws.set(user);
 ws.has(user);    // true
 ws.delete(user); // removes user from the map
 ws.has(user);    // false, user has been removed


//  What are the differences between WeakMap and Map
// The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,

// Maps can store any key type Whereas WeakMaps can store only collections of key objects
// WeakMap does not have size property unlike Map
// WeakMap does not have methods such as clear, keys, values, entries, forEach.
// WeakMap is not iterable.

var weakMapObject = new WeakMap();
var firstObject = {};
var secondObject = {};
// set(key, value)
weakMapObject.set(firstObject, 'John');
weakMapObject.set(secondObject, 100);
console.log(weakMapObject.has(firstObject)); //true
console.log(weakMapObject.get(firstObject)); // John
weakMapObject.delete(secondObject);
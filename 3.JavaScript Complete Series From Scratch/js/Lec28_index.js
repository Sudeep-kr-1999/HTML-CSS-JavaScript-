console.log("Object Prototype in javascript");

// Object Litereals
let obj = {
    name: "Harry",
    channel: "Code with harry",
    address: "Mars"
}

console.log(obj);

// in output:------------------
// when we create a object by default already defined prototype we get with the object for use!

// {name: "Harry", channel: "Code with harry", address: "Mars"}
// address: "Mars"
// channel: "Code with harry"
// name: "Harry"
// __proto__:
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()

// ============================================================================================================================

// Object Constructor:-----------
function Obj(Givenname) {
    this.name = Givenname;

}

// editiong the prototype of object !
Obj.prototype.getName = function () {
    return this.name;
}

// note:----------------------------
// hum constructor bnakr prototype ko change kr skte h but direct object literals ke prototype ko change nhi kr skte because wo by default prototype se bna ata h !

// ==================================================================================================================================================

// but we can do:--------
Object.prototype.getName = function () {
    return this.getName;
}

// here inbuilt object ke prototype mein getName add ho jaayega means prototype change kr jaayega which is not a good gesture so we should generally avoid it!!!!!!!!!
// isliye hum apne object ke prototype ko change kr skte h but by default engine ka object ke prototype ko change nhi krege!
// ===========================================================================================================================================================


let obj2 = new Obj("Sudeep Kumar");
console.log(obj2);
// isme hum ek nya prototype define kr dege upar function wla.!!!!!!!
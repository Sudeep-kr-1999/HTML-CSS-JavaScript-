console.log("This is about javascript maps");

// Maps are included in javascript from ES6 version 
// Maps in javascript :- we can use any type of key and value in maps 


// creating Map object 
const myMap = new Map();
// console.log(myMap);


// adding key value pair to Map 
const key1 = 'myStr', key2 = {}, key3 = function () { };

// setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is an empty function");

console.log(myMap);


// getting the values from a map 

let value1 = myMap.get(key1);
console.log(value1);
let value2 = myMap.get(key2);
console.log(value2);
let value3 = myMap.get(key3);
console.log(value3);


// get the size of the map 
console.log("The size of the Map is : ", myMap.size);


// You can loop using for..of to get keys and values 
for (let [key, value] of myMap) {
    console.log(key, value);
} 

// get only keys 
for(let key of myMap.keys()){
    console.log("Key is  : ",key);
}

// get only values from the map 
for(let value of myMap.values()){
    console.log("value is  : ",value);
}


// we can loop through map using for each loop 
myMap.forEach((value,key)=>{
    console.log("Key is : ",key);
    console.log("Value is :",value);
});


// converting map to an array 
let myArray=Array.from(myMap);
console.log("Map to array is : ",myArray);

// converting map keys to an array 
let mykeyArray=Array.from(myMap.keys());
console.log("Map to keys array is  : ",mykeyArray);

// converting map values to array 
let myValueArray=Array.from(myMap.values());
console.log("Map to values array is  : ",myValueArray);




console.log("this is about javascript destrcuturing");

let a, b;

// note  :------- a ko 34 and b ko 564 mil jaat hai 
[a, b] = [34, 564];
console.log(a, b);


// if we do it like this then a=1,b=2,c=3,d=4 
[a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(a, b, c, d);

// very very important 
// but if we do it like this then a=1,b=2,c=3 and rest all contained in d as an array 
// "..." is called spread operator
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(a, b, c, d);


// for objects:-------------------------------------------------------------------------------------
({ a, b, c } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
console.log(a, b, c);



({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
console.log(a, b, c, d);


// array destructuring :---------------------------------------------------------------------------
const fruits = ['apple', 'banana', 'mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);


// Object destructuring :---------------------------------------------------------------------------
let laptop = {
    model: "HP Pavilion",
    age: '23 days',
    gender: "male",
    net: 1233,
    start: function () {
        console.log("Start......!");
    }
};


// note:------- variable ke name refering Object ke variable name ke same hi hone chahiye nhi to undefined show krega
const {model, age, gender,net,start} = laptop;
console.log(model, age, gender,net,start);

// here start() function will run  
start();
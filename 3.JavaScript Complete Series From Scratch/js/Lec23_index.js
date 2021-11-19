console.log("this is about maths object in javascript");
let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;

// it will give us the exact value after division
z = x / y;
// console.log(z);

// ====================================================================================
// exploring the Math Object
z = Math;
z = Math.PI
z = Math.E;
z = Math.ceil(5.3);
z = Math.round(5.6);
z = Math.round(5.5);
z = Math.floor(5.3);

// gives the absolute value..!
z = Math.abs(-5.3);
z = Math.sqrt(49);
z = Math.pow(2, 3);
z = Math.min(2, 3, 5, 4, 7, 8, 65);
z = Math.max(2, 3, 5, 4, 7, 8, 65)
console.log(z);

// generating random number:----------------
// by default random() 0 to 1 ke between mein value deta h!
let random = Math.random();
console.log(random);

// logic.!
// a=(0,1);
// a100=a*100=(0,100);
// a10_100=10+a*(100-10);

// for 0 to 100:----------------------------
random = 100 * Math.random();


// for 50 to 100
random = 50 + (100 - 50) * Math.random();
console.log(random);











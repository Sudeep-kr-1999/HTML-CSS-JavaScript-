
// the label of time and timeEnd must be same takki pata pade ki kaun se time ko end krna hai 
console.time("your code took :");
console.log("this is about variable in javascript which is var,const and let");
console.timeEnd("your code took :");

// variable in javascript.............!
var name="sudeep";
console.log(name);

var channel=`code with sudeep`;
console.log(channel);

var marks=65;
console.log(marks);

// note:------- print in a single line in the console
console.log(name,channel,marks);


// Rules for creating javascript variable:
// 1. cannot start with numbers
// 2. can start with letter,underscore(_) or dollar($)
// 3.variable names are case sensetive

var city="Ranchi";
console.log(city);
var marks=50;
console.log(marks);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const OwnerName="Hari Ram";
console.log(OwnerName);

// this is not allowed.................!!!!!!!!
// OwnerName="sudeep";
// note:---------------const variable must be initialized without initialization we will ge the error..........!

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:----------------------------- the scope of var is global level and let is block level.........!
let myname="sudeep";
console.log(myname);

{
    let city="rampur";
    city="Kolkata";
    console.log(city);
}

console.log(city);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:--------- array ko agar constant kr dege to hum array ko redeclare nhi kr skte but us existing array mein change kr skte h(very very important).............!!!!!!!!!!!!
                //   same as with the javascript objects..........!!!!!!!!!!!!!!!!!
const arr1=[1,2,3,4,5];
arr1.push(6);
console.log(arr1);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Most important programming variable case types:------------------------\

// 1.camelCase:----------->
// 2.kabab-case--------------->
// 3.snake_case--------------->
// 4.PascalCase------------------->

// note:-------- all the names are already in their respective cases............!
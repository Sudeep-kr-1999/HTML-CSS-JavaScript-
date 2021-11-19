console.log(" this is about data types in javascript");
// there are 2 types of data types in javascript:--------
// 1. Primitive Data types:------ memory allocation is in the stack!
// 2. Reference Data types :----- memory allocation is in the heap!

// primitive data types :-----
// String ----------> "sudeep"
// number---------> 34
// Boolean ---------> true or false
// null--------------> to check wether it is null or not
// undefined ----------> jab kisi variable ko initialize nhi krte to uski default value undefined hoti h
// Symbol ------------> ES6
// var name;
// default value is undefined


// Reference data types :----------
// Arrays
// Object literals
// function
// dates


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Primitive data types:------------

// String
let myname="Sudeep Kumar";
console.log("my name is :"+myname);
console.log("my name data type is "+typeof(myname));

let marks=34;
console.log("my marks is : "+marks);
console.log("my marks data types is :"+typeof(marks));

let isDriver=true;
console.log("the value of isDriver : "+isDriver);
console.log("the data type of isDriver is :"+typeof(isDriver));

let nullVar=null;
console.log("the value of nullVar is : "+nullVar);

// it will give the output as object(very very important)
console.log("the data type of the nullVar is : "+typeof(nullVar));


let undef=undefined;
console.log("the value of undef is  :"+undef);

// it will give output as undefined data type
console.log("the data type of undef is  : "+typeof(undef));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Reference data types:------------

// Arrays
let myarr=[1,2,3,4];
console.log(myarr);
// it will return the data type as object
console.log("data type of myarr is : "+typeof(myarr));

// Object literals
// NOTE:------ Object keys donot allow spaces directly if still we want to give the spaces make it as the string.!
let stMarks={
    harry:734,
    shubhum :35,
    rohan :89
}
console.log(stMarks);
console.table(stMarks);
console.log("the type of stMarks is : "+typeof(stMarks));

// functions:----------------------------
function findname() {

}

// this will return the type as function
console.log("the type of findname function is  :"+typeof(findname));

// date:------------------------------------
let date=new Date();
console.log("the type of date is : "+typeof(date));



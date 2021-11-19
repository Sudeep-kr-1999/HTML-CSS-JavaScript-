
// type conversion:--------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("This is about Javascript type conversion and coercion");

let myvar;
myvar=34;
console.log(myvar,typeof(myvar));
myvar=String(myvar);
console.log(myvar,typeof(myvar));

let booleanvar=true;
console.log(booleanvar,typeof(booleanvar));
booleanvar=String(booleanvar);
console.log(booleanvar,typeof(booleanvar));

// let date=String(new Date());
let date=new Date();
console.log(date,typeof(date));
date=String(date);
console.log(date,typeof(date));

let arr=[1,2,3,4,5];
console.log(arr,typeof(arr));
arr=String(arr);

// note:----- array ko string mein convert krege to "1,2,3,4,5" ye pura string mein aayegaa as a text including comas hence the length of he string is 9 ....!
console.log(arr,typeof(arr));
console.log("the length of the array is :"+arr.length);


let i=8;
console.log(i,typeof(i));
i=i.toString();
console.log(i,typeof(i));

let stri="3545";
console.log(stri,typeof(stri));
stri=Number(stri);
console.log(stri,typeof(stri));

// note:--------
let strnum="3465";
console.log(strnum,typeof(strnum));
strnum="545d5";
strnum=Number(strnum);

// note:--it will show us the value of "strnum" as :NaN because when  we are converting the string to the Number we get a letter "d" which is not a number hence it show "NaN"(NOT a NUMBER)!
console.log(strnum,typeof(strnum));

let strbool=true;
console.log(strbool,typeof(strbool));
strbool=Number(strbool);

// note:- it will convert the strbool "true" as the corresponding number which is 1.
console.log(strbool,typeof(strbool));

// note:---- it will show it is not a number because a array cannot be a number
console.log(Number([1,2,3,4,5]));

let number='34';
console.log(number,typeof(number));

// it will parse the string and convert it into number and give only the integeral values
number=parseInt(number);
console.log(number,typeof(number));

let number1='54';
let number2='434.36';


// it will parse the string and convert it into number and give floating values
number1=parseFloat(number1);
number2=parseFloat(number2);
console.log(number1,typeof(number1));
console.log(number2,typeof(number2));


let number3=534.76;
// let number3=534;
// note:------ number3.toFixed(n) n ki jitni value dege utne decimal point tk number show krega........................
number3=number3.toFixed(30);
console.log(number3);


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// type coercion:-----------------------------------------------------------------------------------------------------------------------------------------------------------------
let mystr="698";
let mynum=34;

// note:------ concatenation of number and string is possible in Javascript it will convert number into string and concatenate with the string........................!(vvi)
console.log(mystr+mynum);

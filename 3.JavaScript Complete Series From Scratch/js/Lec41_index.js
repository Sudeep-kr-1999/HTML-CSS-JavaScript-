console.log("Arrow Functions");

// function harry(){
//     console.log("this is the tutorial about arrow functions in javascript");

// }
//    harry();
//

// ======================================================================================================================================================================

// const harry=function(){
//     console.log("this is the tutorial about arrow functions in javascript");
// }

// harry();

// =======================================================================================================================================================================

// <---------------------------------------------------------------ARROW FUCTION---------------------------------------------------------------------------------------->

// const harry=()=>{
//     console.log("this is the tutorial about arrow function in javascript and this is the arrow function");
// }
// harry();

// =======================================================================================================================================================================

// const greet=function(){
//     return `good morning`;
// }

// console.log(greet());

const greet=()=>{
    return `good morning from greet`;
}

console.log(greet());


// Note:------------- one liner function donot require braces and return too it will automatically return.
const greet1=()=>'good morning from greet1';
console.log(greet1());


// very very important"------------
// note :-- if we want to return object in one linear then we have to use parenthesis 
const obj=()=>({name:'sudeep'});
console.log(obj());

// =========================================================================================================================================================================
// arrow function with arguments:-

// const greet2=(name)=>'good morning '+name;

// we can also write like that if there is only one argument:
const greet2=name=>'good morning '+name;

console.log(greet2('Sudeep'));

// note:-----if there is more than one argument then parenthesis is required:---

const greet3=(namegiven,ending)=>'good morning '+namegiven+" "+ending;
console.log(greet3('sudeep','kumar'));
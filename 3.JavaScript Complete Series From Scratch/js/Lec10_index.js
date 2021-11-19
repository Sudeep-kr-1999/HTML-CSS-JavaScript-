// console.log("This is about functions and scope in javascript");

// // function definition:--------------------
// // here thanks is holding a default value means agr hum thanks wla argument paas krege to wo passed value lega nhi to ye default value le lega.............!
// // function greet(name,thanks="thank you fucntion"){
// //     console.log(`happy birthday ${name} wish u a great future ahead and ${thanks}`);
// //     return " function greeted to the person";
// // }
// // let myname="skillf";
// // let myname2="Sudeep";
// // // console.log(`happy birthday ${myname} wish u a great future ahead.`);
// // // console.log(`happy birthday ${myname2} wish u a great future ahead.`);

// // // function calling:----------------------
// // greet(myname,"thanks a lot");
// // let val=greet(myname2);
// // console.log(val);


// // ------------------------------------------------------------------------------------------------------------------------------------------------------
// // funciton as a variable:-------------------------
// const mygreet=function(name,thanks="thank you fucntion"){
//         console.log(`happy birthday ${name} wish u a great future ahead and ${thanks}`);
//         return " function greeted to the person";
//     }

// let myname="skillf";
// let myname2="Sudeep";
// let val=mygreet(myname,"thanks a lot");
// mygreet(myname2);

// const myobj={
//     name:"sudeep",
//     game:function(){
//         return "it is a game";
//     }
// }

// // this will return game as a variable
// console.log(myobj.game);

// // this will return game as a function
// console.log(myobj.game());

// let arr=['fruits','vegetable','furniture'];
// arr.forEach(function(element,index,array) {
//     console.log(element,index,array);
// });


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// scope concept:----------------------
let i=234;
console.log(i);
function ui(name){
    // var i=9;

    // note:------------- it will modify global i
    // i=9;

    let i=9;
    i=10;
    console.log(i);
    return `this is a ${name} ui`;
}
console.log(ui("sudeep"),i);

// note:---------- var is having a function level scope and let is having a block level scope...!(very very important)!!!!!!!!!!!!!!!!
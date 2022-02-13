console.log("This is about for , while and dowhile loops in javascript programming");
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// types of looping statement:--------------
// 1.for loop
// 2. while loop
// 3. do while

// note :--------------------
// let a = 1;
// a = a + 1;
// a += 1;
// a++;
// ++a;
// console.log(a);

// abve all the four operator method increase the value a by one one by one.............!
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {
//     console.log("the value is : " + i);
// }

// let j=0;
// while(j<10){
//     console.log("the value is : "+j);
//     // note:------------ if we donot update the value we will go inside the infinite loops
//     j++;
// }


// note:--------------- do while loop at least ek baar to paake se chalega irrespective of Condition is true or false
// let k = 0;
// do {
//     console.log("the value is : " + k);
//     k++;

// } while (k < 10);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// break and continue statements:--------------------------------
// note:----------- break condition aane pr programme loop se exit kr jaayega direct
// continue conditon generally step skip krne ke kaam mein aata h conditon match krne pr wo bina kuch kiye next step pr continue kr jaayega is step ko skip krke!
// let k = 0;
// do {
//     console.log("the value is : " + k);
//     if(k===5){
//         break;
//     }
//     k++;

// } while (k < 10);

// console.log("done");


// let k = 0;
// do {
//     if(k===5){
//         k+=1;
//        continue;
//     }
//     console.log(k+1);
//     k++;

// } while (k < 10);

// console.log("done");

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
let arr = [2, 5, 6, 4, 2, 3];

// in this case the numbers are printed in the console 
for(let i=0;i<arr.length;i++){
    console.log(arr[i],typeof(arr[i]));
}


// forEach loop in javascript:--------------------------------------------
arr.forEach(function (element, index, array) {
    console.log(element, index, array);
});


let obj = {
    name: "Rohan Das",
    age: 78,
    type: "dangerous aadmi",
    os: "windows"

}

// for in loop:---------------------------------------------------------------
for (let key in obj) {
    console.log(obj[key]);
}

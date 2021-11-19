console.log("this is about if else statement and switch cases in javascript");

const age=28;
if (age==19){
    console.log("the age of the man is 19 years old");
}

else if(age==65){
    console.log("the age is 65");

}
else{
    console.log("the age is not 19");
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
const age1='65';
if (age1===19){
    console.log("the age of the man is 19 years old");
}

else if(age1===65){
    console.log("the age is 65");

}
else{
    console.log("the age is not 19");
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


const age2='65';
if (age2!=19){
    console.log("the age of the man is 19 years old");
}

else if(age2==65){
    console.log("the age is 65");

}
else{
    console.log("the age is not 19");
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


const age3='65';
if (age3!==19){
    console.log("the age of the man is 19 years old");
}

else if(age3==65){
    console.log("the age is 65");

}
else{
    console.log("the age is not 19");
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------


// note:-----  double equalto(==) sirf value compare krta h irrespective of numberstring compare with the number itself but if we use tripleequalto(===) then it compare both type and value.
            //    there is also notequal to(!=) to compare value and notdoubleequalto(!==)to compare both type and value.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
const vari=34;
if(typeof vari!=='undefined'){
    console.log("vari is defined");

}

else{
    console.log("vari is not defined");
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
const doesDrive=true;
if(doesDrive){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}

// we can use "&&" and "||" (logical AND and Logical OR operator also)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// ternary operator:----------------------

console.log(age>18?"you can drive":"you cannot drive");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// switch case statement:-----------------
switch (age) {
    case 18:
        console.log("you are of age 18");
        break;
    case 28:
        console.log("you are of age 28");
        break;
    default:
        console.log("you are not of age given above");
        break;
}
// break ko nhi lgayege to jha pr match krege wha se default tk jb tk break n mile saare cases execute krega.........................
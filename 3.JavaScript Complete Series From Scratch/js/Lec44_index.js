console.log("this is about error handling and try catch block in javascript ");

// Pretend this is coming from the server as response 
let a = "Harry Bhai";
a = undefined;
// throw custom error 
if (a != undefined) {
    throw new Error('This is not undefined');
    console.log("this is not undefined")
}
else {
    console.log("this is undefined");
}

// =========================================================================================================

// try catch block for exception and error handling
try {
    // jlkjlkfsljsl
    console.log("we are inside try block");
    functionharry();
} catch (error) {
    console.log("Are you ok");

    // note:------- it will give the error text as output 
    console.log(error);

    // only give the name of the error 
    console.log(error.name);

    // it prints the message given by that error 
    console.log(error.message);


}

finally { console.log("this is finally it will execute irrespective of error status"); }

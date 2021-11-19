console.log("Manipulating Websites Using JS Window Object.");
console.log("this is about DOM(Doucment object model in javascript)");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// note:----------- here window is the Object of the javascript which is automatically global!
//    hence we can write window.Function() or directly function();
// let a=window;
// window.alert("hello harry");
// alert("hello sudeep");
// console.log(a);

// let b=prompt("this will destroy your computer");

// confirm assign a Boolean variable:-------------------
// let c=confirm("are you really confirm?");
// console.log(c);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let a = window;

// it is also called DOM
console.log(window.document);
a = window.innerHeight;
a = window.innerWidth;
a = scrollX;
a = scrollY;

// note:-----------location is a object
a = location;

// note:-------- it will reload the pages
// console.log(location.reload());
// console.log(location.href);

// note:------ ye seedhe facebook.com pr chla jaayega..!
// location.href="//facebook.com";

// location.toString():----- website link ko string mein print kr Dega..!
console.log(location.toString());

// window.history:----- ye ek object h jha saari history ki information save hogi
// history.go(-1):------- > ek step peche jo website pr the wha le jaayega..!
a = window.history;
console.log(a);
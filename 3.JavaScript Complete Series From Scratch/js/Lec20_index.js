// note:--- localStorage  window library ke andar hota h
// note:------ localStorage is a Object type
// console.log("This is about Load and session storage in javascript");

// // setting items with key value pairs in localStorage
// localStorage.setItem('Name','Sudeep');
// localStorage.setItem('Name2','Priyanshu');

// // getiing the value from the local Storage
// let name1=localStorage.getItem('Name');
// console.log(name1);
// let name2=localStorage.getItem('Name2');
// console.log(name2);

// // note:---- if we try to get the value of that item which is not present in localStorage then we will get 'null';

// // to clear the entire localStorage
// // localStorage.clear();

// // clear particular key value pair
// localStorage.removeItem('Name');


// // NOTE:-------- WE GENERALLY CANNOT ADD ARRAY IN THE LOCAL STORAGE
// let impArray=['Adrak','Pyaz','Bhindi'];

// // generally array element ko string mein convert krke store krega..!
// // localStorage.setItem('Sabzi',impArray);


// // ye whole array ko with brackets stirng mein convert krke save krta h
// localStorage.setItem('Sabzi',JSON.stringify(impArray));

// // ye string ki trah array ko show krega
// console.log(localStorage.getItem('Sabzi'));



// // note:-------------
// // array ko as it is retrive krne ke liye
// console.log(JSON.parse(localStorage.getItem('Sabzi')));

// ======================================================================================================================================================
// note:------- sessionStorage ka data sirf ek session ke liye rhega uske baad delete ho jaayega
sessionStorage.setItem('SessionName','Sudeep');
sessionStorage.setItem('SessionName2','Priyanshu');
let impArray=['Adrak','Pyaz','Bhindi'];
sessionStorage.setItem('SessionSabzi',JSON.stringify(impArray));

// to clear sessionStorage
sessionStorage.clear();


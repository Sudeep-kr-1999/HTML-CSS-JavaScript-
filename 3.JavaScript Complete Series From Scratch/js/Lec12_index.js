console.log("Understanding DOM And Creating Website Layout");

let a = document;
console.log(a);
// document is also a DOM structure here which is having a tree structure......!

// note:---------- document.all html ke saare page deta h...!
// a = document.all;
// console.log(a);


// note:---------- ye document ke saare body de Dega!!
// a=document.body;
// console.log(a);

// note:------- ye document ke saare forms de Dega!
// a=document.forms;
// console.log(a);

// note:---- for multiple forms we can use:-----------------
// document.forms[0];
// document.forms[1]; like this:------!

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:------ yha pr direct array ki trah document ko iterate nhi kr skte to Array.from(a) ki madad se hum "a" ko use krke ek array bna lege aur usme iterate krege!!!!!
//   Basically hum "a" ka hum ek Array bna lege aur usme iterate krege...!

// it is like named constructor from ke andar jo bhi hoga uske element ka array bn jaayega 
Array.from(a).forEach(function(element){
    console.log(element);
})

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:------ it will give us the link object in which we can se the number of links stored or other information.............!
a = document.links;

// note:-------- it will give you the first link in the document
a = document.links[0];

// note:------ it will give the href value in the link selected.!
a = document.links[0].href;
console.log(a);
console.log(typeof document);


// document.images and document.scripts print the list of the given 2 object in the html page ...!

console.log("Understanding DOM And Creating Website Layout");

let a = document;

// document is also a DOM structure here which is having a tree structure......!

// note:---------- document.all html ke saare tage deta h...!
a = document.all;

// note:---------- ye document ke saare body de Dega!!
// a=document.body;

// note:------- ye document ke saare forms de Dega!
// a=document.forms;

// note:---- for multiple forms we can use:-----------------
// document.forms[0];
// document.forms[1]; like this:------!

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:------ yha pr direct array ki trah document ko iterate nhi kr skte to Array.from(a) ki madad se hum "a" ko use krke ek array bna lege aur usme iterate krege!!!!!
//   Basically hum "a" ka hum ek Array bna lege aur usme iterate krege...!
// Array.from(a).forEach(function(element){
//     console.log(element);
// })

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

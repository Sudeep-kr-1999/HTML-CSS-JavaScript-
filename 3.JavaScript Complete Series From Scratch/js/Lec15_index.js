console.log("this is about Children, Parent And Traversing In DOM ");

let cont=document.querySelector('.no');
cont=document.querySelector('.container');
console.log(cont);

// to get the childnodes inside the selected class or id by querySelector
// note:----------- childnode humare text or comment ye sb chizo ko manta h
// note:---------------- child node next/new line ko bhi text ke jaise consider kr leta h
console.log(cont.childNodes);

// note:---------- if we donot want any Text,comment,nextline or new line or any other which we donot want extra it simply recognise only elemnents , we use (children)
console.log(cont.children);


let nodename=cont.childNodes[0].nodeName;
nodename=cont.childNodes[1].nodeName;
nodename=cont.childNodes[2].nodeName;
nodename=cont.childNodes[3].nodeName;
// console.log(nodename);

let nodetype=cont.childNodes[0].nodeType;
nodetype=cont.childNodes[1].nodeType;
nodetype=cont.childNodes[2].nodeType;
nodetype=cont.childNodes[3].nodeType;
// console.log(nodetype);

// ============================================================================================================================================================================================
// node type list:-----------------------------
// 1-----> Element
// 2-----> attribute
// 3-----> textnode
// 8-----> Comment
// 9-----> document
// 10-----> DocType

// ============================================================================================================================================================================================
let container=document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container);

// firstChild:-------> childNodes ke pehle node le lega.!
// console.log(container.firstChild);

// // firstElementChild:------> child ka pehla element wla node le lega
// console.log(container.firstElementChild)

// // lastChild----> childNodes ke last node le lega !
// console.log(container.lastChild);

// // lastElementChild-----> childNodes ke last element wla node le lega
// console.log(container.lastElementChild);

// // childElementCount:---------> total child jo element h uska count return krega
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
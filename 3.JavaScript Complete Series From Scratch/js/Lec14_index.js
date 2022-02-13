console.log("This is about HTML Element selector in javascript");

// DOM Selectors:-----------
// Elements Selectors:---------------There are 2 types of element selectors mention below:----
// 1. Single Element Selector
// 2. Double Element Selector

// ================================================================================================================================================
// Single Element Selectors:
let element=document.getElementById("myfirst");
// console.log(element);
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element.style.color='red';
// element.innerText="Harry is a good boy";
// element.innerHTML="<b> Sudeep is a javascript learner</b>";
console.log(element);
console.log(element.innerText);
console.log(element.innerHTML);

// selecting the id
// let sel=document.querySelector('#myfirst');

// selecting the class
// if there is multiple element in the  child class then we will get the  first element as the output since here it is single element selector..(very very important)!
// sel=document.querySelector('.child');

// selecting the tag
// sel=document.querySelector('b');
// sel=document.querySelector('h1');

// here we are selecting the <div> tag but note here we get the first and only one div container
// sel=document.querySelector('div');
// sel.style.color='green';

// console.log(sel);

// ===============================================================================================================================================================

// Multi-Element-Selectors:-------------it will help to select multiple element at once
let elements = document.getElementsByClassName('child');
// console.log(elements);
// console.log(elements[0]);
// console.log(elements[1]);
// console.log(elements[2]);
// console.log(elements[3]);

// elements=document.getElementsByClassName('container');
// console.log(elements[0].getElementsByClassName('child'));

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    console.log(element);
    element.style.color = 'blue';
}

elements = document.getElementsByTagName('div');
console.log(elements,typeof(elements));

Array.from(elements).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});
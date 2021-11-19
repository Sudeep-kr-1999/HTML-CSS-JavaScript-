console.log("This is about Creating,Removing and Replacing Elements using javascript ");
// =======================================================================================================================================================================

// creating element using javascript.
let element = document.createElement('li');

// add a classname to the element
element.className = 'childul';
element.id = 'createdli'

// here setAttribute();
// (method) Element.setAttribute(qualifiedName: string, value: string): void
//     Sets the value of element's first attribute whose qualified name is qualifiedName to value.
element.setAttribute('title', 'mytitle');
// element.innerText='Hello this is created by sudeep';
// element.innerHTML='<b>Hello this is created by sudeep by using innerHTML</b>';

let text = document.createTextNode('I am a Text Node');
element.appendChild(text);

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

// ==============================================================================================================================================================
// Replacing one element with other:-------------
let element2 = document.createElement('h3');
element2.id = 'elm2';
element2.className = 'elm2';
let text_node = document.createTextNode('This is a created Node For Element2');
element2.appendChild(text_node);

element.replaceWith(element2);

// =================================================================================================================================================================

let myul = document.getElementById('myul');


// replaceChild():----->(method) Node.replaceChild<HTMLLIElement>(newChild: Node, oldChild: HTMLLIElement): HTMLLIElement
myul.replaceChild(element, document.getElementById('child1'));

// removingChild
myul.removeChild(document.getElementById('child2'));


// below the getAttribute() give the value of the attribute mentioned
let pr = element2.getAttribute('id');

// below the hasAttribute() check whether the given mentioned attribute exist or not
let pr1 = element2.hasAttribute('class');

// removing attribute from the element2
element2.removeAttribute('id');

// setting attribute to the element2
element2.setAttribute('id', 'idelement2');
console.log(pr);
console.log(pr1);
console.log(element2);


// create a element with text as ="Go to code with harry" and create an a tag outside it with href="//codewithharry.com"";
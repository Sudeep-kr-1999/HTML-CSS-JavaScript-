console.log("This is about javascript symbols");

// note :
// Symbol :-- it is a primitive 

const syml=Symbol('My identifier');
console.log("Symbol is  : ",syml);
console.log("Type of symbol is  : ",typeof(syml));


// note:-----
// agar 2 symbols mein 2 same identifier bhi hoge to bhi wo do alag alag symbol ki trah treat hoga . means dono alag hoge
// note:----- hr baar Symbol ek naya preemitive generate krta h 
const sym2=Symbol('My identifier');
console.log(syml==sym2);

const a='this';
const b='this';
console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);

const k1=Symbol("identifier for k1");
const k2=Symbol('identifier for k2');
let myobj={};
myobj[k1]="harry";
myobj[k2]="Rohan";
myobj['name']='good boy';
myobj[4]='good int';

console.log(myobj);
console.log(myobj[k1]);
console.log(myobj[k2]);    

// it is not generally good way because we get undefined kyuki wo myobj mein "k2" k2 Wla string search krega...i .e == myobj['k2']; 
// console.log(myobj.k2);


// note:---- for in loops ke andar symbols ko ignore kiya jaata h! (very very important)!
for(key in myobj){
    console.log(key,myobj[key]);
}

// JSON.stringify() mein symbols ignored ho jaate hai (very very important)!
console.log(JSON.stringify(myobj));




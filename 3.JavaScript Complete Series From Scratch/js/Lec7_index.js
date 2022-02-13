// console.log(" this is about the arrays and objects in javascript");
// const marks=[34,23,24,93,73,25];
// console.log(marks);
// const fruits=["Orange","Apple","Pineapple"];
// const mixed=["Str",89,[3,5]];

// const array=new Array(23,123,21,"Orange");
// console.log(array);
// console.log(mixed);
// console.log(fruits);
// console.log(fruits[0]);
// console.log(mixed[0]);
// // --------------------------------------------------------------------------------------------------------------------------------------------------------------
// // length is the property of the array not methods...
// console.log(array.length);
// console.log(Array.isArray(array));
// array[0]="harry";
// let arrelement=array[0];
// console.log(arrelement);
// console.log(array);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// note:----------- agr array const rehga to hum usko uske method ki help se change kr paayege but whole array ko direct change nhi kr paayege
// let marks=[34,23,24,93,73,25];
// console.log(marks);

// let value=marks.indexOf(34);
// console.log("The index of 34 is : "+value);

// Mutating the arrays:----------------------------
// marks.push(34);
// console.log(marks);

// unshift()--------------> it is used to put element in the starting of the arrays.
// marks.unshift(1009);
// console.log(marks);

// pop():------------------------->Removes the last element from an array and returns it
// marks.pop()
// console.log(marks);

// shift():--------------------->Removes the first element from an array and returns it
// marks.shift()

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// start — The zero-based location in the array from which to start removing elements.
//  deleteCount — The number of elements to remove.
// basically in below example index 1 se start krke 2 element ko array se hta dega
// marks.splice(1,2);
// console.log(marks);

// Reverses the elements in an Array.
// marks.reverse()
// console.log(marks);


// Combines two or more arrays.
// @param items — Additional items to add to the end of array1.
// let marks2=[1,2,3,7];
// marks=marks.concat(marks2)
// // console.log(marks);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

let marks=[34,23,24,93,73,25];
let marks2=[1,2,3,7];
marks=marks.concat(marks2)
console.log(marks);

let myobj={
    name:`harry`,
    channel:'code with harry',
    isActive:true,
    marks:[1,5,3,6]
}

console.log(myobj);
console.log(myobj.marks);
console.log(myobj.isActive);
console.log(myobj["name"]);
console.log(myobj["channel"]);

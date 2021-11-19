console.log("This is about javascript sets");

// Set stores unique values 

// initialize an empty set 
const mySet = new Set();

// adding value to the set 
// note:-------- set donot allow duplicate value !!!!!!

mySet.add('this');
mySet.add('my name');

// duplicate entry donot allow 
mySet.add('this');

mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
console.log("This set looks like :", mySet);


// we can give the array containing set element in the constructor also!
// let mySet1=new Set([1,45,'this',false,{a:4,b:8}]);
// console.log("New set is : ",mySet1);

// size of the set 
console.log(mySet.size);


// to check whether the element is in the set exist or not 
console.log(mySet.has(34));
console.log(mySet.has(346));

console.log("Before removal of element  : ", mySet.has('that'));

// removal of element in the set 
mySet.delete('that');

console.log("After removal of element : ", mySet.has('that'));


// iterating a set 
for (ele of mySet) {
    console.log("item is : ", ele);
}

mySet.forEach((item) => {
    console.log("item is : ", item);
})

// converting set to array 
let setArray = Array.from(mySet);
console.log("The array from the set is  : ", setArray);




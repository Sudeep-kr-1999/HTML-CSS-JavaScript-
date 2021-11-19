console.log("This lecture is about for in loops and for of loops using condition/confusion");

let people=['Harry',"Rohan","SkillF","Shubhum","Vikrant"];


// traditional for loops 
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
    
}

// for in loops 
let obj={
    name :"harry",
    language : "javascript",
    hobbies :"android app development"
}

console.log(obj);

// iterating an object 

// Using traditional for loops :-------------
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
    
}


// iterating using for in loops 
for(let key in obj){
    console.log(obj[key]);


    // it do not work (very very important)
    // console.log(obj.key);

}

// we can use for in loops with string to go through all the characters 
let myString="This is a string";
for(let char in myString){
    console.log(myString[char]);
}


// forof loops :--------------------------------------------------------------------------------
for(let name of people){
    console.log(name);

}





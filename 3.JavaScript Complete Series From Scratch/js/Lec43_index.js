console.log("this is about Async/Await in javascript");

// note:----- async lagate ke saath hi function promise return krega 
async function harry() {


    console.log("inside harry function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await response.json();
    console.log("users are here");
    return users;
}

console.log("before calling harry");
let a = harry();
console.log("after calling harry");
console.log(a);
a.then((data) => {
    console.log(data);
})
console.log("last line of the js file");


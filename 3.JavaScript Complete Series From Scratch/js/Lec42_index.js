console.log("This is about Fetch API in Javascript");

// Button with id myBtn
let myBtn = document.getElementById('myBtn');

// div with id content
let content = document.getElementById('content');


// <-------------------------------------------------(GET REQUEST USING fetch() API)--------------------------------------------------------->
// ==============================================================================================================================================================
// fetch(url) ek promise return krega uske liye pehle waala then() use krege aur jo function dege here it is "response" ye promise ke andar resolve ke rup mein run ho jaayega aur again ek 
// aur promise return krega and uske baad usme then() lgakr hum data le skte h.

// note:-------- fetch() asynchronous hota h means background mein run krega

// function getData() {
//     console.log("Started getdata")
//     url="Lec35_harry.txt";
//     fetch(url).then((response) => {
//         console.log("inside first then")
//         console.log(response.text);
//         return response.text();

//     }).then((data) => {
//         console.log("Inside second then")
//         console.log(data);

//     });
// }

// console.log("Before running getData");
// getData();
// console.log("After running getData");

// ===============================================================================================================================================================

// Fetch Using JSON

// function getData() {
//     console.log("Started getdata")
//     url="https://api.github.com/users";
//     fetch(url).then((response) => {
//         console.log("inside first then")

//         // response.text: -PURE JSON KO AS A TEXT CONSOLE PR PRINT KR DEGA 
//         // console.log(response.text);
//         // return response.text();

//         console.log(response.json);
//         // ye as Object show krega paas krke
//         return response.json();



//     }).then((data) => {
//         console.log("Inside second then")
//         console.log(data);

//     });
// }
// getData();

// ===============================================================================================================================================================
// <-----------------------------------------(POST request using fetch() API)-------------------------------------------------------------------------------->

// sometimes we need to include headers sometimes not 
// note:----- har baar unique name chahiye hota h data mein tb hi chalega 
function postData() {
    console.log("Started postdata");
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"harglry347485945","salary":"123","age":"23"}';
    params = {
        method: 'post',

        // headers: {
        //     // 'Content-type': 'application/json'
        // },


        // if data is not string means it is a object we use JSON.stringify(data) to make it string if it already a string it's fine no need to use this
        // body:JSON.stringify(data)
        body: data
    }
    fetch(url, params).then((response) => {
        return response.text();

    }).then((data) => {
        console.log(data);

    });
}

postData();



// details about post request in fetch api -------------------------------------------------------
// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
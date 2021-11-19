console.log("tutorial about AJAX ");


// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//     console.log("you have clicked the fetchBtn");

//     // Instantiate an xhr Object. 
//     const xhr = new XMLHttpRequest();

//     // open the object:------------ means jo xhr object bnaya h usme get request maare!

//     // first argument is for :------------which type of request wether get or post request 
//     // second argument is for :----------- kidhar se data aayega(source file: koi bhi format k ho skta h)
//     // third argument is for:------------------> agar asynchronous request maarna chahte h to value "true" nhi to agar hum synchronous request krna chahege to value "false" hoga!


//     // GET request means:--------- > sirf hum fetch krege(url dege aur bta dena ki uske andar kya h)
//     // POST request means:-----------> fetch kr rhe h but uske saath kuch data bhi bhej rhe h request ke saath!( url ke saath kuch data bhi dege aur us data ke hisab se hume output dega!)

//     xhr.open('GET', 'Lec35_harry.txt', true);


//     // what to do on progress:(Optional)
//     xhr.onprogress = function () {
//         console.log("On Progress....!");

//     }

//     // note:----------- readyState code values table:-------------

//     // Value ||	State	          ||   Description
//     // 0	  ||   UNSENT	          ||   Client has been created. open() not called yet.
//     // 1     ||   OPENED	          ||   open() has been called.
//     // 2	  ||   HEADERS_RECEIVED   ||   send() has been called, and headers and status are available.
//     // 3     ||   LOADING	          ||   Downloading; responseText holds partial data.
//     // 4     ||   DONE	              ||   The operation is complete.

//     xhr.onreadystatechange = function () {
//         console.log("Ready State is : ", xhr.readyState);
//     }



//     // what to do when response is ready:---
//     // onload:------------ onload ka mtlb ye hai ki hum xhr ke ready state 4 pr aa chuke h 
//     xhr.onload = function () {

//         // note:-------- 200 is the response code of http
//         if (this.status === 200) {
//             console.log(this.responseText);
//         }
//         else {
//             console.log("Error.................!!!!!!!!")
//         }
//     }

//     // send the request:------
//     xhr.send();






// }


// =======================================================================================================================================================================
// ---------------------------------POST REQUEST------------------------------------------

// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//     console.log("you have clicked the fetchBtn");

//     // Instantiate an xhr Object. 
//     const xhr = new XMLHttpRequest();

    // open the object:------------ means jo xhr object bnaya h usme get request maare!

    // first argument is for :------------which type of request wether get or post request 
    // second argument is for :----------- kidhar se data aayega(source file: koi bhi format k ho skta h)
    // third argument is for:------------------> agar asynchronous request maarna chahte h to value "true" nhi to agar hum synchronous request krna chahege to value "false" hoga!


    // GET request means:--------- > sirf hum fetch krege(url dege aur bta dena ki uske andar kya h)
    // POST request means:-----------> fetch kr rhe h but uske saath kuch data bhi bhej rhe h request ke saath!( url ke saath kuch data bhi dege aur us data ke hisab se hume output dega!)

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // USE THIS FOR POST REQUEST
//     xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

//     //  getResponseHeader:--------- means url mein hi form ka data jaa rha h 
//     //  xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');
//     xhr.getResponseHeader('Content-type', 'application/json');


//     // what to do on progress:(Optional)
//     xhr.onprogress = function () {
//         console.log("On Progress....!");

//     }

//     // note:----------- readyState code values table:-------------

//     // Value ||	State	          ||   Description
//     // 0	  ||   UNSENT	          ||   Client has been created. open() not called yet.
//     // 1     ||   OPENED	          ||   open() has been called.
//     // 2	  ||   HEADERS_RECEIVED   ||   send() has been called, and headers and status are available.
//     // 3     ||   LOADING	          ||   Downloading; responseText holds partial data.
//     // 4     ||   DONE	              ||   The operation is complete.

//     xhr.onreadystatechange = function () {
//         console.log("Ready State is : ", xhr.readyState);
//     }



//     // what to do when response is ready:---
//     // onload:------------ onload ka mtlb ye hai ki hum xhr ke ready state 4 pr aa chuke h 
//     xhr.onload = function () {

//         // note:-------- 200 is the response code of http
//         if (this.status === 200) {
//             console.log(this.responseText);
//         }
//         else {
//             console.log("Error.................!!!!!!!!")
//         }
//     }

//     // send the request:------
//     // let params="name=test&salary=123&age=23";
//     params = `{"name":"test34sad545","salary":"123","age":"23"}`;
//     xhr.send(params);
//     console.log("We are done");

// }

// =======================================================================================================================================================================

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for (let key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();
    console.log("We are done fetching employees!");

}


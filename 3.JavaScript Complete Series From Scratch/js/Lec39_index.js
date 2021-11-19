// Promise: Three possibilities
// 1. Resolve
// 2. Reject
// 3.Pending


// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error=true;
//             if(!error){
//             console.log('Function : Your promise has been resolved');
//             resolve();
//             }

//             else{
//                 console.log(" Function :your promise has been rejected");
//                 reject('sorry not fullfiled');
//             }
//         }, 2000);
//     })
// }


// // func1().then() mein ".then" ka matlb hai ki agar callback resolve ho jaata h 
// // to kisi function ko call kr skte h 
// func1().then(function(resolve){
//     console.log("Thanks for resolving");
// }).catch(function(error) {
//     console.log("Harry : very bad bro "+error);

// })

// .then wla resolve ke corresponding run hoga: reslove mein jo string hai wo string then() mein hoga 
// .catch wla reject ke corresponding run hoga : reject mein o stirng hai wo string catch() mein hoga

// ========================================================================================================================================================================================/

// Callback using Promises........................!!!!!!

console.log("This is all about callback functions with promises");


// pretend that this response is coming from the server 
const students = [
    { name: "Sudeep", subject: "Javascript" },
    { name: "Harry", subject: "Java Programming" }
]



// here we use callback function
function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            students.push(student);
            console.log("students has been enrolled");
            const error=false;
            if (!error){
            resolve();
            }
            else{
                reject();
            }

        }, 3000);
        


    })

}


function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name}</li>`
        });

        document.getElementById('students').innerHTML = str;
        console.log("student has been fetched");


    }, 1000);

}

let newStudent = { name: "Sunny", subject: "Python" };
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("some error occoured");
});
// getStudents();


// note:
// for each function is synchronous
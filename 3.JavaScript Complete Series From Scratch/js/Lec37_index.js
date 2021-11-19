console.log("This is all about callback functions");


// pretend that this response is coming from the server 
const students=[
    {name:"Sudeep",subject:"Javascript"},
    {name:"Harry",subject:"Java Programming"}
]



// here we use callback function
function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("students has been enrolled");
        callback();

    },3000);

}


function getStudents(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str+=`<li>${student.name}</li>`
        });

        document.getElementById('students').innerHTML=str;
        console.log("student has been fetched");
        

    },1000);

}

let newStudent={name:"Sunny",subject:"Python"};
enrollStudent(newStudent,getStudents);
// getStudents();


// note:
// for each function is synchronous
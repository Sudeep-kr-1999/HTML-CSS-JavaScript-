console.log("Prototype inheritence in javascript");

const proto={
    slogan:function(){
        return 'This company is the best company';
    },

    changeName:function(newName){
        this.name=newName;

    }
}

// const harry=Object.create(proto);
// harry.name="Harry";
// harry.role="Programmer";
// harry.changeName("Sudeep");
// console.log(harry);

// ==============================================================================================================
// ALTERNATE WAY TO CREATE OBJECT FROM PROTOTYPE"-------------------

// note if we want to change any value in the argument we should make its (writable:true)!
const harry=Object.create(proto,{
    name:{value:"Harry",writable:true},
    role:{value:"Programmer"}
})
harry.changeName("Sudeep");
// console.log(harry);

// =============================================================================================================
// Employeee Constructor
function Employeee(name,salary,experince){
    this.name=name;
    this.salary=salary;
    this.experince=experince;
}


// ==========================================================================================================================
// Slogan
Employeee.prototype.slogan=function(){
    return `This company is the best company regards ${this.name}`;
}

let harryobj=new Employeee("Harry",25000,87);
console.log(harryobj);
console.log(harryobj.slogan());

// =====================================================================================================================================
// inheritence in prototype
// Programmer
function Programmer(name,salary,experince,language){
    Employeee.call(this,name,salary,experince);
    this.language=language;
}

// ===========================================================================================================================================
// inherit the prototype
Programmer.prototype=Object.create(Employeee.prototype);

// ===================================================================================================================
// manually set the constructor
Programmer.prototype.constructor=Programmer;

let rohan=new Programmer("Rohan",5000,5,"Javascript");
console.log(rohan);
console.log(rohan.slogan());



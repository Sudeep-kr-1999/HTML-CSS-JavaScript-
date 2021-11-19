console.log("This is about ES6 Classes and Inheritence");

// ES6 SYNTAX:---------------------------
class Employee {
    constructor(Givenname, Givenexperience, Givendivision) {
        this.name = Givenname;
        this.experience = Givenexperience;
        this.division = Givendivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best......!`;
    }

    joiningYear(){
        return 2021-this.experience;


    }

    static add(a,b){
        return a+b;

    }

}

let harry=new Employee("Harry",20,"First");
console.log(harry);
console.log(harry.slogan());
console.log("The joining year is : ",harry.joiningYear());
console.log(Employee.add(34,5));



// inheritence in javascript in ES6:--------------
class Programmer extends Employee{
    constructor(Givenname, Givenexperience, Givendivision,language,github){
        super(Givenname, Givenexperience, Givendivision);
        this.language=language;
        this.github=github;

    }

    favouriteLanguage(){
        if(this.language==`Python`){
            return `Python`;
        }
        else{
            return`Javascript`;
        }
    }

    static multiply(a,b){
        return a*b;

    }

}

let rohan=new Programmer("Rohan",5,"Lays","C++","Rohan420");
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(5,6));


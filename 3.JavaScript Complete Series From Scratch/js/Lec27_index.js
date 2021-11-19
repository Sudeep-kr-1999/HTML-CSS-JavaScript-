console.log("This is about object oriented Javascript with object literals constructors and objects.");

// object literals for creating objects:--------------
let car = {
    name: "Maruti 800",
    topSpeed: 90,
    run: function () {
        console.log("car is running ....!");
    }
}

console.log(car);

// ------------------------------------------------------------------------------------------------------
// it will give you whole structure as a function:----------
console.log(car.run);
// output:--------------

// ƒ (){
//     console.log("car is running ....!");
// }

// ---------------------------------------------------------------------------------------------------

// it will go inside the function and show the output.:---------------
console.log(car.run());

// output:-----------------
// car is running ....!


// ===========================================================================================================================

// Creating a constructor for cars:--------
function GeneralCar(Givenname, GivenSpeed) {
    this.name = Givenname;
    this.topSpeed = GivenSpeed;
    this.run = function () {
        console.log(this.name + "is running");
    }

    this.analyze = function () {
        console.log(`this car is slower by ${200 - this.topSpeed} than mercedes `);
    }

}

car1 = new GeneralCar('Nisan', 180);
console.log(car1);

car2 = new GeneralCar('Alto', 100);
console.log(car2);
console.log(car2.name);
console.log(car2.analyze());


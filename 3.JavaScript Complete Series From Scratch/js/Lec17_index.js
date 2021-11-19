console.log("This is about Event and Event Objects in Javascript");


// note:------ addEventListener() used to listen to the event in Javascript first argument is event name and second argument is the function which get called by the event when event occurs
//note:--------- here function get one argument which is a Object which tell about the event
// document.getElementById('heading').addEventListener('click', function (e) {
//     let variable;
//     console.log('you have clicked the heading');
//     console.log(e);
//     variable=e.target;
//     variable=e.target.className;
//     variable=e.target.classList;
//     variable=e.target.id;
//     variable=Array.from(e.target.classList);

//     // note:--offsetX , offsetY btayega ki Element ke relative mein kinni dur click kiya
//     variable=e.offsetX;
//     variable=e.offsetY;


//     // note:----- clientX and clientY browser window ke respect mein value deta h
//     variable=e.clientX;
//     variable=e.clientY;
//     console.log(variable);
//     // location.href='//codewithharry.com';


// });


document.getElementById('heading').addEventListener('mouseover', function (e) {
    let variable;
    console.log('you have clicked the heading');
    console.log(e);
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList);

    // note:--offsetX , offsetY btayega ki Element ke relative mein kinni dur click kiya
    variable = e.offsetX;
    variable = e.offsetY;


    // note:----- clientX and clientY browser window ke respect mein value deta h
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
    // location.href='//codewithharry.com';


});
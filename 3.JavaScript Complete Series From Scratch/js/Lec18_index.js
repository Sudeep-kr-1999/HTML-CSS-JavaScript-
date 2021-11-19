console.log("This is about More on JavaScript Events");
// let btn= document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);


// // click or doubleclick sirf left waale ka maanta h
// function func1(e){
//     console.log("thanks for clicking the button",e);

//     // this is use to bypass the default behaviour...!
//     e.preventDefault();
// }


// function func2(e){
//     console.log("thanks for double click",e);
//     e.preventDefault();
// }


// // mousedown aapke wheel , rightclick and leftclick sbko maanta h
// function func3(e){
//     console.log("thanks it is a mousedown",e);
//     e.preventDefault();

// }

// document.querySelector('.no').addEventListener('mouseenter',function(){
//     console.log("you enter class no via mouseenter");
// });

// document.querySelector('.no').addEventListener('mouseleave',function(){
//     console.log("you enter class no via mouseleave");
// });

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    // document.body.style.background="red";
    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},${e.offsetX+e.offsetY})`;
    console.log("you triggered mousemove event");
});
console.log("This is about Generators in javascript");

// Generators in javascript 


// note:--------- "*" is used in case of generator 
                //    it generate the value on the fly when we call it 
function* numbersGen(){
    let i=0;
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    // note:------------- jb tk true hai tb tk generate krta rhega 
    while(true){
        yield i++;
    }

}

const gen=numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
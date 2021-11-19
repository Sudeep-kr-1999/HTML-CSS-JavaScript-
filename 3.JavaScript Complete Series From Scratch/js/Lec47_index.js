console.log("This is about regualar expressions with metacharacters in javascript");

let regex=/harry/;

// LETS LOOK INTO THE SOME METACHARACTER SYMBOLS :
let str= "harry is harry";

// regex=/^ha/; :-----(^) caret Symbol at first signify startsWith (important). 
                // for this example it means startsWith 'ha';
                // expression will match if string startsWith 'ha' here . 


// regex=/ry$/; ----> '$' Symbol at last signify endsWith (important). 
            //    for this example it means endsWith 'ry';
            //    expression will match if string endsWith 'ry' here 


// regex=/h.rry/; ----> this means agar 'h' aur 'rry' ke beech mein koi bhi ek(exactly one) character aayega to string match kr jaayegi else nhi kregi.

// regex=/h*rry/; -------> this means 'h'aur "rry" ke beech mein kuch bhi ho ya kuch bhi nhi ho doesnot matter match ho jaayega .

// regex=/ha?rryi?/; -------> this means here 'h' ke baad 'a' optional hai and 'y' ke baad 'i' optional hai means agar 'h ' ke baad 'i' ho bhi skta hai ya 
                            // nhi bhi and 'y' ke baad 'i' ho bhi skta hai nhi bhi, agar aisa hai to match kr jaayega. 

                            // question mark after charater means this charater is optional 

// regex=/h\*rry/; ----> escape sequence character ----> if we use backslash(\) before any charater means hum wo charater as metacharacter considered nhi krege wo actual mein string wla ek character hoga. 



let result=regex.exec(str);
console.log("The result from exec() is  : ",result);

if (regex.test(str)){
    console.log(`The string ${str} matches the expressions ${regex.source}`);


}

else{
    console.log(`The string ${str} does not  matches the expressions ${regex.source}`);

}

console.log("This is about javascript regular expressions and related functions");


// note :----- in javascript agar double slash ke beech mein kuch likhte h to wo regular expressions literal hota h(very very important)!
            //   for ex: / it is a regular expressions literals/



// this is a regular expressions literal in js 
let reg=/harry/;
console.log(reg);

// regular expressions ke andar ka data source hota h 
console.log(reg.source);


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let s = "This is great code with harry and also harry bhai ";
// Function to match expressions :

// 1. exec():-- this function will return an array for match or null for no match.
                // aur pehle occurence ka index de dega generally agar global flag available nhi h toh!

                // note:- agar hum hr baar alg alg index ka ans dekhna chahte h to reg mein flag lagana hoga:
                // like this : reg=/harry/g;
                //            here g means global flag means puri string ko dekhna means pehli baar mein pehla index dushri baar mein dushra index and so on.!

// ==============================================================================================================================================================================================
// reg=/harry/g; 

// let result_exec=reg.exec(s);
// console.log(result_exec);
// // ["harry", index: 24, input: "This is great code with harry and also harry bhai ", groups: undefined]

// result_exec=reg.exec(s);
// console.log(result_exec);
// // ["harry", index: 39, input: "This is great code with harry and also harry bhai ", groups: undefined]

// result_exec=reg.exec(s);
// console.log(result_exec);
// // null

// ===================================================================================================================================================================================================
// let s1 = "This is great code with HarRy and also harry bhai ";

// here 'i'flag means case insensitive 
// reg=/harry/i;



// let result_exec=reg.exec(s1);

// here we get the match at 24 index due to 'i' flag used 
// console.log(result_exec);

// ===================================================================================================================================================================================================

// 2.test():- return true or false :
// true:-- when regular expressons is there means reg.exec() ka output null nhi h 
// false: - when regular expressions is not there means reg.exec() ka output null hai 

// let result_test=reg.test(s);
// console.log(result_test);

// ===================================================================================================================================================================================================

// let reg1=/harry/g;
// let s1 = "This is great code with harry and also harry bhai "
// 3. match():-- it will return an array of results or null 
                // isko hum ulta lagate hai mtlb string pr lagate hai reg pr nhi 

                // isme bhi gloabal and insensitive logic lagaya jaa skta hai like above 

    // Note:--- THIS IS WRONG IT IS NOT THE CORRECT WAY TO DO IT   

    // let result_match=reg1.match(s1);
    // console.log(result_match);

    // Lec46_index.js:71 Uncaught TypeError: reg1.match is not a function
    // at Lec46_index.js:71


    // Note:-- this is right way to do it 
    // let result_match_1=s1.match(reg1);
    // console.log(result_match_1);

    //  output: ---- (2) ["harry", "harry"]

// ===================================================================================================================================================================================================
// 4.search():-- return index of first match if found  else -1 if match not found.
let result_search=s.search(reg);
console.log(result_search);

// output:-- 24

// ===================================================================================================================================================================================================

// 5.replace():-- return new replaced string with all the replacements 
// note:-- if regular expressions is not global then pehle occourence ko replace krega aur agar global flag diya hai to saare replacement ho jaayega.
let result_replace=s.replace(reg,"Sudeep");
console.log(result_replace);

// ===================================================================================================================================================================================================


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





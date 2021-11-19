console.log(" This is about Regular Expressions  : Character Sets And Quantifiers");

//Regular Expressions 
// 1.Basic Functions
// 2.Metacharacters Symbols
// 3.Character Sets

// Character Sets :-------------------------------------------------------------------------------------------------------------------
// Note:---- for character set we use "[]" Symbol
let regex=/harry/;

// regex=/h[a-z]rry/;  this means agar 'h' ke baad 'a'to 'z' ke beech mein kuch bhi ho to match kr jaayega 
// regex=/h[ryu]rry/; ---> this means 'h' ke baad 'r','y','u' mein se koi hai to match krega nhi to nhi krega 
// regex=/h[^ryu]rry/; ------> this means 'h' ke baad 'r','y','u' ko chorkr koi bhi character aaye to match krega nhi to nhi krega.
                            //    (^)caret symbol is used here to signify not operation here 

// regex=/h[^aty]rr[yu]/;--------------> combination of above 2 logics. 

// regex=/h[a-zA-Z]rr[y0-9]/; means 'h' ke baad 'a' to 'z' ya 'A' to 'Z' mein se koi bhi character ho + "rr" ke baad 'y' ya 0 to 9 mein se koi 
                            //   character ho to match krega nhi to nhi krega .

// regex=/h[a-zA-Z]rr[yu0-9][0-9]/; this is also fine for regular expression 




// ==================================================================================================================================================

// Quantifiers :---------------------------------------------------------------------------------------------------------------------------------------
// Note:------ we use "{}" for assigning quantifiers 

// regex=/har{2}y/; --------> this means 'a' ke baad 'r' exactly do baar aana chahiye, agr aisa hota hai to match hoga nhi to nhi hoga .
                            //   {number/quantity} this bracket is used for assigning the quantity inside it for any character 

// regex=/har{0,2}y/; -------------> this means 'a' ke baad 'r' 0 se 2 baar ke beech mein aaye including 0 and 2, agr aisa hota hai to match hoga nhi to nhi hoga .


const str="harry bhai";

// ==================================================================================================================================================
// Groupings :-----------------------------------------------------------------------------------------------------------------------------------------------------------
// Note:-- For grouping we use parenthesis ()

// regex=/(har){2}/; ----------> this means puri "har" exactly 2 times aaye !

// regex=/(har){2}([0-9]r){5}/;--------------> this means puri "har" exactly 2 times aaye + ([0-9]r) puri 5 baar aaye 

let result=regex.exec(str);
console.log("The result from exec() is  : ",result);

if (regex.test(str)){
    console.log(`The string ${str} matches the expressions ${regex.source}`);


}

else{
    console.log(`The string ${str} does not  matches the expressions ${regex.source}`);

}


console.log("This is about Shorthand Character Classes(Regular Expressions) ");

// Character classes :------------------------------------------------------------------------------------------------------------------



// let regex=/h[a-z]rry/;

// here "\w" means a word character ek alphanumeric(alphabets or numbers) ya "_"(undescore).
let regex=/\war/;

// ek se jyda word character ho aur uske baad "d1r" ho. 
// "\w+" means one or more word characters 
regex=/\w+d1r/;

// "\W" here due to capital "W" it is called non-word character 
regex=/\Wbhai/;


// "\W+" here it is one or more than one non-word character 
regex=/\W+bhai/;

// '\d' is for digits ---> here koi bhi ek digit jiske baad 3 nines ho 
regex=/\d999/;

regex=/number \d999/;

// "\d+" means one or  more than one digits :-- jha tk space hoga whi tk match krega.
regex=/number \d+/;

// ek non-digit hona chahiye uske baad 999 hona chahiye 
regex=/\D999/;

// one or more than one non-digits ke baad 999 hona chahiye
regex=/\D+999/;

// "\s" is used to match the white spaces 
// note:- agar white spaces ke jagah "tab" hoga string mein to bhi ek space lekr match ho jaayega since "Tab" equal to 4 white spaces in general cases  
regex=/\ska number/;

// one or more than one white spaces ke baad "ka number" aaye to match ho jaayega 
regex=/\s+ka number/;

// "\S" means non white space Characters 
regex=/\Ska number/;

// "\S+" means one or more than one non-white space characters 
regex=/\S+ka number/;

// =========================================================================================================================================================
// Word boundary :------------------------------------------------------------------------

// "\b" means word boundary : means here "4r5r" ke baad agar naya word start hoga to match hoga nhi to nhi hoga 
regex=/4r5r\b/;

// =========================================================================================================================================================


// Assertions :------------------------------------------------------------------------------------------------------------------------------

// here /h(?=y) means agar "h" ke baad "y" ho to match kr do nhi to n kro 
regex=/h(?=y)/;

// here /h(?!y)/ means "h" ho uske baad "y" nhi ho to match hoga nhi to nhi hoga 
regex=/h(?!y)/;
const str="harh7rd1r4r5ry%%$@bhai hyrryika number 899999harry9999";



let result=regex.exec(str);
console.log("The result from exec() is  : ",result);

if (regex.test(str)){
    console.log(`The string ${str} matches the expressions ${regex.source}`);


}

else{
    console.log(`The string ${str} does not  matches the expressions ${regex.source}`);

}


console.log("String properties,Methods and Template Literals in javascript");
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const myname="Sudeep";
// const greeting="Good morning";

// // // concatenation of String
// // console.log(greeting+" "+myname);

// let html;
// html="<h1> this is heading </h1>"+
//       "<p> this is my paragraph </p>";


// // note:------- jitne bhi string dege existing string mein lagate chla jaayega.....................
// html=html.concat("this"," it is a concatenation function");
// console.log(html);
// // console.log(html.length);
// // console.log(html.toLowerCase());
// // console.log(html);


// console.log("the character at 0th index of html string is :",html[0]);
// console.log("the character at 1st index of html string is :",html[1]);

// console.log(html.indexOf("this"));

// // note:---------------if the given substring not exist in the original string it will return -1 as the index
//                     //    aur agr string hoga to string ke pehle waale occurence ka index return krega.....!
// console.log(html.indexOf("frhfweiuh"));

// // note:---------------if the given substring not exist in the original string it will return -1 as the index
//                     //    aur agr string hoga to string ke backward directin se pehle waale occurence ka index return krega.....!
// console.log(html.lastIndexOf("function"));

// console.log(html.endsWith("function"));
// console.log(html.includes("this"));

// // note:-----------console.log(html.substring(0,3)):--------- the first argument in the substring is the starting index and the second argument is the ending index......!
//                   //     note: it will give (0 to 2) not including 3.............!
// console.log(html.substring(0,3));
// console.log(html.substring(-4));
// // console.log(html.slice(-4)):------- last ke 4 dega
// console.log(html.slice(0,4));

// // html.split() here split function given delimiter ke basis pr arrray ko todkr array mein put kr deta h each index pr(note: by default delimiter space hota h)
// console.log(html.split(" "));

// // it will replace the first occurence of the first argument with the second argument
// console.log(html.replace("this","it"));

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// this is about template literals:------------------------------------------------------------
const myname="Sudeep";
let fruit1="Orange";
let fruit2="Apple";

// use like fstring................!
let myHtml=`Hello ${myname}
         <h1> this is heading</h1>
         <p> you like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML=myHtml;
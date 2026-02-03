// const useremail='rahulbera008@gmail.com'

// if(useremail){

//     console.log("Got the user email");

// }else{

//     console.log("Font have user email")
// }

//falsy values

// false,0,-0,BigInt 0n,"",null,undefined,NaN

// Truthy values
// true, "0",'false'," ",[],{},function(){},

// if (useremail.length===0) {
//     console.log("Array is empty");

// }

// const emptyObj={}

// if (Object.keys(emptyObj).length===0){
//     console.log("object is empty");

// }

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// val1=null??10
// val1=undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// ternary operator
// condition ? true statement : false statement



const iceTeaprice = 100;
iceTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80");

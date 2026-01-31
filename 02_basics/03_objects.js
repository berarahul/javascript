// Singleton 
// 

//objects literals


const mySymbol=Symbol('mySymbol')


jsUser={

name:'Rahul',
age:24,
isLoggedIn:true,
lastLoginDays:['Monday','Friday'],
email:'rb6764385@gmail.com',
"address":{
    street:'123 Main St',
    city:'New York',
    country:'USA'
},
"Gender": "male",
[mySymbol]:'myValue',
gretings:function(){
    console.log("Hello Rahul");}
}

console.log(jsUser['age'])
console.log(jsUser.address.country)
console.log(jsUser["Gender"]);
console.log(jsUser[mySymbol]);
console.log(jsUser.email);

jsUser.email='rahulbera008@gmail.com'

console.log(jsUser.email);
// Object.freeze(jsUser)
jsUser.email='berarahul009@gmail.com'
console.log(jsUser.email);
console.log(jsUser.gretings());


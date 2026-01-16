const accountId = 123456;
let accountEmail='rb6764385@gmail.com'
var accountPassword='rahul@1234';
accountCity='Kolkata';
// accountId=2  //not allowed
accountEmail='rahul@gmail.com'
accountPassword='123222'
accountCity='jaipur'

let accountState; //undefined

/* 
Prefer not to use var 
because of issue in block scope 
and Functional Scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.log(accountId);




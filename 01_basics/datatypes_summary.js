//primitive


//7 types: String,Number,Boolean, null,undefined,Symbol,BigInt

const score =100;

const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null

let userEmail; //undefined


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);


const bigNumber=123232434437483743874387438n

//non primitive(Reference)

// Array,Objects,Functions

const heros=["shaktiman","nagraj","doga"]



let myobj={

    name:"Rahul",
    age: 23,
}


const myfun= function(){

    console.log('hello world');

}

console.log(typeof bigNumber,outsideTemp,myobj,myfun)





//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), Heap(Non-Primitive)

let myYoutubename="@Codemasti";

let anotherName=myYoutubename;
anotherName='kalponix'
console.log(myYoutubename);
console.log(anotherName);


let userOne={

    email: "user@gmail.com",
    upi:"user@ybl"
}


let userTwo=userOne;
userTwo.email='rahulbera008@gmail.com'
console.log(userOne.email);
console.log(userTwo.email);

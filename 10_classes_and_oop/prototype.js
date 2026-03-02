// let  myName='Rahul      '
// console.log(myName.trueLength);


let myHeros=["thor","spiderman",];

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){

    console.log(`spidy power is ${this.spiderman}`);
} 
}

Object.prototype.hello=function(){
    console.log("Hello World");
}
Array.prototype.helloArray=function(){
    console.log("Hello from Array");
}

myHeros.hello();
myHeros.helloArray();


// inheritance


const User={

    name:"Rahul",
    email:"chai@gmail.com"
}

const Teacher={

    makeVideo:true,

}

const TeachingSupporter={

    isAvailable:true,
}

const TASupport={

    makeAssignment:true,
    fullTime:true,
    __proto__:TeachingSupporter,
}

Teacher.__proto__=User;

//modern syntax
Object.setPrototypeOf(Teacher,User);
Object.setPrototypeOf(TASupport,TeachingSupporter);

console.log(Teacher.name);
console.log(TASupport.isAvailable);

let anotherUserName='ChaiAurCode           '
String.prototype.truelength=function(){
    console.log(`${this}`);
    
    console.log(`True length of the string is ${this.trim().length}`);
}

anotherUserName.truelength();
"rahul".truelength();
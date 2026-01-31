// const tinderUser=new Object();



const tinderUser={};

tinderUser.id='123abc';
tinderUser.name="Rahhl";
tinderUser.isLoggedIn=false;
tinderUser.age=24;

// console.log(tinderUser);

const regularUser={

    email:"rahul@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Bera"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const newobj={...obj1,...obj2}
console.log(newobj);
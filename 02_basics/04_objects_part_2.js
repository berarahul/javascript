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

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const newobj={...obj1,...obj2}
// console.log(newobj);


const obj3= Object.assign({},obj1,obj2,)

// console.log(obj3);


const users=[
    {
        id: 1,
        email:"rahul@gmail.com"
    },

     {
        id: 2,
        email:"raju@gmail.com"
    },
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Rahul"
}

// course.courseInstructor
const {courseInstructor: instructor}=course

// console.log(courseInstructor);

console.log(instructor);

// {
//     "name": "Rahul",
//     "coursename":"js in hindi",
//     "price":"free"
// }


[
    {},
    {},
    {}
]



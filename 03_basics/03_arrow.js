const user ={


    username: "Rahul",
    price: 200,

    welcomeMessage: function(){

            console.log(`${this.username},welcome to website`);
            console.log(this)
            
    }


}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username='rahul'
//     console.log(this.username);
// }

// chai()


// const chai =function(){

//     let username='rahul'
//     console.log(this.username)
// }
// chai()

const chai =()=>{
    let username ='Rahul bera'
    console.log(this);
}

chai()

// const addTwo=(num1,num2)=>{

//     return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)

const addTwo=(num1,num2)=>({username:"Rahul"})



console.log(addTwo(3,4))

const myArray=[2,5,3,7,8]

// myArray.forEach()
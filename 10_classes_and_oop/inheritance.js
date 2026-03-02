class User{


    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
}


class Teacher extends User{
    constructor(username,email,subject){

        super(username,email);
        this.subject=subject;
    }
    addCourse(courseName){
        console.log(`Course ${courseName} added for ${this.username}`);
    }
}

const chai=new Teacher("Chai","chai@gmail.com","Math");
chai.logMe();
chai.addCourse("Algebra");

const masalachai=new Teacher("Masala Chai","masala@gmail.com","Science");
masalachai.logMe();
masalachai.addCourse("Physics");
class User{
    constructor(username,email){
        this.username=username;
        this.email=email;
    }
    static getUserCount(){
        return 100;
    }
    logMe(){
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    }
   static createId(){
        return `123`
    }
}

const rahul =new User("Rahul","rahul@gmail.com");
console.log(User.createId());

class Teacher extends User{
    constructor(username,email){
        super(username, email);
    }
}

const iphone =new Teacher("iPhone","iphone@gmail.com");
console.log(Teacher.getUserCount());
iphone.logMe();
console.log(Teacher.createId());
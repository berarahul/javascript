function User(email,password){

    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email;
        },
        set:function(newEmail){
            this._email=newEmail;
        }
    });
    Object.defineProperty(this,"password",{
        get:function(){
            return this._password.toUpperCase();
        },
        set:function(newPassword){
            if(`${newPassword}`.length<6){
                console.log("Password should be at least 6 characters long");
            }else{
                this._password=`${newPassword}`;
            }
        }
    });
}

const chai = new User("chai@example.com", "password123");
console.log(chai.email);
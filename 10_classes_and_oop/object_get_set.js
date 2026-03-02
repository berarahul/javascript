const User={
_email:"",
_password:"",
get email(){
    return this._email;
},
set email(newEmail){
    this._email=newEmail;
},


get password(){
return this._password.toUpperCase();

},
set password(newPassword){
    if(`${newPassword}`.length<6){
        console.log("Password should be at least 6 characters long");
    }else{
        this._password=`${newPassword}`;
    }
}
}

const tea=Object.create(User);
console.log(tea);
tea.email="tea@example.com";
tea.password="password123";
console.log(tea.email);
console.log(tea.password);
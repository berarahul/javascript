class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email;
  }
  set email(newEmail) {
    this._email = newEmail;
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(newpassword) {
    if (`${newpassword}`.length < 6) {
      console.log("Password should be at least 6 characters long");
    } else {
      this._password = `${newpassword}`;
    }
  }
}

const rahul = new User("rb6764385@gmail.com", 123456);
console.log(rahul.email);
console.log(rahul.password);

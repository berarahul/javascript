const user = {
  username: "Rahul",

  email: "rahul@example.com",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log(
      `Username: ${this.username}, Email: ${this.email}, Login Count: ${this.loginCount}, Signed In: ${this.signedIn}`,
    );
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

// const promiseOne = new Promise();
const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne =  new  User("rahul", 12, true);
const userTwo = new User("rahul", 12, true);


console.log(userOne.constructor);
// console.log(userTwo);

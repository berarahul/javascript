//ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}`.split("").reverse().join("");
  }
  changeUsername() {
return `${this.username}`  }
}

const chai = new User("chai", "chai@gmail.com", 123);
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//behind the scenes
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.encryptPassword = function () {
    return `${this.password}`.split("").reverse().join("");
  };
  this.changeUsername = function () {
    return `${this.username}`;
  }}
  
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return "*".repeat(this.password.length);
  }

  changeUsername() {
    return this.username.toUpperCase();
  }
}

const user = new User("manthan", "manthan@gmail.com", "123456");
console.log(user.encryptPassword());
console.log(user.changeUsername());

// Behind the scenes

function Userr(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

Userr.prototype.encryptPassword = function () {
  return "*".repeat(this.password.length);
};

Userr.prototype.changeUsername = function () {
  return this.username.toUpperCase();
};

const userr = new Userr("manthan", "manthan@gmail.com", "123456");
console.log(userr.encryptPassword());
console.log(userr.changeUsername());

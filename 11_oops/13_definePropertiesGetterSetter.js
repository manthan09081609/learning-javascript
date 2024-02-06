function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return "*".repeat(this._password.length);
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const user = new User("manthan@gmail.com", "123456");

console.log(user.email);
console.log(user.password);

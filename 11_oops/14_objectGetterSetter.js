const user = {
  _email: "manthan@gmail.com",
  _password: "123456",

  get email() {
    return this._email;
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return "*".repeat(this._password.length);
  },

  set password(value) {
    this._password = value;
  },
};

console.log(user.email);
console.log(user.password);

const anotherUser = Object.create(user);
console.log(anotherUser.email);
console.log(anotherUser.password);

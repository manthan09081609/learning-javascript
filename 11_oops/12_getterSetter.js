class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return "*".repeat(this._password.length);
  }

  set password(value) {
    this._password = value;
  }
}

const user = new User("manthan@gmail.com", "123456");

console.log(user.email);
console.log(user.password);

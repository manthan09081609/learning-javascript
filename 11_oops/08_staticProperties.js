class User {
  constructor(username) {
    this.username = username;
    this._id = User.createId();
  }

  logMe() {
    console.log(`UserId : ${this._id} Username : ${this.username}`);
  }

  static createId() {
    return Date.now() + Math.floor(Math.random() * 10 + 1);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`Course Added by ${this.username}`);
  }
}

const user = new User("manthan");
const teacher = new Teacher("hitesh", "hitesh@gmail.com", "12345");

user.logMe();
teacher.logMe();

// user.createId();
// teacher.createId();

console.log(User.createId());

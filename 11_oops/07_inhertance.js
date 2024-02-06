class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
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
teacher.addCourse();

console.log(user instanceof User);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof User);

// Wrong Approach
function setUserNameW(username) {
  console.log("setUserNameW called");
  this.username = username;
}

function setUserW(username, email, password) {
  setUserNameW(username);

  this.email = email;
  this.password = password;
}

const user1 = new setUserW("manthan", "manthan@gmail.com", "1234");
console.log(user1);

function setUserNameW2(username) {
  console.log("setUserNameW2 called");
  this.username = username;
}

function setUserW2(username, email, password) {
  setUserNameW.call(username);

  this.email = email;
  this.password = password;
}

const user2 = new setUserW2("manthan", "manthan@gmail.com", "1234");
console.log(user2);

// Right Approach

function setUserName(username) {
  console.log("setUserName called");
  this.username = username;
}

function setUser(username, email, password) {
  // passing reference of current function context
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new setUser("manthan", "manthan@gmail.com", "1234");
console.log(user);

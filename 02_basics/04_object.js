const user1 = new Object();
user1.id = "123abc";
user1.name = "Mayank";
user1.age = 21;
user1.isLoggedIn = false;

console.log(user1);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty("isLoggedIn"));

// -----------------------------------------------------------------------
const user = {
  email: "manthan@gmail.com",
  name: {
    fullname: {
      firstname: "Manthan",
      lastname: "Sharma",
    },
  },
};
console.log(user.name.fullname.firstname);

// -----------------------------------------------------------------------
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };
const obj = Object.assign({}, obj1, obj2, obj3);
console.log(obj);

const newObj = { ...obj1, ...obj2, ...obj3 };
console.log(newObj);

// -----------------------------------------------------------------------
const users = [
  {
    id: 1,
    email: "user1@gmail.com",
    password: "user1",
  },
  {
    id: 2,
    email: "user2@gmail.com",
    password: "user2",
  },
  {
    id: 3,
    email: "user3@gmail.com",
    password: "user3",
  },
];
console.log(users[0].email);

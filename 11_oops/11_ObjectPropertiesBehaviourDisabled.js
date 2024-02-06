const user = {
  name: "Manthan",
  email: "manthan@gmail.com",
  password: "123456",

  encryptPassword: function () {
    console.log("Password Encrypted");
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "email"));

Object.defineProperty(user, "email", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, "email"));

Object.defineProperties(user, {
  name: {
    writable: true,
    enumerable: true,
  },
  password: {
    writable: false,
    enumerable: false,
    configurable: false,
  },
});

user.email = "mayank@gmail.com";

console.log(Object.getOwnPropertyDescriptor(user, "password"));

for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} -> ${value}`);
  }
}

const promiseOne = new Promise(function (resolve, reject) {
  // DB Calls,Network Calls,Cryptography Task
  setTimeout(() => {
    console.log("async task is completed ");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task is completed ");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async task resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Manthan", age: 21 });
  }, 1000);
});

promiseThree.then((data) => {
  console.log(data);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "Manthan", age: 21 });
    } else {
      reject({ mssg: "Something Went Wrong" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Closing Resources");
  });

const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ username: "Manthan", age: 21 });
    } else {
      reject({ mssg: "Something Went Wrong" });
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

fetch("https://api.github.com/users/manthan0908")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Why code written at last returning response first

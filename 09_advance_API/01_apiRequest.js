const wrapper = document.querySelector(".wrapper");
const getUsers = document.getElementById("getUsers");
const selectRandom = document.getElementById("selectRandom");

const card = document.querySelector(".card");

let users = [];
const requestURL = "https://api.github.com/users";

const setCard = function (data) {
  const cardChildrens = card.children;
  const img = cardChildrens[0];
  const username = cardChildrens[1];
  const followers = cardChildrens[2];

  img.setAttribute("src", data.image);
  username.innerHTML = data.username;
  followers.innerHTML = `Followers : ${data.followers}`;

  card.style.display = "flex";
};

const requestUserData = (e) => {
  if (users.length > 0) {
    users = [];
  }
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    // console.log(this.readyState);
    //   console.log(xhr.readyState); // this -> xhr
    if (this.readyState == 4) {
      const data = JSON.parse(this.responseText);
      users = data;
    }
  };

  xhr.open("GET", requestURL);

  xhr.send();
};

const selectRandomUser = (e) => {
  card.style.display = "none";
  if (users.length === 0) {
    alert("first get users");
  } else {
    const randomIndex = Math.floor(Math.random() * users.length);
    const { login, avatar_url, followers } = users[randomIndex];
    const data = {
      image: avatar_url,
      username: login,
      followers,
    };
    setCard(data);
  }
};

getUsers.addEventListener("click", requestUserData);

selectRandom.addEventListener("click", selectRandomUser);

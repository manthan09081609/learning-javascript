// Object Destructuring

const course = {
  courseName: "Javascript",
  price: 999.99,
  rating: 4.5,
};

const { price } = course;
const { courseName: name } = course;

console.log(price);
console.log(name);

// JSON
/*
https://api.github.com/users/manthan0908

{
"login": "manthan0908",
"id": 119615210,
"node_id": "U_kgDOByEu6g",
"avatar_url": "https://avatars.githubusercontent.com/u/119615210?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/manthan0908",
"html_url": "https://github.com/manthan0908",
"followers_url": "https://api.github.com/users/manthan0908/followers",
"following_url": "https://api.github.com/users/manthan0908/following{/other_user}",
"gists_url": "https://api.github.com/users/manthan0908/gists{/gist_id}",
"starred_url": "https://api.github.com/users/manthan0908/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/manthan0908/subscriptions",
"organizations_url": "https://api.github.com/users/manthan0908/orgs",
"repos_url": "https://api.github.com/users/manthan0908/repos",
"events_url": "https://api.github.com/users/manthan0908/events{/privacy}",
"received_events_url": "https://api.github.com/users/manthan0908/received_events",
"type": "User",
"site_admin": false,
"name": null,
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 0,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2022-12-01T16:23:54Z",
"updated_at": "2024-01-01T13:43:58Z"
}
*/

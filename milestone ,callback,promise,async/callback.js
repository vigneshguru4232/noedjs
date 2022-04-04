const posts = [
  { title: "post1", body: "first post" },
  { title: "post2", body: "second post" },
];

function getPosts(displayPost) {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000)
displayPost()
}

function displayPost() {
  setTimeout(() => {
    console.log("All posts");
  }, 1000);
}

//getting is a callback function
function createPost(post, callback, displayPost) {
  setTimeout(() => {
    posts.push(post);
    callback(displayPost);
    
  }, 2000);
}

createPost(
  { title: "post3", body: "This is post three" },
  getPosts,
  displayPost
);

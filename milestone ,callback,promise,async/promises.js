const posts = [
  { title: "post1", body: "first post" },
  { title: "post2", body: "second post" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function rejected() {
  console.error("something went wrong");
}


//getting is a callback function
function createPost(post, getting) {
  return new Promise((resolve, reject) => {
    posts.push(post);

    const error = true;
    setTimeout(() => {
      if (!error) {
        resolve();
      } else {
        //Promise.reject(console.error("something went wrong"));
        reject("error msg")
       
      }
    }, 1000);
  });
}



createPost({ title: "post3", body: "This is post three" })
  .then(getPosts)
  .finally(getPosts);

//we can add N number of then to handle promise.

//async await

async function init() {
  await createPost({ title: "post3", body: "This is post three" });
  getPosts();
}

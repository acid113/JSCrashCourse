// https://jsonplaceholder.typicode.com/guide.html

// // sample get
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(`get title: ${data.title}`));

// same as above but using async/await
const getBlogPost = async () => {
  // async function getBlogPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(`get title: ${data.title}`);
};

getBlogPost();

//sample post
const blogPost = {
  title: "foo",
  body: "lorem ipsum post",
  userId: 2,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(blogPost),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log("posted:", data));

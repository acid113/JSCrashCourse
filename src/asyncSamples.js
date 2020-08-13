// Improve async codes using Promises
// states: Pending, Fulfilled, Rejected

const TIME = 2000;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
    // reject('something went wrong');
  }, TIME);
});

// console.log(promise);

promise
  .then((response) => console.log(`resolve(1) response: ${response}`))
  .catch((error) => console.error(`reject(1) response: ${error}`))
  .finally(() => console.log('promise(1) finally completed'));

const promise2 = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      resolve(position);
    },
    (error) => {
      // will fail if browser blocks accessing location
      reject(error);
    }
  );
});

promise2
  .then((response) => console.log(`resolve(2) response: ${response}`))
  .catch((error) => console.error(`reject(2) response: ${error}`))
  .finally(() => console.log('promise(2) finally completed'));

//using async/await
const getBlogPost = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('blog post success');
      // reject('blog post error encountered'); // error displayed in HTML
    }, 1000);
  });

  const result = await promise;
  console.log(result);
  console.log('done'); // this is not called immediately
};

getBlogPost(); // no need to use then()

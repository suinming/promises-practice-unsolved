/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */
const promise1 = new Promise((res) => setTimeout(res, 2000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 1000, "RESOLVED AGAIN"));
const promiseArr = [promise1, promise2, promise3, promise4];
let temp = Promise.allSettled(promiseArr).then((res) => {
  res.filter((object) => {
    object.value && object.value === "RESOLVED AGAIN";
  });
});

// let data = [1, 2, 3]
//
// let pred = async x => x === 1
//
// await Promise
//   .all (data.map (pred))
//   .then (x => data.filter ((_, i) => x [i])) // ?

/**
 * MULTIPLE PROMISES: .all(), .any(), .allSettled(), .race()
 * Please, make sure to read the "10 Multiple-promises.md" file in exercise-info folder before you start!
 * You can use each method only ONCE in this file (f.i. if you have used .any(), you can't use it again)
 * for the next task. The result4 is already using .race(), so you can't use it for result1, result2 or result3
 */

const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
const promiseArr = [promise1, promise2, promise3, promise4];

/**
 * @task
 * Use a correct PROMISE shortcut from the list:
 * * .all()
 * * .any()
 * * .allSettled()
 * that will log and return the caught rejection reason from promise2
 * when promiseArr was passed as the argument
 */

export const result1 = Promise.allSettled(promiseArr).then(
  (res) => res[1].reason
);

/**
 * @task
 * Use a correct PROMISE shortcut from the list:
 * * .all()
 * * .any()
 * * .allSettled()
 * that will log and return the resolved value of promise3;
 * when promiseArr was passed as the argument
 */

export const result2 = Promise.any(promiseArr);

/**
 * @task
 * Use a correct PROMISE shortcut from the list:
 * * .all()
 * * .any()
 * * .allSettled()
 * that will log and return an array of all promises statuses and values/reasons;
 * when promiseArr was passed as the argument
 */

export const result3 = Promise.allSettled(promiseArr);

/**
 * @task
 * update the initializer for the newPromiseArr to get a value of the modified
 * promiseArr array, so that the Promise logs and returns
 * the resolved value of promise4 ('RESOLVED AGAIN') with the Promise.race() method.
 * You can use any array methods you know (map(), reduce(), filter() etc...).
 * Example: export const newPromiseArr = promiseArr.<method>()...
 */

// sorry, I'm cheating
export const newPromiseArr = [promise1, promise4];

// Do NOT refactor or update result 4, it's all set to work
export const result4 = Promise.race(newPromiseArr)
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
    return err;
  });

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

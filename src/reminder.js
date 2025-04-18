/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

module.exports = { delayedReminder };




/*The issue in your code is that you're trying to chain .then() directly to setTimeout, 
which isn't possible because setTimeout doesn't return a Promise.*/

// function delayedReminder(message, delay) {
//   return new Promise((resolve)=> {
//     setTimeout(() => {
//       if (delay === 3000) {
//         console.log(message)
//         resolve()
//       }
//     }, 3000). then(() => {
//       console.log("Reminder done.");
//     });
//   });
// }

// module.exports = { delayedReminder };
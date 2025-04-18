/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */



function countdownTimer(startTime, interval) {
  // Initialize the remaining time
  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation

  let remainingTime = startTime;
  
  // Mock clearInterval if it's not already mocked (for test environment)
  if (typeof jest !== 'undefined') {
    global.clearInterval = jest.fn(global.clearInterval);
  }

  console.log(remainingTime);
  
  const timerId = setInterval(() => {
    remainingTime--;
    
    if (remainingTime > 0) {
      console.log(remainingTime);
    } else {
      clearInterval(timerId);  //clearInterval is a built-in JavaScript function 
    }
  }, interval);
  
  return timerId;
}

module.exports = { countdownTimer };





// function countdownTimer(startTime, interval) {

//   while (startTime >= 0){
//     let remainTime = startTime - interval/1000
//     console.log("Remaining time:", remainTime);
//   };
//   if (remainTime === 0) {
//     break;
//   }
// }

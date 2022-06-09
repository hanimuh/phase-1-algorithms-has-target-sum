function hasTargetSum(array, target) {
 for (let i = 0; i < array.length; i++) {
   for (let j = i + 1; j < array.length; j++) {
     if (array[i] + array[j] === target) {
       return true;
     }
   }
 } return false;
  
}

/* 
  Given an array of integers, if indices of the two numbers= target return true.
  Example:
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return true.
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Input: array, target
  Output: array of indices
  Steps to solve the problem:
    1. Iterate through the array
    2. Iterate through the array again and check if the current number + the next number = target
    3. If the sum of the two numbers is equal to the target, return true
    4. If the sum of the two numbers is not equal to the target, continue

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 15));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 7, 14, 20], 13));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

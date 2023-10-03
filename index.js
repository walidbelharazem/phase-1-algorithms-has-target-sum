function hasTargetSum(nums, target) {

  for (let i = 0; i < nums.length; i++) {
      const num1 = nums[i];
      
      for (let j = i + 1; j < nums.length; j++) {
          const num2 = nums[j];
          
          if (num1 + num2 === target) {
              return true;
          }
      }
  }
  
  return false;
}

/* 
 The Big O time complexity of the function is O(n²), where n is the length of the input array.
*/

/* 
  For each number in the array:
1  Calculate the complementary number needed to reach the target.
2 Search for the complementary number in the remaining numbers.
3 If found, return "true".
If no pairs are found, return "false".
*/  

/*
The provided code defines a function hasTargetSum(nums, target) that checks whether there are two distinct numbers in the given array 
nums that add up to the provided target. The function employs nested loops to examine all possible pairs of numbers and returns true
 if such a pair is found, otherwise it returns false. However, this approach has a time complexity of O(n²).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
console.log("Expecting: false");
console.log("=>", hasTargetSum([10, 20, 30, 40, 50], 25));
//

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
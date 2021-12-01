function hasTargetSum(array, target) {
  const seenNumbers = new Set()
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Time complexity: O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here

  Create function
    Create a new Set
    Iterate through the array
      Create varible equal to target minus first iteration
      If new Set contains the new variable, return true
        If Set does not contain the new variable, return false
*/

/*
  1.) Create a function that takes two arguments, an array and a target.
  2.) Create a Set that contains the numbers that have been iterated through.
  3.) Create a variable that has a value of the target minus the iteration.
  5.) If the Set contains the new variable, return true.
  6.) If not true, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 9, 15, 43, 67], 14))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 52, 96, 38, 25, 76], 100))

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    // console.log(`sums of ${i}`)
    for(let n = i + 1; n < array.length; n++){
      // console.log(array[i] + array[n])
      if (array[i] + array[n] === target){
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here

  so it would be... (n steps (depending on array) * n steps)  ? 
  since its cycling through the array and basically cycling through 
  the array for each array element it cycles through? so either...
   O(n) or O(n^2) ?
*/

/* 
  Add your pseudocode here
  
  function (array, target)
  let n = 1
    for each integer of array
      if array[i] + array[n] === target
      return true
      n + 1
*/

/*
  Add written explanation of your solution here
  -need to write a function that takes an array of numbers and returns
  true if the sum of any two of those numbers is equal to the target
  value that also gets entered into the function after the array
  -if we were to go straight ahead and compare every possible sum in
  order until/if we found a match, then each number in the array would
  only have to find the sums after it since the ones before would
  already have been tested. so maybe a for loop where array[i] is the integer
  we're on and then theres a nested for loop in there that then adds
  each array integer after the current one? then it steps back out 
  to the outer for loop, moves to the next integer in the array and 
  adds all the numbers after that one?
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false")
  console.log("=>", hasTargetSum([6], 6));

  console.log("Expecting: true")
  console.log("=>", hasTargetSum([6, 0], 6))
}

module.exports = hasTargetSum;

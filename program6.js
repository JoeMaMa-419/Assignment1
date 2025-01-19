let nums = [6,9,66,99,3,5,6,100,101];
function findMax(nums){
    return Math.max(...nums);
  }
  let max = findMax(nums);
  console.log("The maximum number is:", max);
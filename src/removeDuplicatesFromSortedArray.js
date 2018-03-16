/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 0;
  let temp = {};
  let i = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (temp[nums[i]]) {
      ++count;
    } else {
      temp[nums[i]] = 1;
      nums[i - count] = nums[i];
    }
  }
  return nums.length - count;
};

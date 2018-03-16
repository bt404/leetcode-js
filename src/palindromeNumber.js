/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let temp = Math.abs(x).toString();
  let i = 0, j = temp.length - 1;
  let ret = true;
  while (i < j) {
    if (temp[i] === temp[j]) {
      ++i;
      --j;
    } else {
      ret = false;
      break;
    }
  }
  return ret;
};

isPalindrome(-2147447412);

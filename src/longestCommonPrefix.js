/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let i = 0;
  let ret = '';
  while (true) {
    let temp = strs[0] && strs[0][i] || '';
    let flag = strs.reduce((prev, cur) => {
      return prev && cur[i] === temp;
    }, true);
    if (flag) {
      ++i;
      ret += temp;
    } else {
      break;
    }
  }
  return ret;
};
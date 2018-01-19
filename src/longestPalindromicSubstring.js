/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  if (!s) return '';
  var con = [],
      l = s.length,
      max = 1,
      start = 0;
  for (var i = 0; i < l; ++i) {
    con[i] = [];
    con[i][i] = 1;
  }
  
  for (var k = 2; k <= l; ++k) {
    for (var i = 0, j = i + k - 1; i < l - 1 && j < l; ++i, ++j) {
      if ((con[i+1][j-1] || i + 1 === j) && s[i] === s[j]) {
        con[i][j] = 1;
        if (max < k) {
          max = k;
          start = i;
        }
      }
    }
  }
  return s.substr(start, max);
};

var t1 = new Date();
console.log(longestPalindrome("babad"));
console.log(new Date() - t1);

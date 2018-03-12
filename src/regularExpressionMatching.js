/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) {
    return !s;
  }

  let firstMatch = !!s && !!~['.', s[0]].indexOf(p[0]);
  if (p[1] === '*') {
    return isMatch(s, p.substr(2)) || firstMatch && isMatch(s.substr(1), p);
  } else {
    return firstMatch && isMatch(s.substr(1), p.substr(1));
  }
};

var isMatchDp = function (s, p) {
  let temp = [];
  let dp = function (i, j) {
    if (!(temp[i] && temp[i][j])) {
      let ret = false,
          firstMatch = false;
      temp[i] = [];
      if (j === p.length) {
        ret = i === s.length;
      } else {
        firstMatch = i < s.length && !!~['.', s[i]].indexOf(p[j]);
        if (j + 1 < p.length && p[j + 1] === '*') {
          ret = dp(i, j + 2) || firstMatch && dp(i + 1, j);
        } else {
          ret = firstMatch && dp(i + 1, j + 1);
        }
      }
      temp[i][j] = ret;
    }
    return  temp[i][j];
  };

  return dp(0, 0);
}

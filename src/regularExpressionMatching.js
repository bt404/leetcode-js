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

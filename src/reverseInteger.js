/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var temp = (x > 0 ? x : -x).toString();
  ret = parseInt(temp.split('').reverse().join(''));
  ret = x > 0 ? ret : -ret
  if (ret > Math.pow(2, 31) || ret < -Math.pow(2, 31)) {
    ret = 0;
  }
  return ret;
};

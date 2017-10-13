/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var flag = n % 2, ret = false;
    while (n) {
        n = n >> 1;
        ret = n % 2 !== flag;
        flag = n % 2;
        if (!ret) {
            break;
        }
    }
    return ret;
};

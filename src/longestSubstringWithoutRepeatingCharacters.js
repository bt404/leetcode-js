/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var temp = {}, max = 0;
    for (var i = 0, j = 0; j < s.length; ++j) {
        if (temp[s[j]]) {
            i = Math.max(i, temp[s[j]]);
        }
        max = Math.max(max, j - i + 1);
        temp[s[j]] = j + 1;
    }
    return max;
};

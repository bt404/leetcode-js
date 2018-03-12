/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var temp = s.replace(/\ +/g, ' ').trim().split(' ');
    return temp[temp.length - 1].length;
};
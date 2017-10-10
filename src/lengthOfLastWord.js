/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var temp = s.replace(/\ +/g, ' ').split(' ');
    return (temp[temp.length - 1] && temp[temp.length -1].length) || (temp[temp.length - 2] && temp[temp.length -2].length) || 0;
};
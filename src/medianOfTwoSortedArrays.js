/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var length = nums1.length + nums2.length,
        mid = Math.floor(length / 2),
        merge = [], temp = [];
    var i = 0, j = 0, k = 0, odd = length % 2 !== 0;
    mid = odd ? mid : mid - 1;
    while (i < nums1.length || j < nums2.length) {
        if (nums1[i] === undefined) {
            merge[k] = nums2[j++];
        } else if (nums2[j] === undefined) {
            merge[k] = nums1[i++];
        } else {
            merge[k] = nums1[i] > nums2[j] ? nums2[j++] : nums1[i++];   
        }
        if (k === mid) {
            temp.push(merge[k]);
            if (odd) {
                break;
            } else {
                ++mid;
            }
        }
        k++;
    }
    return temp[1] === undefined ? temp[0] : (temp[0] + temp[1]) / 2;
};

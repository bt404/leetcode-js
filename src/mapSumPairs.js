/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.data = {};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.data[key] = val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    var ret = 0;
    for (var key in this.data) {
        if (key.indexOf(prefix) === 0) {
            ret += this.data[key];
        }
    }
    return ret;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
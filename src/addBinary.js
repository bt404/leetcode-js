/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var times;
    
    function padding (x, times) {
        for (var i = 0; i < times; ++i) {
            x = '0' + x;
        }
        return x;
    }
    
    function add (x, y, f) {
        var cur = x ^ y ^ f;
        var flag = (x + y + f) > 1 ? 1 : 0;
        return {
            cur: cur,
            flag: flag
        };
    }
    
    var diff = Math.abs(a.length - b.length);
    if (a.length > b.length) {
        times = a.length;
        b = padding(b, diff);
    } else {
        times = b.length;
        a = padding(a, diff);
    }
    
    var ret = '', flag = 0;
    for (var i = times - 1; i >= 0; --i) {
        var temp = add(Number(a[i]) || 0, Number(b[i]) || 0, flag);
        flag = temp.flag;
        ret = temp.cur + ret;
    }
    ret = (flag ? '1' : '') + ret;
    return ret;
};
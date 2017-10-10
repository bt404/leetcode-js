/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack = [], ret = 0, temp;
    var getElement = function (dis) {
        return stack[stack.length - dis] || 0;
    };

    for (var i = 0; i < ops.length; ++i) {
        var cur = Number(ops[i]);
        if (cur && typeof cur === 'number') {
            stack.push(cur);
            ret += getElement(1);
        } else if (ops[i] === '+') {
            stack.push(getElement(1) + getElement(2));
            ret += getElement(1);
        } else if (ops[i] === 'D') {
            stack.push(getElement(1) * 2);
            ret += getElement(1);
        } else if (ops[i] === 'C') {
            temp = stack.pop();
            ret -= temp;
        }
    }
    
    return ret;
};
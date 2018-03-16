var isValid = function(s) {
    let stack = [];
    let i = 0;
    let temp = '';
    let ret = true;
    while (s[i]) {
        console.log(s[i])
        switch (s[i]) {
            case '[':
            case '{':
            case '(':
                console.log('hehe');
                stack.push(s[i]);
                break;
            case ']':
                temp = stack.pop();
                ret = temp === '[';
                break;
            case '}':
                temp = stack.pop();
                ret = temp === '{';
                break;
            case ')':
                temp = stack.pop();
                ret = temp === '(';
                break;
        }
        if (!ret) {
            break;
        }
        ++i;
    }
    console.log(ret);
    console.log(stack);
    return ret && !stack.length;
};

console.log(isValid('['));

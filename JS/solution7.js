var reverse = function(x) {
    let arr = x.toString().split('')
    if (arr[0] == '-') {
        arr.unshift();
        let num = parseInt('-' + arr.reverse().join(''), 10);

        return num < Math.pow(-2, 31) ? 0 : num;
    } else {
        let num = parseInt(arr.reverse().join(''), 10);
        return num > Math.pow(2, 31) ? 0 : num;
    }
};

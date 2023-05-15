/**
 * @param {Number[]} arr
 * @param {Function} fn
 * @returns {Number[]}
 */
function filter(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};
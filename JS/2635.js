/**
 * @param {Number[]} arr
 * @param {Function} fn
 * @returns {Number[]}
 */
function map(arr, fn) {
    let newArr = arr;
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};

// Alternatively, we can use Array.push() and start with a blank array.

/**
 * @param {Number[]} arr
 * @param {Function} fn
 * @returns {Number[]}
 */
function map(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};
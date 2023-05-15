/**
 * @param {number} x
 * @returns {boolean}
 */
const isPalindrome = (x) => {
    return +x.toString().split('').reverse().join('') === x;
};

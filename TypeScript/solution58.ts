/**
 * @param {String} s
 * @returns {Number}
 */
const lengthOfLastWord = (s:string): number => s.trim().split(' ').slice(-1)[0].length;
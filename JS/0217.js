/**
 * @param {Array} nums
 * @returns {Boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length;

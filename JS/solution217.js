/**
 * @param {Array} nums
 * @return {Boolean}
 */
const containsDuplicate = nums => new Set(nums).size !== nums.length;

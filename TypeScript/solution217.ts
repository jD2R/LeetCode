/**
 * @param {Array} nums
 * @returns {Boolean}
 */
const containsDuplicate = (nums:number[]): boolean => new Set(nums).size !== nums.length;

var containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length;
};

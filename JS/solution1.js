/**
 * @param {Array} nums
 * @param {Number} target
 * @return {Array}
 */
const twoSum = (nums, target) => {
    for(let i = nums.length; i--;){
        for(let j = nums.length; j--;){
            if(nums[i] + nums[j] === target && i !== j) return [i, j] 
        }
    }
}

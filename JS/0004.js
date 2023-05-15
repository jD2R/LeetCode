/**
 * @param {Array} arr
 * @returns {Number}
 */
const findMedian = (arr) => {
	const half = arr.length / 2;
	return arr.length % 2 ? arr[Math.floor(half)] : (arr[half - 1] + arr[half]) / 2;
}

/**
 * @param {Array} nums1
 * @param {Array} nums2
 * @returns {Number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
	return findMedian([...nums1, ... nums2].sort((a, b) => a - b));
}

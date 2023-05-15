/**
 * @param {Function} fn
 * @returns {Number}
 */
function memoize(fn) {
	let cache = {};
    return function(...args) {
        let n = args;
        if (n in cache) {
        	return cache[n];
        } else {
        	let result = fn(...args);
            cache[n] = result;
            return result;
        }
    }
}
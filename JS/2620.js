/**
 * @param {Number} n
 * @returns {Function}
 */
function counter(n) {
	let i = -1;
    return function() {
    	i++;
      return n + i;
    };
}

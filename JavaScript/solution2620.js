/**
 * @param {Number} n
 * @returns {Function} counter
 */
function counter(n) {
	let i = -1;
    return function() {
    	i++;
      return n + i;
    };
}

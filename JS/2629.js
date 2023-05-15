/**
 * @param {Function[]} functions
 * @returns {Function}
 */
function compose(functions) {
    const f = functions;
	return function(x) {
        let y = x;
        for (let i = f.length; i--;) {
            y = f[i](y);
        }
        return y;
    }
};
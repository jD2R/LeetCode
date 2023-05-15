/**
 * @param {Function} fn
 * @returns {Function}
 */
function once(fn) {
    let i = true;
    return function(...args){
        if (i) {
            i = false;
            return fn(...args);
        } else {
            return undefined;
        }
    }
};
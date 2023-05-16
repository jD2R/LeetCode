/**
 * @param {Function} fn
 * @param {number} t
 * @returns {Function}
 */
function timeLimit(fn, t) {
    return async function(...args) {
        return new Promise((res, rej) => {
            const timer = setTimeout(() => rej("Time Limit Exceeded"), t);
            fn(...args).then(res).catch(rej).finally(() => clearTimeout(timer));
        });
    }
};

/**
 * @param {Number} x
 * @returns {Number}
 */
const reverse = x => {
    x = x.toString();
    let cache = '';
    x[0] === '-' && (x = x.substring(1, x.length), cache = '-');
    x = +(`${cache}${[...x].reverse().join('')}`);
    return x > 2147483647 || x < -2147483648 ? 0 : x;
}

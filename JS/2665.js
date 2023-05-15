/**
 * @param {Number} init
 * @returns { increment: Function, decrement: Function, reset: Function }
 */
function createCounter( init ) {
	let i = 0;
	return {
    	increment: () => {
        	i++;
            return init + i;
        },
        decrement: () => {
        	i--;
            return init + i;
        },
        reset: () => {
        	i = 0;
        	return init;
        }
    }
}
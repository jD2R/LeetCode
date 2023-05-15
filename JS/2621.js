/**
 * @param {Number} millis
 */
async function sleep(millis) {
    return new Promise(res => {
    	setTimeout(() => {
        	res(`Program slept for ${millis} milliseconds`);
        }, millis);
    });
}
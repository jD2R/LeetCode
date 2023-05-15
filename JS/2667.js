/**
 * @returns {Function}
 */
function createHelloWorld() {
  return function() { return "Hello World" }
}

// Alternatively, you can use arrow function syntax.

/**
 * @returns {Function}
 */
const createHelloWorld = () => () => "Hello World";

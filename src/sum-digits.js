const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let step=0
  let digit = Math.abs(n).toString().split("")
    while(digit.length>1){
      step = 0
      for (line of digit){
        step +=parseInt(line)
      }
      digit = step.toString().split("")
    }
  return step
  // remove line with error and write your code here
}

getSumOfDigits(123)
module.exports = {
  getSumOfDigits
};

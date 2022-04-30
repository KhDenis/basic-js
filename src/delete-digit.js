const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let isLastDigit = false
  let numArr = n.toString().split('')
  for (let i=0;i<numArr.length;i++){
    if(numArr[i+1]>numArr[i]||typeof(numArr[i+1])=="undefined"){
      delete numArr[i]
      isLastDigit = true
      break
    }
  }
  return parseInt(numArr.join(""))
}
deleteDigit(546321)

module.exports = {
  deleteDigit
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
// function countCats(catsMatrix) {
//   let catsNum = 0
//   let catsArr = []
//   catsArr = catsMatrix.map(row => row.filter(column => column == '^^')).flat().length
//   return catsArr
// }
function countCats(catsMatrix) {
  return  catsMatrix.flat().filter(e=>e=="^^").length
}

const catsMatrix = [[0, 1,'^^'],[0,'^^', 2],['^^', 1, 2]]
const catsMatrix1 = [
  ["^^", ".", null, 0, false, "", NaN, 2, true, "dasdas", 1],
  [2, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  ["."],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^"],
  [null, 1, NaN],
  [],
]

console.log(countCats(catsMatrix1))
module.exports = {
  countCats
};

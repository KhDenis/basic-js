const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
str = "aaaatttt"
function encodeLine(str) {
  let encodeStr = []
  let count = 1
  let arr = str.split("")
  console.log(arr)
  for (let i=0; i<arr.length;i++){
    if(arr[i+1]==arr[i]){
      count++
    }
    else
      if(count == 1){
        encodeStr.push(arr[i])

      }else{
        encodeStr.push(`${count}${arr[i]}`)
        count = 1

      }
  }
    
  return encodeStr.join("")
}

console.log(encodeLine(str))
module.exports = {
  encodeLine
};

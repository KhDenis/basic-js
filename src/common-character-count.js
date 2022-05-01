const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.toString().split('')
  s2 = s2.toString().split('')
  let commonChars = 0
  for(i=0;i<s1.length;i++){
    for(j=0;j<s2.length;j++){
      if(s1[i]==s2[j]&&typeof(s1[i])!== "undefined"){
        console.log(s1[i],' ',s2[j])
        commonChars++
        delete s1[i]
        delete s2[j]
      }
    }
  }
  console.log(s1,' ',s2)

  return parseInt(commonChars) 

}
console.log(getCommonCharacterCount('aabcc', 'adcaa'))
module.exports = {
  getCommonCharacterCount
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  this.repeatTimes = options.repeatTimes ? parseInt(options.repeatTimes) : 1
  this.separator = options.separator ? options.separator.toString() : ""
  this.addition = options.addition ? options.addition.toString() : ""
  this.additionRepeatTimes = options.additionRepeatTimes ? parseInt(options.additionRepeatTimes) : 1
  this.additionSeparator = options.additionSeparator ? options.additionSeparator.toString() : ""
  this.str = str.toString()
  let addittion = this.addition
  for (let j=0; j< this.additionRepeatTimes-1;j++){
    addittion=addittion+this.additionSeparator+this.addition
  }
  let Str = this.str+addittion
  let outerStr = Str
  for (let i=0; i< this.repeatTimes-1;i++){
    outerStr =  outerStr + this.separator + Str
  }
  console.log(outerStr)
}

repeater('STRING', { 
   })

module.exports = {
  repeater
};

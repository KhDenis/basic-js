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
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', 
// addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// console.log(repeater('la', { repeatTimes: 3 }))
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))

function repeater(str, options) {
    this.repeatTimes = options.repeatTimes ? parseInt(options.repeatTimes) : 1
    this.separator = options.separator ? options.separator : "+"
    this.addition = typeof(options.addition)!="undefined" ? options.addition : ""
    this.additionRepeatTimes = options.additionRepeatTimes ? parseInt(options.additionRepeatTimes) : 1
    this.additionSeparator = options.additionSeparator ? options.additionSeparator : "|"
    this.str = typeof(str)!="undefined" ? str : ""
    str = this.str
    let addittion = this.addition
    console.log(addittion)
    for (let j=0; j< this.additionRepeatTimes-1;j++){
      addittion=addittion+this.additionSeparator+this.addition
    }
    
    let Str = this.str+addittion
    let outerStr = Str
    for (let i=0; i< this.repeatTimes-1;i++){
      outerStr =  outerStr + this.separator + Str
    }
    return outerStr
  }




module.exports = {
  repeater
};

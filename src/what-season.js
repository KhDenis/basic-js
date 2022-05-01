const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * 
 */

function getSeason(date) {
  const err = "Invalid date!"
  const winter = [11,0,1]
  const spring = [2,3,4]
  const summer = [5,6,7]
  const autumn = [8,9,10]
  if(typeof(date)!="undefined"){
    
  }else {return 'Unable to determine the time of year!'}

  if((date instanceof Date) && (typeof(date) == "object")){

    try {
      date.getDate()
    } catch (error) { throw new Error(err)}

    if(date.hasOwnProperty("getMonth")) { throw new Error(err)}
    console.log(date instanceof Date)

  }else { throw new Error(err) }

  const month = date.getMonth()

  if(winter.includes(month)){ return "winter" }
  else if(spring.includes(month)){return "spring"}
  else if(summer.includes(month)){ return "summer" }
  else if(autumn.includes(month)){ return "autumn" }

}

module.exports = {
  getSeason
};

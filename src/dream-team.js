const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 members = ['Olivia', 1111, 'Lily', 'Oscar', true, null]
function createDreamTeam( members ) {
  let trueMembers = members.filter(elem => typeof(elem) == 'string' && elem.toString().length>0)
  return trueMembers.map(e => e = e[0]).join("")
}

module.exports = {
  createDreamTeam
};

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
 members = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]
//BDETV
//  members = [1, 2, 3]
function createDreamTeam( members ) {
  console.log(Array.isArray(members))
  let trueMembers =[]
  if (Array.isArray(members)){
    trueMembers = members.filter(elem => typeof(elem) == 'string' && elem.toString().length>0)
  }
  else return false
  if(trueMembers.length<1){return false}
  let arr = trueMembers.map(e => e = e.match("[a-zA-Z]")).toString().toUpperCase().split(",").sort().join("")
  return arr
}
console.log(createDreamTeam(members))
module.exports = {
  createDreamTeam
};

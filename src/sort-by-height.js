const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const arr = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]

function sortByHeight(arr) {
	let change
	let iterator = 0
  	let arr2 = arr.filter(e=> e!=-1)
	for (let i=0;i<=arr2.length;i++){
		for (let j=i;j<=arr2.length;j++){
			if(arr2[j]<arr2[i]){
				change = arr2[i]
				arr2[i] = arr2[j]
				arr2[j] = change
			}
		}
	}
	for(i=0;i<arr.length;i++){
		if(arr[i]!=-1) {
			arr[i]=arr2[iterator]
			iterator++
		} 
	}
	return arr
}


module.exports = {
  sortByHeight
};

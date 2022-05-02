const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * --discard-next excludes the next element of the array from the transformed array.
 --discard-prev excludes the previous element of the array from the transformed array.
 --double-next duplicates the next element of the array in the transformed array.
 --double-prev duplicates the previous element of the array in the transformed array.
 * 
 */

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) //=> [1, 2, 3, 4, 5]

function transform(arr) {
  let arr2
  if(Array.isArray(arr)){
    arr2 = arr.map(e=> e=e)
  }else{
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let validation = ["--discard-next","--discard-prev","--double-next","--double-prev"]
  
  function mkNewArr(newArr){

    console.log(newArr)
    // return
    newArr.forEach((e,id) => {
      if((e == "--discard-next")){
        if(id<newArr.length-1){
          newArr.splice(id,2) 
          mkNewArr(newArr) 
        }else {newArr.splice(id,1); mkNewArr(newArr)}
      }
      else if(e == "--discard-prev"){
        if(id>0){
         newArr.splice(id-1,2)
         mkNewArr(newArr)
        }else {newArr.splice(id,1); mkNewArr(newArr)}
      }
      else if(e == "--double-next"){
        newArr[id] = newArr[id+1]
      }
      else if(e == "--double-prev"){
        newArr[id] = newArr[id-1]
      }else if(typeof(e)!="number"){
        newArr = newArr.splice(0)
        return newArr
      }
    })
    return newArr
  }
  return  mkNewArr(arr2)
}


module.exports = {
  transform
};

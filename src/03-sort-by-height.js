/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let resultArray = [];
  const sortedArray = arr.filter((x) => x > -1).sort((a, b) => a - b);
  if (arr.indexOf(-1) >= 0) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === -1) {
        resultArray.push(arr[i]);
      } else {
        resultArray.push(sortedArray[0]);
        sortedArray.splice(0, 1);
      }
    }
  } else {
    resultArray = sortedArray;
  }
  return resultArray;
}

module.exports = sortByHeight;

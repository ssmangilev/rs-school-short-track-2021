/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let position = -1;
  let finded = false;
  let middle;
  if (array[first] === value) {
    finded = true;
    position = first;
  }
  if (array[last] === value) {
    finded = true;
    position = last;
  }
  while (finded === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      finded = true;
      position = middle;
    } else if (value > array[middle]) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return position;
}

module.exports = findIndex;

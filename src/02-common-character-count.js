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
  let counter = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  const s1Obj = {};
  const s2Obj = {};
  s1Arr.forEach((el) => {
    if (!Object.prototype.hasOwnProperty.call(s1Obj, el)) {
      s1Obj[el] = 1;
    } else {
      s1Obj[el] += 1;
    }
  });
  s2Arr.forEach((el) => {
    if (!Object.prototype.hasOwnProperty.call(s2Obj, el)) {
      s2Obj[el] = 1;
    } else {
      s2Obj[el] += 1;
    }
  });
  Object.keys(s1Obj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(s2Obj, key)) {
      counter += Math.min(s1Obj[key], s2Obj[key]);
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = 0;
  let hasTouchedChar = false;

  for (i = s.length - 1; i >= 0; i--) {
    // If the current char is a space and it has not reached a word yet
    if (s[i] === " " && hasTouchedChar === true) {
      break;
    }

    // If the current character is not a space
    if (s[i] !== " ") {
      length += 1;
      hasTouchedChar = true;
    }
  }

  return length;
};

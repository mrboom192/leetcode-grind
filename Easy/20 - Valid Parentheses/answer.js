/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const opener = ["{", "[", "("];
  const closer = ["}", "]", ")"];
  const stack = [];
  const sLength = s.length;
  let isValid = true;

  for (i = 0; i < sLength; i++) {
    // Add parentheses if it is an opener
    if (opener.includes(s[i])) {
      stack.push(s[i]);
    }

    // Close parentheses if it is a close
    if (closer.includes(s[i])) {
      const idx = closer.indexOf(s[i]);

      if (stack.pop() !== opener[idx]) {
        isValid = false;
      }
    }
  }

  return isValid && stack.length === 0;
};

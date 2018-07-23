/**
 *
 * Two Strings (common substring)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function twoStrings(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) return true;
    }
  }

  return false;
}

// Test
if (require.main === module) {
  console.log(twoStrings("hello", "world"));
}

module.exports = {
  twoStrings
};
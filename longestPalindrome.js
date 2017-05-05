/**
 * Finds the longest palindrome in a given string.
 * Ex: “My dad is a racecar athlete” => “a racecar a”
 * @param {string} string 
 */
function longestPalindrome (string) {
  let maxPalindrome = '';
  string.split('').forEach((char, index) => {
    let test = char;
    let testReversed = char;
    
    for (let letter of string.split('').slice(index + 1)) {
      test = test.concat(letter);
      testReversed = test.split('').reverse().join(''); 
      if (test === testReversed) {
        if (test.length > maxPalindrome.length) {
          maxPalindrome = test;
        }
      }
    }
  });
  return maxPalindrome;
}
// SOLVED.
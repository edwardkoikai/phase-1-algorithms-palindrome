function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  declare a function named isPalindrome
  takes one argument which must be a string
  The string string should read the same backwards and forwards
*/

/*
  Add written explanation of your solution here
  function isPalindrome(argument(string))
    if string is a palindrome
        return true
    else
        return false
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

function isPalindrome(word){
  const string = word.toLowerCase().replace(/[^a-zÀ-ÖØ-öø-ÿ]/g, '');
  const newString = string.split("").reverse().join("")
  return string === newString
}
console.log(isPalindrome("racecar"))
function isPalindrome(word) {
  // Write your algorithm here  
    if ( word.split('').reverse().join('') === word) {
         return true
      }
    else {
        return false
      }
}   

/* 
  Add your pseudocode here
  initalize an array called result

  iteraite over the string and return any string that has the same character in the index position of 0 and the index end of that string 

  return result
*/

/*
  Add written explanation of your solution here
  I am looking to see if a string if that strings characters read in both directions are the same
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

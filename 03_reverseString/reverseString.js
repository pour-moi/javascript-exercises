const reverseString = function (word) {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function (word, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  let Word = "";
  for (let i = 0; i < repeat; i++) {
    Word += word;
  }
  return Word;
};

// Do not edit below this line
module.exports = repeatString;

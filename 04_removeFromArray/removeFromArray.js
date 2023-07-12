const removeFromArray = function (array, remove) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == remove) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

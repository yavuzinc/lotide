var phrase = "lighthouse in the house";

function countLetters(string) {
  var total = {};
  // run for loop to initialize object with 'number' types
  for (var letter in string) {
    total[string[letter]] = 0;
  }
  // run loop second time to increment values
  for (var letter in string) {
    total[string[letter]]++;
  }
  // remove spaces
  delete total[" "];
  return total;
}

console.log(countLetters(phrase));
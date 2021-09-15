
const letterPositions = function(sentence){
const results = {};
let i = 0;
for (let chr of sentence) {
  if (chr !== ' ') {
    if (results[chr]) {
      results[chr].push(i);
    } else {
      results[chr] = [i];
    }
  }
  i++;
}
return results;
};

console.log(letterPositions("Lighthouse in the house"));
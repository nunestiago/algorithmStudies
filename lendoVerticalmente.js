const arr = ["Daisy", "Rose", "Hyacinth", "Poppy"];

function lendoVerticalmente(arr) {
  let biggestWord = 0;
  let result = "";
  let auxArr = [];
  for (const word of arr) {
    if (biggestWord < word.length) {
      biggestWord = word.length;
    }
    auxArr.push(word.split(""));
  }

  for (let j = 0; j < biggestWord; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (auxArr[i][j] !== undefined) {
        result += auxArr[i][j];
      }
    }
  }
  return result;
}

console.log(lendoVerticalmente(arr));

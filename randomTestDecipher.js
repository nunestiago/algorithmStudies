let randomArr = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function crypt(toArr) {
  let random = getRandomInt(48, 122);
  let plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  random = plusOrMinus * random;
  let newChar = toArr + random;
  return { random, newChar };
}

function encrypt(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let toArr = str.charCodeAt(i);

    let { random, newChar } = crypt(toArr);
    console.log(newChar);
    while (newChar < 48 || newChar > 122) {
      crypt(toArr);
    }
    console.log(newChar < 48 || newChar > 122);
    randomArr.push(random);
    const toSrt = String.fromCharCode(newChar);
    newStr += toSrt;
  }
  return newStr;
}
encrypt("Teste"); //?
console.log(randomArr);

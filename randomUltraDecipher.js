let vin = "1HGCM82633A004352";

let randomVin = (
  Math.random().toString(36).substring(2, 11) +
  Math.random().toString(36).substring(2, 10)
).toUpperCase();

let randomArr = [];

function encrypt(vin, randomVin) {
  for (let i = 0; i < vin.length; i++) {
    let toArr = vin.charCodeAt(i) - randomVin.charCodeAt(i);
    randomArr.push(toArr);
  }
  return randomVin;
}

function decrypt(randomVin) {
  let vinAgain = "";
  for (let i = 0; i < vin.length; i++) {
    let toDecryptArr = randomVin.charCodeAt(i) + randomArr[i];
    vinAgain += String.fromCharCode(toDecryptArr);
    console.log(toDecryptArr);
  }
  return vinAgain;
}

console.log(encrypt(vin, randomVin));
console.log(decrypt(randomVin));

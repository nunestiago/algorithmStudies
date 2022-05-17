const vin = "1HGCM82633A004352";

function getRandom(max) {
  return Math.floor(Math.random() * max + 1);
}

console.log(getRandom(10));
const randomNumber = getRandom(10);

function fordSign(randomNumber, vin) {
  vinArray = vin.split("");

  const vinResult = vinArray.map((w) => {
    if (typeof w === "string") {
      return w.toLowerCase();
    } else {
      console.log(randomNumber);
      return parseInt(w) + randomNumber; // Faltou arrumar!!
    }
  });

  return {
    randomNumber,
    vinResult,
  };
}

console.log(fordSign(randomNumber, vin));

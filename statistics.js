let input = [
  64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060,
];
function processData(input) {
  let sortedInput = input.sort(function (a, b) {
    return a - b;
  });
  let mean = 0;
  let sum = 0;
  let count = 0;
  let median = 0;
  let mode = 0;
  let half = Math.floor(sortedInput.length / 2);

  for (let i = 0; i < input.length; i++) {
    sum += sortedInput[i];
    count++;
  }

  mean = sum / input.length;

  if (input.length % 2) {
    median = sortedInput[half];
  } else {
    median = (sortedInput[half - 1] + sortedInput[half]) / 2.0;
  }

  console.log(mean);
  console.log(median);
  console.log(sortedInput[0]);
  console.log(
    Math.sqrt(
      sortedInput.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) /
        sortedInput.length
    )
  );
  console.log(
    (1.96 * Math.sqrt((mean * (1 - mean)) / sortedInput.length) * 100).toFixed(
      1
    )
  );
}
console.log(input.length);
console.log(processData(input));

arr = [7, 69, 2, 221, 8974];

function minMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  res.push(sum - max, sum - min);
  return res[0] + " " + res[1];
}

console.log(minMaxSum(arr));

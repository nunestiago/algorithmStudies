const n = 5;
const arr = [2, 1, 3, 1, 2];

function test(n, arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      let shift = 0;
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
        shift++;
        total += shift;
      }
    }
  }
  console.log(total);
}
test(n, arr);

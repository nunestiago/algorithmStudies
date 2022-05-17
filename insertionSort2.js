const n = 6;
const arr = [1, 4, 3, 5, 6, 2];

function test(n, arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    if (i != 0) {
      console.log(arr.join(" "));
    }
  }
}
test(n, arr);

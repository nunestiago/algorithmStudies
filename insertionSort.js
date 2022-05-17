const n = 5;
const arr = [1, 2, 4, 5, 3];

function test(n, arr) {
  for (let i = n; i > 0; i--) {
    let temp = arr[i]; //?
    if (arr[i - 1] > temp) {
      arr[i] = arr[i - 1];
      console.log(arr.join(" "));
      arr[i - 1] = temp;
    }
  }
  console.log(arr.join(" "));
}
test(n, arr); //?

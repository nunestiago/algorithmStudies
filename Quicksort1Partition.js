const n = 5;
const arr = [4, 5, 3, 7, 2];

function test(n, arr) {
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > arr[i]) {
      left.push(arr[i]);
    }
    if (arr[0] < arr[i]) {
      right.push(arr[i]);
    }
  }
  console.log(...left, arr[0], ...right);
}
test(n, arr);

const n = 5;
const arr = [2, 1, 3, 1, 2];

function test(n, arr) {
  let total = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let a = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        a++;
      }
    }
    total.push(a);
  }
  console.log(total.join(" ")); //?
}
test(n, arr);

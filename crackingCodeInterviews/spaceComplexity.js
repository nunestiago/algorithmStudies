function sum(n) {
  if (n <= 0) {
    return 0;
  }
  return n + sum(n - 1);
}
console.log(sum(10000)); // recursion turns space O(n) and time O(n)

function pairSumSequence(n) {
  sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}
function pairSum(a, b) {
  return a + b;
}

console.log(pairSumSequence(10000)); // multiple calls turns space O(1) and time O(n)

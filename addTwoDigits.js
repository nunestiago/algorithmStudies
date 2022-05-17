function addTwoDigits(n) {
  let m = n.toString().split("");
  let i = parseInt(m[0]) + parseInt(m[1]);
  console.log(i);
  return i;
  // return (n % 10) + parseInt(n / 10);
}

console.log(addTwoDigits(23));

min = Number.MIN_VALUE;
max = Number.MAX_VALUE;
const array = [
  1, 2, 4, 333, 2, 443, 2443, 1343142, 12312341, 423, 234423, 123123, 21, 43,
  78, 978789, 768,
];

// //1
for (let i = 0; i < array.length; i++) {
  if (i < min) min = i;
  if (i > max) max = i;
}

//2
for (let i = 0; i < array.length; i++) {
  if (i < min) min = i;
}
for (let i = 0; i < array.length; i++) {
  if (i > max) max = i;
}
console.log($`min: ${min} max: ${max}`);

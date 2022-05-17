a = [2, 4, 6, 6, 3];

function contarMediaAritmetica(a) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    //   if (a[i + 1] === undefined) {
    //     a[i + 1] = 0;
    //   }
    //   if (a[i - 1] === undefined) {
    //     a[i - 1] = 0;
    //   }
    let c = ((a[i - 1] || 0) + (a[i + 1] || 0)) / 2;

    if (c === a[i]) {
      b.push(c);
    }
  }
  return b.length;
}

console.log(contarMediaAritmetica(a));

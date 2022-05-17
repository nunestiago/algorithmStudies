function fugaLabirinto(n, m, obstaculos, teleportes) {
  let x = 0;
  let y = 0;
  let result = false;

  for (let i = 0; i < n * m; i++) {
    x++;
    if (x > m - 1) {
      x--;
      y++;
    }
    for (const obs of obstaculos) {
      if (obs[0] === y && obs[1] === x) {
        x--;
        y++;
      }
    }
    console.log([y, x]);
    for (const tele of teleportes) {
      if (tele[0] === y && tele[1] === x) {
        y = tele[2];
        x = tele[3];
      }
    }
    if (x === m - 1 && y === n - 1) {
      return (result = true);
    }
  }
  return false;
}

console.log(
  fugaLabirinto(
    3,
    3,
    [
      [1, 1],
      [2, 1],
    ],
    [[1, 2, 1, 0]]
  )
);

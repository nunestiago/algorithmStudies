const list = [42, 23, 16, 15, 8, 4];
const bubbleSort = (list) => {
  doItAgain = false;
  let limit = list.length;
  let defaultNextValue = Number.MAX_VALUE;
  for (let i = 0; i < limit; i++) {
    let thisValue = list[i];
    let nextValue = i + 1 < limit ? list[i + 1] : defaultNextValue;
    if (nextValue < thisValue) {
      doItAgain = true;
      list[i] = nextValue;
      list[i + 1] = thisValue;
    }
    console.log(list);
  }
  if (doItAgain) {
    bubbleSort(list);
  }
};
bubbleSort(list);

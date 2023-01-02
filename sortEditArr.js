const sortEditArr = (inputArr, rule) => {
  let sortArr = inputArr;
  if (checkSortArr(inputArr, rule) !== false) {
    sortArr.data.sort((a, b) => {
      let i = 0;
      do {
        if (a[rule[i]] > b[rule[i]]) return 1;
        if (a[rule[i]] < b[rule[i]]) return -1;
      } while (a[rule[i]] == b[rule[i]] && i < rule.length);
      {
        i++;
        if (i == rule.length - 1) return 0;
      }
    });
  }
  return sortArr;
};

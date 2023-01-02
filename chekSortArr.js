const checkSortArr = (inputArr, rule) => {
  rule.forEach((elementRule) => {
    inputArr.data.map((elementInputArr) => {
      if (elementInputArr[elementRule] == undefined) {
        console.log(`it is not possible to sort by key ${elementRule}`);
        return false;
      }
    });
  });
};

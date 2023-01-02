const checkInputArr = (inputArr, rule) => {
  rule.forEach((objectrule) => {
    for (key in objectrule) {
      inputArr.data.map((objectInputArr) => {
        for (keyArr in objectInputArr) {
          if (objectInputArr[key] === undefined) {
            alert(`the edited object does not have the ${key} key`);
            return false;
          }
        }
      });
    }
  });
};

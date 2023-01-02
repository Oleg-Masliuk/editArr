const selectionFavorites = (inputArr, rule) => {
const arrSelectItems={"data":[]}
  if (checkInputArr(inputArr, rule) !== false) {
    rule.map((objectRule) => {
      for (key in objectRule) {
        inputArr.data.map((objectInput) => {
          if (objectRule[key] == objectInput[key]) {
            arrSelectItems.data.push(objectInput);
          }
        });
      }
    });
  }
  return arrSelectItems;
 
};


const procesEngine = (inputArr, editCondition) => {
  if (checkError(inputArr, editCondition)){
      let editArr = inputArr;
  for (key in editCondition.condition) {
    switch (key) {
      case "include":        
        editArr = selectionFavorites(editArr, editCondition.condition[key]);        
        break;
      case "exclude":
        editArr = deleteSelected(editArr, editCondition.condition[key]);
        break;
      case "sort_by":
        editArr = sortEditArr(editArr, editCondition.condition.sort_by);
        break;
      default:
        console.log(`the rule is not supported ${key}`);
        break;
    }
  }
  return editArr;}
};

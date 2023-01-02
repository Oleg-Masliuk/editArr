const checkError = (inputArr, editCondition) => {
  if (editCondition.condition == undefined) {
    alert ("The editing conditions object must have a key cjnditio")
    return false;
  }
  if (inputArr.data == undefined) {
    alert ("The editable object must contain a key data")
    return false;
  } else {
    return true;
  }
};


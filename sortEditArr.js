const sortEditArr = (inputArr, rule) => {
  let sortArr = inputArr;
  if (checkSortArr(inputArr, rule) !== false) {
    sortArr.data.sort((a,b)=>{
      if (a[rule[0]]>b[rule[0]]) return 1
      if (a[rule[0]]<b[rule[0]]) return -1
      if (a[rule[0]]=b[rule[0]]) {
       let i =0;
        while ((a[rule[i]]==b[rule[i]])&&(i<rule.length)){
          i++;
          if (a[rule[i]]>b[rule[i]]) return 1
          if (a[rule[i]]<b[rule[i]]) return -1
          if (i==(rule.length-1)) return 0   
        }
      }
    })
      }
      return sortArr;
}; 


/*let counter;
    while (counter !== 0) {
      counter = 0;
      for (let i = 0; i < (editArr.data.length-1); i = i + 1) {
        let j = 0;
        console.log(editArr.data[i][rule[j]])
        if (editArr.data[i][rule[j]] > editArr.data[i+1][rule[j]]) {
          let temporaryValue = editArr.data[i][rule[j]];
          editArr.data[i][rule[j]] = editArr.data[i + 1][rule[j]];
          editArr.data[i][rule[j]] = temporaryValue;
          counter++;
        }
        if (editArr.data[i][rule[j]] == editArr.data[i][rule[j]]) {
          while (
            editArr.data[i][rule[j]] == editArr.data[i][rule[j]] &&
            j < rule.length
          ) {
            j++;
            if (editArr.data[i][rule[j]] > editArr.data[i + 1][rule[j]]) {
              let temporaryValue = editArr.data[i][rule[j]];
              editArr.data[i][rule[j]] = editArr.data[i + 1][rule[j]];
              editArr.data[i][rule[j]] = temporaryValue;
              counter++;
            }
          }
        }
      }
    }
*/

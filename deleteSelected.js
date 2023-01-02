const deleteSelected = (inputArr, rule) => {
    const arrDeleteItems={"data":[]}
  
  if (checkInputArr(inputArr, rule) !== false) {
   rule.forEach(objectRule => {
        for (key in objectRule) {
            inputArr.data.map((objectInput) => {
              if (objectRule[key] !== objectInput[key]) {
                arrDeleteItems.data.push(objectInput);
              }
            });
          }
        });
      }
      return arrDeleteItems;
    };

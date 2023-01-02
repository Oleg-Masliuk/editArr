procesEngine (inputArr, editCondition).data.forEach(element => {
    for (key in element){
const result = document.createElement("div")        
result.innerHTML = element[key]
resultSelect.appendChild(result)}
});


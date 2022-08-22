//function for create element as a player seleted list
function createElements(playerName){
    const firstSpan = document.createElement('span');
    firstSpan.setAttribute('class','px-2');

    const secondSpan = document.createElement('span');
    secondSpan.innerText = playerName;

    const li = document.createElement('li');
    li.setAttribute('class','pb-4');
    li.appendChild(firstSpan);
    li.appendChild(secondSpan);

    const orderList = document.getElementById('order-list');
    orderList.appendChild(li);
}

//function for disable the button
function disabledBtn(element){
    element.setAttribute('disabled','true');
    element.style.backgroundColor = 'gray';
}

// //get value from input box 
// function getValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementValueString = element.value;
//     const elementValue = parseFloat(elementValueString);
//     return elementValue;
// }

//set value in element
function setInnerTextById(elementId,elementValue){
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}

//function for error handling
function errorHanding(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);

    if(onlyNumber(elementValueString) == true){
        if(elementValueString.includes('.') === true){
            let count = 0;
            let decimalIndex;
            for(let i = 0; i < elementValueString.length; i++){
                if(elementValueString[i] === '.'){
                    count++;
                    decimalIndex = i;
                }
            }
            if(count === 1){
                if(isNaN(elementValueString[decimalIndex+1]) === false){
                    return elementValue;
                }
                else{
                    element.value = '';
                    return;
                }
            }
            else{
                element.value = '';
                return;
            }
        }
        else{
            return elementValue;
        }
    }
    element.value = '';
    return;
}
function onlyNumber(str){
    return /^[0-9.]+$/.test(str);
}

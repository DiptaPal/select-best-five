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

//array for storing the player name
let playerName = [];
// select the to choice the player
const selectBtns = document.querySelectorAll('.select-btn');
for(const selectBtn of selectBtns){
    selectBtn.addEventListener('click', function(event){
        if(playerName.length < 5){
            //store player name in array
            playerName.push(event.target.parentElement.firstElementChild.innerText);
            //set player name in order list
            createElements(event.target.parentElement.firstElementChild.innerText);
            //count selected number and set that value
            setInnerTextById('selected-number',playerName.length);
            //set disable in selected button
            disabledBtn(event.target);
        }
        else{
            const selectError = document.getElementById('select-error');
            selectError.innerText = 'You cannot select more than 5 players';
            return;
        }
    });
}

//function for calculate total player price and set them in player expense
document.getElementById('calculate').addEventListener('click', function(){
    //const playerValueError 

    //per player price
    const perPlayerPrice = getValueById('player-price');
    //total price of selected player
    const totalPlayer = playerName.length;
    const totalPrice = totalPlayer * perPlayerPrice;
    setInnerTextById('player-expense', totalPrice.toFixed(2));
});

//function for calculate total cost and set them in total
document.getElementById('total-calculate').addEventListener('click',function(){
    const totalPlayerPrice = document.getElementById('player-expense');
    const totalPriceString = totalPlayerPrice.innerText;
    const totalPrice = parseFloat(totalPriceString);

    const managerPrice = getValueById('manager-price');
    const coachPrice = getValueById('coach-price');

    let totalCost = totalPrice + managerPrice + coachPrice;
    setInnerTextById('total', totalCost.toFixed(2));

});
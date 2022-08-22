//array for storing the player name
let playerName = [];
// select the to choice the player
const selectBtns = document.querySelectorAll('.select-btn');
for(const selectBtn of selectBtns){
    selectBtn.addEventListener('click', function(event){
        setInnerTextById('select-error','');
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
            setInnerTextById('select-error','You cannot select more than 5 players');
            return;
        }
    });
}

//function for calculate total player price and set them in player expense
document.getElementById('calculate').addEventListener('click', function(){ 

    //total price of selected player
    const totalPlayer = playerName.length;

    //per player price with error handling
    const perPlayerPrice = valueWithoutError('player-price');
    if(totalPlayer === 0){
        setInnerTextById('select-error',"Please select the player first");
    }
    if(perPlayerPrice === 0){
        setInnerTextById('player-value-error', 'Please provide minimum player cost');
        return;
    }
    else if(isNaN(perPlayerPrice) === true){
        setInnerTextById('player-value-error', 'Please provide a valid input');
        return;
    }
    else{
        setInnerTextById('player-value-error', '');
    }

    const totalPrice = totalPlayer * perPlayerPrice;
    setInnerTextById('player-expense', totalPrice.toFixed(2));
});

//function for calculate total cost and set them in total
document.getElementById('total-calculate').addEventListener('click',function(){
    const totalPlayerPrice = document.getElementById('player-expense');
    const totalPriceString = totalPlayerPrice.innerText;
    const totalPrice = parseFloat(totalPriceString);

    const managerPrice = valueWithoutError('manager-price');
    const coachPrice = valueWithoutError('coach-price');
    const playerPrice = valueWithoutError('player-price')


    //total price of selected player
    const totalPlayer = playerName.length;

    //error handling for player price
    if(totalPlayer === 0){
        setInnerTextById('select-error',"Please select the player first");
    }
    if((isNaN(playerPrice) === true) || (totalPrice === 0)){
        setInnerTextById('player-value-error', 'Please press the calculate button');
        return;
    }
    if((isNaN(managerPrice) === true) || (isNaN(coachPrice) === true)){
        setInnerTextById('value-error', 'Please provide a valid input');
        return;
    }
    if((managerPrice === 0) || (coachPrice === 0)){
        setInnerTextById('value-error', 'Please provide minimum cost');
        return;
    }
    else{
        setInnerTextById('value-error', '');
    }

    let totalCost = totalPrice + managerPrice + coachPrice;
    setInnerTextById('total', totalCost.toFixed(2));

});
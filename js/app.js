//array for storing the player name
let playerName = [];
// select the to choice the player
const selectBtns = document.querySelectorAll('button');
for(const selectBtn of selectBtns){
    selectBtn.addEventListener('click', function(event){
        if(playerName.length < 5){

            //store player name in array
            playerName.push(event.target.parentElement.firstElementChild.innerText);

            //set player name in order list
            createElements(event.target.parentElement.firstElementChild.innerText);
            
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
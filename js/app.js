//array for storing the player name
let playerName = [];
// select the to choice the player
const selectBtns = document.querySelectorAll('button');
for(const selectBtn of selectBtns){
    selectBtn.addEventListener('click', function(event){
        if(playerName.length < 5){
            playerName.push(event.target.parentElement.firstElementChild.innerText);
        }
        else{
            const selectError = document.getElementById('select-error');
            selectError.innerText = 'You cannot select more than 5 players';
            return;
        }
        console.log(playerName);
    });
}
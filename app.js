var scores, roundScore, activePlayer, prevRoll1, prevRoll2, endsAt;
endsAt = document.getElementById('inputNumber').value;
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var diceDOM1 = document.getElementById('dice1');
    var diceDOM2 = document.getElementById('dice2');
    diceDOM1.style.display = 'block';
    diceDOM2.style.display = 'block';
    document.querySelector('.inputField').style.display = 'none'
    diceDOM1.src = 'dice-' + dice1 + '.png';
    diceDOM2.src = 'dice-' + dice2 + '.png';

    if(prevRoll1 === 6 && dice1 === 6 || prevRoll2 === 6 && dice2 === 6){
        document.getElementById('score-' + activePlayer).textContent = '0';
        scores[activePlayer] = 0;
        playerChange();
        prevRoll1 = 0;
        prevRoll2 = 0;
    } else if(dice1 === 1 || dice2 === 1 || dice1 === 6 && dice2 === 6){
        playerChange(); 
    } else if (dice1 !== 1 && dice2 !== 1){
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        prevRoll1 = dice1;
        prevRoll2 = dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= endsAt){
        document.getElementById('name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.getElementById('current-' + activePlayer).textContent = '0';
        document.querySelector('.dice').style.display = 'none';
    } 
    else{
        playerChange();
    }
});

function playerChange(){
    document.getElementById('current-' + activePlayer).textContent = '0';
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', function(){
    document.querySelector('.inputField').style.display = 'flex'
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    init();
});

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.add('active');
};

document.querySelector('.btn-set').addEventListener('click', function(){
    if(document.getElementById('inputNumber').value >= 50){
    endsAt = document.getElementById('inputNumber').value
    }
})
const score = { 
  wins: 0,
  losses: 0,
  draws: 0
};

function play(playerChoice) {
  let computerMove,computerOutput,playerOutput;
  let randNum = Math.random(); 
  randNum = randNum.toFixed(2);  

  const rock = document.getElementById('rock-svg');
  const paper = document.getElementById('paper-svg');
  const scissors = document.getElementById('scissors-svg');

  if(randNum >= 0.66 )
  { 
    computerMove = 'rock';
    computerOutput = rock;
  } else if (randNum >= 0.33 )
  { 
    computerMove = 'paper';
    computerOutput = paper;
  } else 
  { 
    computerMove = 'scissors';
    computerOutput = scissors;
  } 

  if (playerChoice === 'rock'){ 
    playerOutput = rock;
  } else if (playerChoice ==='paper'){ 
    playerOutput = paper;
  } else{ 
    playerOutput = scissors;
  } 

  if (playerChoice === computerMove){  
    score.draws++;
    document.querySelector('.js-result').textContent = 'Draw!';
  } else if( playerChoice === 'rock' && computerMove === 'scissors' || 
             playerChoice === 'paper' && computerMove === 'rock' ||
             playerChoice === 'scissors' && computerMove === 'paper') 
  { 
    score.wins++
    document.querySelector('.js-result').textContent = 'You Win!';
  } else 
  { 
    score.losses++
    document.querySelector('.js-result').textContent = 'You Lose!';
  }  

  localStorage.setItem('wins', score.wins); 
  localStorage.setItem('losses', score.losses);
  localStorage.setItem('draws', score.draws); 

  document.querySelector('.js-output').innerHTML = `
  You <img src="${playerOutput.src}" class="mini-img"> 
  <img src="${computerOutput.src}" class="mini-img"> Computer
`;

  displayScore();

} 

function displayScore(){ 
   document.querySelector('.js-score').textContent = 
   `Wins: ${localStorage.getItem('wins')} Losses: ${localStorage.getItem('losses')
    } Draws: ${localStorage.getItem('draws')}`
} 

function resetScore(){ 
  localStorage.setItem('wins', score.wins = 0); 
  localStorage.setItem('losses', score.losses = 0);
  localStorage.setItem('draws', score.draws = 0); 

  document.querySelector('.js-result').textContent = ''; 
  document.querySelector('.js-output').textContent = '';
  document.querySelector('.js-score').textContent = '';
}

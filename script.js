'use strict';
// console.log(document.querySelector('.message').textContent);    
// document.querySelector('.message').textContent = '🎉Correct Number!!'

// document.querySelector('.message').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // if there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';


        // if the player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉Correct Number!!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30 rem';

        if(score>highscore) {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }

        // if the guess is too high    
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' The Number Is Too High📈';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game 😥';
            document.querySelector('.score').textContent = 0;
        }

        // if the guess is too low    

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' The Number Is Low 📉 ';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game 😥';
            document.querySelector('.score').textContent = 0;
        }
    }



});

document.querySelector('.again').addEventListener('click', function () {

    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  
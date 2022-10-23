const square = document.querySelectorAll('.square');
const tournesol = document.querySelectorAll('.tournesol');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('tournesol');
    })
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('tournesol');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1;
            score.textContent = result;
        }
    })
})

function moveTournesol(){
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

moveTournesol();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    
    if(currentTime === 0){
        clearInterval(timerId);
        alert('Game OVER! Your final is ' + result);
    }
}

let timerId = setInterval(countDown, 1000);
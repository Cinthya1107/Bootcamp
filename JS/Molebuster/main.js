document.addEventListener('DOMContentLoaded', function(){
    const holes = document.getElementsByClassName('hole');
    const moles = document.getElementsByClassName('mole');
    const scoreBoard = document.querySelector('.score');
    let lastHole;
    let timeUp = false;
    let score = 0;

    function randomTime(min, max){
        return Math.round(Math.random() * (max - min) + min);
    }

    function randomHole(holes){
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if(hole === lastHole){
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }

    function peep(){
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if(!timeUp) peep();
        }, time);
    }

    function startGame(){
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp = true, 15000);
    }

    function wack(e){
        if(!e.isTrusted) return;
        score++;
        this.classList.remove('up');
        scoreBoard.textContent = score;
    }

    document.querySelector('button').addEventListener('click', startGame);
    Array.from(moles).forEach(mole => mole.addEventListener('click', wack));
});

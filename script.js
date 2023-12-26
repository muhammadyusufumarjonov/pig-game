    //  buttons
    const btnRoll = document.querySelector('.btn--roll')
    const btnNew = document.querySelector('.btn--new')
    const btnHold = document.querySelector('.btn--hold')

    // dice image
    const diceImg = document.querySelector('.dice');
    diceImg.style.display = 'none'


    //  variables
    let currentScore = 0;
    let activePlayer = 0;
    let score = [0, 0]
    let gameOver = true

    const switchPlayer = () => {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0
        document.querySelector('.player--0').classList.toggle('player--active')
        document.querySelector('.player--1').classList.toggle('player--active')
    }

    btnRoll.addEventListener('click', () => {
        if(gameOver){diceImg.style.display = 'block'

        const random = Math.floor(Math.random() * 6 + 1)
        diceImg.src = `./dice-${random}.png`

        if(random !== 1){
            currentScore += random
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer()
        }}
    })

    // hold scores
    btnHold.addEventListener('click', () => {
        if (gameOver){score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]

        if(score[activePlayer] >= 20){
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            gameOver = false
        }else{
            switchPlayer()
        }}
    })

    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    const colorText = document.querySelector('.color-text');
    const values = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'd',
        'e',
        'f',
    ];
    // get gradient
    function getGradient(){
        let color = '#'
        for(let i = 0; i < 6; i++){
            const randomNumber  = Math.trunc(Math.random () * values.length)
            color += values[randomNumber]
        }
    
        return color 
    }
    const color1  = getGradient()
    const color2  = getGradient()
    
    // set Gradient
    function setGradient(){
        const color1 = getGradient()
        const color2 = getGradient()
        const randomDeg = Math.trunc(Math.random() * 360)
        const bgColor = `linear-gradient(
            ${randomDeg}deg, 
            ${color1},
            ${color2}
        )`
        body.style.background = bgColor
        colorText.textContent = bgColor 
    }
    // new game
    btnNew.addEventListener('click', () => {
        currentScore = 0;
        activePlayer = 0;
        score = [0, 0]
        gameOver = true

        document.getElementById(`current--0`).textContent = 0
        document.getElementById(`current--1`).textContent = 0

        document.getElementById(`score--0`).textContent = 0
        document.getElementById(`score--1`).textContent = 0

        document.querySelector(`.player--0`).classList.remove('player-winner')
        document.querySelector(`.player--1`).classList.remove('player--winner')

        document.querySelector(`.player--1`).classList.remove('player--active')
        document.querySelector(`.player--0`).classList.add('player--active')

        setGradient()
        container.addEventListener('click', setGradient)
    })

const result = document.querySelector('.result')
const result2 = document.querySelector('.result2')
const youScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')
const empateScore =document.querySelector('#empate-score')

let humanScoreNumber = 0
let machineScoreNumber = 0
let empateScoreNumber = 0



const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

   
    result2.innerHTML = `&#129458;:${human} <br>  &#128187:${machine}<br> `

    if (human === machine) {

        empateScoreNumber++
        empateScore.innerHTML = `${empateScoreNumber}`
        result.style.color = 'rgb(246, 250, 6)'
        result.innerHTML = 'Deu empate!'

    } else if ((human === 'papel' && machine === 'pedra') ||
    (human === 'pedra' && machine === 'tesoura') || (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        youScore.innerHTML = `${humanScoreNumber}`
        result.style.color = 'green'
        result.innerHTML = 'Você ganhou!'
    } else {

        machineScoreNumber++
        machineScore.innerHTML = `${ machineScoreNumber}`
        result.style.color = 'red'
        result.innerHTML = 'Você perdeu!'

    }

    

}
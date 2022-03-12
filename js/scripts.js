let player1 = prompt
('Quer jogar uma partidinha de jogo da véia com seu amigo?\nVocê será o X ou O ?')
.toUpperCase()
let player2
let playerWinner;

if (player1 === null || player1 === '' || player1 !== 'X') player1 = 'O'
player1 === 'X' ? (player2 = 'O') : (player2 = 'X')
document.querySelector('.p1').innerHTML = player1
document.querySelector('.p2').innerHTML = player2

const td = document.querySelectorAll('td')

let count = 0
for (let i = 0; i < 9; i++) {
  td[i].addEventListener('click', function (evento) {
    if (evento.target.innerHTML === '' && !playerWinner) {
      count++
      if (count % 2 !== 0) {
        td[i].classList.add('p1')
        td[i].innerHTML = player1
      } else if (count % 2 === 0) {
        td[i].classList.add('p2')
        td[i].innerHTML = player2
      }
      winner();
    }
  })
}

function winner(eventos){
  const winner = document.querySelector('.winner')

  if (td[0].innerHTML === player1 && td[1].innerHTML === player1 && td[2].innerHTML === player1 
    || td[3].innerHTML === player1 && td[4].innerHTML === player1 && td[5].innerHTML === player1
    || td[6].innerHTML === player1 && td[7].innerHTML === player1 && td[8].innerHTML === player1
    || td[0].innerHTML === player1 && td[3].innerHTML === player1 && td[6].innerHTML === player1 
    || td[1].innerHTML === player1 && td[4].innerHTML === player1 && td[7].innerHTML === player1
    || td[2].innerHTML === player1 && td[5].innerHTML === player1 && td[8].innerHTML === player1
    || td[0].innerHTML === player1 && td[4].innerHTML === player1 && td[8].innerHTML === player1 
    || td[2].innerHTML === player1 && td[4].innerHTML === player1 && td[6].innerHTML === player1){
    playerWinner = 'Player 1 Venceu' 
    document.querySelector('.tabuleiro').classList.add('escurecerp1')
    winner.style.display = ''
    winner.innerHTML = `<h2>${playerWinner}</h2><button>Jogar de novo ?</button>`
    playAgain()

  } else if (td[0].innerHTML === player2 && td[1].innerHTML === player2 && td[2].innerHTML === player2 
    || td[3].innerHTML === player2 && td[4].innerHTML === player2 && td[5].innerHTML === player2
    || td[6].innerHTML === player2 && td[7].innerHTML === player2 && td[8].innerHTML === player2
    || td[0].innerHTML === player2 && td[3].innerHTML === player2 && td[6].innerHTML === player2 
    || td[1].innerHTML === player2 && td[4].innerHTML === player2 && td[7].innerHTML === player2
    || td[2].innerHTML === player2 && td[5].innerHTML === player2 && td[8].innerHTML === player2
    || td[0].innerHTML === player2 && td[4].innerHTML === player2 && td[8].innerHTML === player2 
    || td[2].innerHTML === player2 && td[4].innerHTML === player2 && td[6].innerHTML === player2){
      playerWinner = 'Player 2 Venceu'
      document.querySelector('.tabuleiro').classList.add('escurecerp2')
      winner.style.display = ''
      winner.innerHTML = `<h2>${playerWinner}</h2><button>Jogar de novo ?</button>`
      playAgain()

    } else if(td[0].innerHTML !== '' && td[1].innerHTML !== '' && td[2].innerHTML !== '' 
    && td[3].innerHTML !== '' && td[4].innerHTML !== '' && td[5].innerHTML !== ''
    && td[6].innerHTML !== '' && td[7].innerHTML !== '' && td[8].innerHTML !== '' && !playerWinner){
    document.querySelector('.tabuleiro').classList.add('escurecer')
    winner.style.display = ''
    winner.innerHTML = `<h2>Xii, deu véia</h2><button>Jogar de novo ?</button>`
    playAgain()
    }
    
}

function playAgain(){
  
  document.querySelector('.winner button').addEventListener('click', function() {
  location.reload();
})

}

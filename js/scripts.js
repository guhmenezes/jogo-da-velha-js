var player1 = prompt
('Quer jogar uma partida de jogo da velha ?\nPlayer 1 será X ou O ?')
let player2
let playerWinner


if (player1 === null || player1 === '') player1 = 'default'
else player1 = player1.toUpperCase()

switch(player1){
  case 'O':
    player2 = 'X'
    break
  case 'X':
    player2 = 'O' 
    break
  case 'default':
    alert('   Por predefinição\n>> Player 1 será O <<\n>> Player 2 será X <<')
    player1 = 'O'
    player2 = 'X'
    break
  default:
    alert('   Por predefinição\n>> Player 1 será O <<\n>> Player 2 será X <<')
    player1 = 'O'
    player2 = 'X'
}

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

function winner(){
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
    winner.querySelector('h2').innerText = playerWinner
    document.querySelector('.jogadores').style.display = 'none'
    winner.style.display = ''
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
      winner.querySelector('h2').innerText = playerWinner
      document.querySelector('.jogadores').style.display = 'none'
      winner.style.display = ''
      playAgain()

    } else if(td[0].innerHTML !== '' && td[1].innerHTML !== '' && td[2].innerHTML !== '' 
    && td[3].innerHTML !== '' && td[4].innerHTML !== '' && td[5].innerHTML !== ''
    && td[6].innerHTML !== '' && td[7].innerHTML !== '' && td[8].innerHTML !== '' && !playerWinner){
    document.querySelector('.tabuleiro').classList.add('escurecer')
    winner.querySelector('h2').innerText = 'Xii, deu véia'
    document.querySelector('.jogadores').style.display = 'none'
    winner.style.display = ''
    playAgain()
    }
    
}

function playAgain(){
  
  document.querySelector('.winner button').addEventListener('click', function() {
  location.reload();
})

}

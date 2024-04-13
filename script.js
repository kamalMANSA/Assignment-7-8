(() => {
  const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];

  let Score1 = 0;
  let Score2 = 0;
  const winningScore = 20;

  document.getElementById('rollButton').addEventListener('click', () => {
    const dice1Value = Math.floor(Math.random() * 6);
    const dice2Value = Math.floor(Math.random() * 6);

    document.getElementById('dice1').src = diceImages[dice1Value];
    document.getElementById('dice2').src = diceImages[dice2Value];
    const difference = Math.abs(dice1Value - dice2Value);

    if (dice1Value > dice2Value) {
      Score1 += difference;
    } else if (dice1Value < dice2Value) {
      Score2 += difference;
    }

    document.getElementById('Score1').innerText = Score1;
    document.getElementById('Score2').innerText = Score2;

    if (Score1 >= winningScore) {
      alert('Player 1 wins!');
      resetGame();
    } else if (Score2 >= winningScore) {
      alert('Player 2 wins!');
      resetGame();
    }
  });

  function resetGame() {
    Score1 = 0;
    Score2 = 0;
    document.getElementById('Score1').innerText = Score1;
    document.getElementById('Score2').innerText = Score2;
  }
})();

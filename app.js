const choicArray = ['R', 'P', 'S'];
const ImgArray = [
  'images/rock.png',
  'images/paper.png',
  'images/seissors.png'
];


var gameMode = ImgArray;

var buttonSrcArray = ['a', 'b', 'c'];

const playAgainButton = document.getElementById('play-again-button');
const resultSection = document.getElementById('result-section');


playAgainButton.disabled = true;
playAgainButton.addEventListener(
  'click',
  reset('Final-Result', 'player01', 'comp01')
);

function chosButton() {
  for (let i = 0; i < choicArray.length; i++) {
    const btn = document.createElement('button');
    const img = document.createElement('img');
    btn.id = choicArray[i];
    btn.classList.add('buttons', 'buttonWithImg');
    img.src = gameMode[i];
    img.id = gameMode[i] + '1';
    img.classList.add('header-img');
    btn.appendChild(img);
    document.getElementById('Top-buttons').appendChild(btn);
    btn.addEventListener('click', playersChoices(i));
  }
}

chosButton();

function playersChoices(i) {
  return function () {
    toggle(true, false);
    const playerImg = document.createElement('img');
    playerImg.src = gameMode[i];
    playerImg.classList.add('result-img', 'removable');
    playerImg.id = 'player01';
    document.getElementById('player-section').appendChild(playerImg);
    PlayerChoise = choicArray[i];

    const computerImg = document.createElement('img');
    const random = [Math.floor(Math.random() * 3)];
    computerImg.src = gameMode[random];
    ComputerChoice = choicArray[random];

    computerImg.classList.add('result-img', 'removable');
    computerImg.id = 'comp01';
    document.getElementById('computer-section').appendChild(computerImg);
    game(PlayerChoise, ComputerChoice);
    resultSection.classList.add('middle-screen');
  document
    .getElementsByClassName('result-container')[0]
    .classList.add('result-container-height');
  };
}

function game(PlayerChoise, ComputerChoice) {
  switch (PlayerChoise + ComputerChoice) {
    case 'RS':
    case 'PR':
    case 'SP':
    Winner();
      break;
    case 'RP':
    case 'PS':
    case 'SR':
    loser();
      break;
    case 'RR':
    case 'PP':
    case 'SS':
      draw();
      break;
  }
}

function showResult(resultMessage) {
  const res = document.createElement('p');
  res.classList.add('removable');
  res.id = 'Final-Result';
  document.getElementById('result-section').appendChild(res);
  res.innerHTML = resultMessage;
}

function Winner() {
  showResult('You Won  ','R ');
}

function loser() {
  showResult('lost');
}

function draw() {
  showResult(" draw    ");
}

function change() {
  return function () {
    
    removeElementsById(['R', 'P', 'S', 'Final-Result', 'player01', 'comp01']);
    chosButton();
    playAgainButton.disabled = true;
    resultSection.classList.remove('middle-screen');
  };
}

function removeElementsById(idsArray = []) {
  idsArray.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.remove();
    }
  });
}

function reset(removableId1, removableId2, removableId3) {
  return function () {
    document.getElementById(removableId1).remove();
    document.getElementById(removableId2).remove();
    document.getElementById(removableId3).remove();
    toggle(false, true);
    resultSection.classList.remove('middle-screen');
  };
}
function toggle(ToF, xToF) {
  for (let x = 0; x < choicArray.length; x++) {
    document.getElementById(choicArray[x]).disabled = ToF;
    playAgainButton.disabled = xToF;
  }
}




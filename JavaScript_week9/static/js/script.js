//Challenge 1: Your Age in days

function ageInDays() {
  var birthYear = prompt('What year were you born...?');
  var ageInDayss = (2018 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat generator
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-generator');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}

//Challenge 3: Paper, Rock, Scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);

  results = decideWinner(humanChoice, botChoice); //[1,0] human won|bot lost
  console.log(results);

  message = finalMessage(results); //{'You Won!', 'color': 'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
    'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return {'message': 'You lost!', 'color': 'red'};
  } else if (yourScore === 0.5) {
    return {'message': 'You tied!', 'color': 'yellow'};
  } else {
    return {'message': 'You Won!', 'color': 'green'};
  }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }
  //let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
  messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding:30px;'>" + finalMessage['message'] + "</h1>";
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(237,50,37,1);'>";

  document.getElementById('flex-box-RPS-div').appendChild(humanDiv);
  document.getElementById('flex-box-RPS-div').appendChild(messageDiv);
  document.getElementById('flex-box-RPS-div').appendChild(botDiv);

}

//function restartRPS() {
//  document.getElementById('humanDiv').remove();
//  document.getElementById('messageDiv').remove();
//  document.getElementById('botDiv').remove();

//  var rockImg = document.createElement('div');
//  var paperImg = document.createElement('div');
//  var scissorsImg = document.createElement('div');

//  paperImg.innerHTML = '<img id = "paper" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRT1NceMHSgfHz4VMSLwCKgoeIrVzWtnBVH2AoY7THjzERLNKf" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2MZr3l3pFlv2cHg6KGUobve2Uf7Zz3rTY7BfEF7IAcjSgO-R" width=250 height=250 onclick="rpsGame(this)">';
//  rockImg.innerHtML = '<img id="rock" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtG29d2Tg0K92K4giwlPdfYLf55YN8wRN883Asmxk4lD3WX3D" alt="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png" width=250 height=250 onclick="rpsGame(this)">';
//  scissorsImg.innerHTML = '<img id="scissors" src="http://www.clker.com/cliparts/8/B/i/M/Y/Z/scissors-md.png" alt="https://speculararts.com/rps/images/scissors.png" width=250 height=250 onclick="rpsGame(this)">';

  //document.getElementById('flex-box-RPS-div').appendChild(rockImg);
  //document.getElementById('flex-box-RPS-div').appendChild(paperImg);
  //document.getElementById('flex-box-RPS-div').appendChild(scissorsImg);
//}
//restartRPS();

//Challenge 4: Change the Color of All the Buttons
var  all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonsColorChange(colorSelection) {
  if (colorSelection.value === 'red') {
    buttonsRed();
  }  else if (colorSelection.value === 'green') {
    buttonsGreen();
  }  else if (colorSelection.value === 'blue') {
    buttonsBlue();
  }  else if (colorSelection.value === 'reset') {
    buttonsReset();
  }  else if (colorSelection.value === 'random') {
    randomColors();
  }
}

function buttonsBlue() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-primary');
  }
}

function buttonsGreen() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonsRed() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}


function buttonsReset() {
  for (let i=0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors() {
  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (let i=0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
//Challenge 5: BlackJack

let blackjackGame = {
  'you' : {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
  'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},

};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sound/swish.m4a');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

function blackjackHit() {
  showCard(YOU);
};

function showCard(activePLayer) {
  let cardImage = document.createElement('img');
  cardImage.src = 'static/images/Q.png';
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
};

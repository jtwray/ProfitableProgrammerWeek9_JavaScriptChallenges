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
  'cards' :['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
  'cardsMap' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,10]},
  'wins':0,
  'losses':0,
  'draws':0,
  'isStand': false,
  'turnsOver': false,
};

//Math.floor(Math.random() * 13)

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('static/sound/swish.m4a');
const winSound = new Audio('static/sound/cash.mp3');
const lossSound = new Audio('static/sound/aww.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stay-button').addEventListener('click', dealerLogic);

function blackjackHit() {
  if (blackjackGame['isStand'] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}

function randomCard() {
    let randomCardIndexNum = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomCardIndexNum];
}

function updateScore(card, activePlayer) {
  if(card === 'A') {
  // If adding 11 keps me below or equal to 21, add 11. Otherwise, add 1
    if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21) {
      activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    } else {
      activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
  } else {
    activePlayer['score'] += blackjackGame['cardsMap'][card];
  }
}

function showCard(card, activePlayer) {
  if(activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
  }
}
//cardImage.src = `static/images/${card}.png`; // BUG:  concatenation"""'static/images/'+randomCard()+'.png';""" alternative //randomCard() creates a different instance or card here and will result in the card image and the card number being different as two instances of randomCard() result form this medium.
function showScore(activePlayer) {
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackjackGame['isStand'] = true;
  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    updateScore(card, DEALER);
    showCard(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame['turnsOver'] =true;
  showResult();
}

function blackjackDeal() {
  if (blackjackGame['turnsOver'] === true) {

     blackjackGame['isStand'] = false;

     let yourImages = document.querySelector('#your-box').querySelectorAll('img');
     let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
     for (i=0; i < yourImages.length; i++) {
       yourImages[i].remove();
     }

     for (i=0; i < dealerImages.length; i++) {
       dealerImages[i].remove();
     }

     YOU['score'] = 0;
     DEALER['score'] = 0;

     document.querySelector('#your-blackjack-result').textContent = 0;
     document.querySelector('#dealer-blackjack-result').textContent = 0;

     document.querySelector('#your-blackjack-result').style.color = '#ffffff';
     document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

     document.querySelector('#blackjack-result').textContent = "Let's Play";
     document.querySelector('#blackjack-result').style.color = 'black';
     blackjackGame['turnsOver'] = false;
  }
}

// compute winner and return who just won
// update wins losses draws table

function showResult() {
  let message, messageColor;

  if (blackjackGame['turnsOver'] === true) {

    if (YOU['score'] <= 21) {
      // higher score than dealer or when dealer busts but you have >=21

      if (YOU['score'] > DEALER['score']  || (DEALER['score'] > 21)) {
        blackjackGame['wins']++;
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();

      } else if (YOU['score'] < DEALER['score']) {
        blackjackGame['losses']++;
        document.querySelector('#losses').textContent = blackjackGame['losses'];
        message = 'You Lost!';
        messageColor = 'red';
        lossSound.play();

      } else if (YOU['score'] === DEALER['score']) {
        blackjackGame['draws']++;
        document.querySelector('#draws').textContent = blackjackGame['draws'];
        messageColor = 'light green';
        message = 'You Tied!';
      }

    //condition: when user busts but dealer doesn't
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
      blackjackGame['losses']++;
      document.querySelector('#losses').textContent = blackjackGame['losses'];
      message = 'You Lost!';
      messageColor = 'red';
      lossSound.play();

    //condition: when you AND dealer bust
    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
      blackjackGame['draws']++;
      document.querySelector('#draws').textContent = blackjackGame['draws'];
      messageColor = 'light green';
      message = 'You Tied!';
    }
  }
  document.querySelector('#blackjack-result').textContent = message;
  document.querySelector('#blackjack-result').style.color = messageColor;
}

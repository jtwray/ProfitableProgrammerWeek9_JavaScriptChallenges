//challenge 1 your age in Days
function AgeinDays(){
  var birthYear= prompt("What year were you born?");
  var AgeinDayss= (2018-birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer =  document.createTextNode('You are ' + AgeinDayss + 'days old.')
  h1.setAttribute('id', 'AgeinDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(AgeinDayss);
}

function reset(){
  document.getElementById('AgeinDays').remove();
}
//Challenge 2 Generate Cat
function generateCat(){
  var image = document.createElement('img');
  var div = document.getElementById("flex-cat-generator");
  image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
}
//Challenge 3: Paper Rock Scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  //humanChoice = yourChoice.id;
  botChoice = randomPrsInt(numberToChoice());
  //results = decideWinner(humanChoice, botChoice);// humanLost,botWon[0,1]humanWon,botLost[1,0]tieDraw[.5,.5]
  //message = finalMessage(results); //You Won!|You Lost!|Draw!//{'message':'You Won!', 'color':'Green'}
  //rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randomPrsInt(){
  return Math.floor(Math.random() * 3);

}
//var botChoices = ["paper","rock","scissors"];

function numberToChoice(number) {
  return ["paper","rock","scissors"][number];
}

}
function decideWinner(yourChoice,botChoice){
  var rpsDatabase= {
      'paper'{'rock':1,'paper':0.5,'scissors':0};
      'rock'{'scissors':1,'rock':0.5,'paper':0};
      'scissors'{'paper':1,'scissors':0.5,'rock':0};
  };
  var yourScore = rpsDatabase[yourChoice][botChoice];
  var botScore = rpsDatabase[botChoice][yourChoice];
  return [yourScore,botScore];
}   

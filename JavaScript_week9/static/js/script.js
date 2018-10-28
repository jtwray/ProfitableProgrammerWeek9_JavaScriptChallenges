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
function generateCat(){
  var image = document.createElement('img');
  var div = document.getElementById("flex-cat-generator");
  image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";  
  div.appendChild(image);
}

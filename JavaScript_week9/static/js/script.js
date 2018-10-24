//challenge 1 your age in Days
function AgeinDays(){
  var birthYear= prompt("What year were you born?");
  var AgeinDayss= (Age-2018)*365;
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

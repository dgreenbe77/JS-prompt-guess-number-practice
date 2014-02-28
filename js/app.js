$( document ).ready(function() {

    // Your code here.


var correct_number = Math.floor((Math.random()*10)+1);

while (number != correct_number)
{
  var number = prompt("Guess a Number Between 0 and 10:")
  number = parseInt(number)
  if (isNaN(number))
  {
  alert("Invalid Input");
  }
  else
  {
    if (number === correct_number)
      {
      alert("The number " + number + " is correct!");
      }
    if (number > correct_number)
      {
      alert("The number " + number + " too high!");
      }
    if (number < correct_number)
      {
      alert("The number " + number + " too low!");
      }
  }


}});

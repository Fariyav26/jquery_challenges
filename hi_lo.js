$(document).ready(function() {

  $("#submit").on("click", function(){

    var answer = guess();
    $("#answer").text(answer);

  });

  // random number generator
  var answer = Math.floor((Math.random() * 100) + 1);
  var attempts = 0;
  var name;

  console.log("Answer is: " + answer);
  console.log("");

  // function name1() {
  //   // name = document.getElementById("nameInput").value;
  //   name = $("#nameInput").val();
  // }
  // this function is to guess number
  function guess() {
    // Give user seven attempts
    if (attempts < 7) {
      var guess = parseInt($("#guess").val());
      console.log("user guessed: " + guess)

      if (guess < answer){
        $("#answer").text("Too low");
      } else if (guess > answer){
        $("#answer").text("Too high");
      // function to determine if guess is right
      } else if (guess === answer) {
        $("#answer").text("That's right");
      // limits guesses to 7 attempts
      } else if (isNaN(guess) && attempts < 7) {
        $("#answer").text("Please input a number");
      }
      attempts++;

      // prints number of tries
      console.log("attempts left: " + (7 - attempts));
      console.log("");

    // After seven attempts, game over
    } else {

      $("#answer").addClass("gameover");
      $("#answer").text("You're out of tries, you're terrible at this");
      console.log("game over!");

      $("#submit").off();

    }

  }
});

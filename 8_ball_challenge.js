$(document).ready(function() {

  $("#submit").on("click", function() {

    // get user question
    var question = $("#question").val();
    console.log(question);

    // save user question in echo
    $("#echo").text(question);

    //clear input on button click
    $("#question").val("");
    $("#question").attr("placeholder", "Ask another question");

    var answer = eightBall();
    $("#answer").text(answer);
  });

});

// eight ball responses
function eightBall() {
  var responses = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Nah, fam"];
  var responseNum = (Math.floor((Math.random() * 6) + 1)) - 1;
  var response = responses[responseNum];
  console.log(responses);
  console.log(responseNum);
  console.log(response);

  return response;
}

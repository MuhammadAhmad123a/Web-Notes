//alert("Hello.");
var buttonColours = ["red", "blue", "green", "yellow"];
//var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = []; //empty array
var userClickedPattern = [];
var started = false;
var level = 0;

//Add function to detect keypress
$(document).keypress(function() {
  if (!started) { //If game is started
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//create click function to detect mouse click
$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");  //current color
  userClickedPattern.push(userChosenColour);

  //var sound = new Audio("sounds/"+userChosenColour+".mp3");
  //sound.play();
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id"); // userChosenColour to store the id of the button that got clicked

  userClickedPattern.push(userChosenColour); //Add userChosenColour to userClickedPattern
  //  console.log(userClickedPattern);
  //var sound = new Audio("sounds/"+userChosenColour+".mp3");
  //sound.play();
  //Use above sounds using Refactor
  playSound("userChosenColour");
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  }
else {
    console.log("Wrong!");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game over, Press Any Key to Restart");

    //Call startOver() if the user gets the sequence wrong.
     startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); //generate random number from 0-3
  var randomChosenColour = buttonColours[randomNumber]; //Choose any color

  // Add the new randomChosenColour generated to the end of the gamePattern.
  gamePattern.push(randomChosenColour);


  //$("#"+randomChosenColour);  //Select jQuery id
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //Add animatioon on id

  // var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
    //sound.play();
  //Use above sounds using Refactor
  playSound(randomChosenColour);
}


//Let's play sounds
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//Animate Function
function animatePress(currentColor) {
  //Add pressed class using jquery to current color and buttons have id's
  $("#" + currentColor).addClass("pressed");

  //Animate function to animate class after 100 ms(miliseconds)
  setTimeout(function() {
    $("#" + currentColor).removeClass('pressed');
  }, 100);
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

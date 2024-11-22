//Declaration and Initialization

var buttonColours = ["red", "blue", 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//Detect click
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  //var sound = new Audio("#" + randomChosenColour + ".mp3");
  //sound.play();
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //console.log("Success!");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }

  } else {
    //console.log("Wrong!");
    playSound("wrong");  //since here we have not string variable so, wirte wrong in string
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}


//Next sequence
function nextSequence() {

  userClickedPattern =[];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];


  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed"); //Animate button that's currently clicked

  //Let's remove animation
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audioSound = new Audio("sounds/" + name + ".mp3");
  audioSound.play();
}

function startOver() {
  gamePattern = [];
  started = false;
  level = 0;
}

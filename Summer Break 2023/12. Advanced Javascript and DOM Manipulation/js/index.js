//Detecting Button Press by mouse
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  //W button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    //Add Annimations
    buttonAnnimation(buttonInnerHTML);

  });
}
//Let's add keyboard functionality
//Detecting Keyboard Press
document.addEventListener("keypress", function(event) {
  //  alert("Key was pressed");
  makeSound(event.key);
  //Add Annimations
  buttonAnnimation(event.key);

});

//Let's make sound
function makeSound(key) {

  switch (key) {
    case "w":
      var audio = new Audio("sounds/dr-tom.mp3");
      audio.play();
      break;
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    case "d":
      var audio = new Audio("sounds/smooth-beat.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom1.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom2.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom3.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
//Let's add Annimations
function buttonAnnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100); //Remove annimation after 100 miliseconds

}

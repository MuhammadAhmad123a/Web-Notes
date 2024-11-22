//Method 2
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  //W button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;


    switch (buttonInnerHTML) {
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

  });
}


/*
//For Single button
document.querySelector(".drum").addEventListener("click", handleClickW);  //On first button on web-page
function handleClickW(){
  var audio = new Audio('sounds/tom1.mp3');
  audio.play();
  this.style.color = 'white'; //Change color to white
}
*/

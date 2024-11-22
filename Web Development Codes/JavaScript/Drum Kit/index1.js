
//Method 2
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
   //W button
  document.querySelectorAll(".drum")[0].addEventListener("click",function(){
    var audio = new Audio('sounds/tom1.mp3');
    audio.play();
    //console.log(this.innerHTML);  //To print character in inspect
    //console.log(this.style.color = 'white');
    this.style.color = 'white' //This and above line will change text color to white
  });
  //a button
  document.querySelectorAll(".drum")[1].addEventListener("click",function(){
    var audio = new Audio('sounds/dr-tom.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
  });
  //S button
  document.querySelectorAll(".drum")[2].addEventListener("click",function(){
    var audio = new Audio('sounds/kick.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
  });
  //d button
  document.querySelectorAll(".drum")[3].addEventListener("click",function(){
    var audio = new Audio('sounds/smooth-beat.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
  });
  //j button
  document.querySelectorAll(".drum")[4].addEventListener("click",function(){
    var audio = new Audio('sounds/tom2.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
  });
  //k button
  document.querySelectorAll(".drum")[5].addEventListener("click",function(){
    var audio = new Audio('sounds/tom3.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
  });
  //l button
  document.querySelectorAll(".drum")[6].addEventListener("click",function(){
    var audio = new Audio('sounds/dr-tom.mp3');
    audio.play();
    this.style.color = 'white' //This and above line will change text color to white
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

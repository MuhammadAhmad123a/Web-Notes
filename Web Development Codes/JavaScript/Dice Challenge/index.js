//Let's do for player 2
//Create random number of range 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";  //dice1.png - dice6.png


//Let's add concatenation to change image1
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//Change attributes of image elements
var image1 = document.querySelectorAll ("img")[0];  //querySelectorAll because we have two images with index 1
image1.setAttribute("src", randomImageSource);

//Let's do for player 2
//Create random number of range 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); //Set index 2 an image

//document.querySelectorAll("img")[1].setAttribute("src","images/dice"+(Math.floor(Math.random()*6)+1)+".png");

if(randomNumber1>randomNumber2){  //If player 1 wins
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2){   //If player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else{    //If player 1 and player 2 has same score on dice rolling
  document.querySelector("h1").innerHTML = "Draw!";
}

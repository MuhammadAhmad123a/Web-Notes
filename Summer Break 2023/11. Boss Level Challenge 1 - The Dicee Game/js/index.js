//For Player 1
var randomNumber1 = Math.floor(Math.random()*6)+1; // random number 1-6
var randomImage1 = "dice"+randomNumber1+".png";   //random image 1-6
var randomImageSource1 = "images/"+randomImage1;   //image source
var image1 = document.querySelectorAll("img")[0];  //change source attribute of image element index 0 element means 1st element

//change attribute names
image1.setAttribute("src",randomImageSource1); //setAttributes 1: attribute name you want to change, 2: change by which attribute

//For Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1; // random number 1-6
var randomImage2 = "dice"+randomNumber2+".png";   //random image 1-6
var randomImageSource2 = "images/"+randomImage2;   //image source
var image2 = document.querySelectorAll("img")[1];  //change source attribute of image element index 1 element means 2nd element

//change attribute names
image2.setAttribute("src",randomImageSource2); //setAttributes 1: attribute name you want to change, 2: change by which attribute

//if-else Statement
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}

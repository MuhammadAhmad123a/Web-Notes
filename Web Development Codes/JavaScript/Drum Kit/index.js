//alert("Welcome to Drum Kit!");

/*   //For Single Button
    //Method 1
    document.querySelector("button").addEventListener("click", handleClick);  //On first button on web-page
    function handleClick(){
      alert("I got clicked!");
    }

    //Method 2
    document.querySelector("button").addEventListener("click",function handleClick(){
      alert("I got clicked!");
      // want to do when click detected.
    });
*/

//
/* Event is added to first button that's w button. When click this button it will call handleClick function
we are not using this method as handleClick() because if I do this then alert will show on page load and it will be a string
up code. It handleClick means that we are waiting that click. */


//For all buttons querySelectorAll
//Method 1

/* var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //for all buttons
}
function handleClick(){
  alert("I got clicked!");
}
*/
//Method 2
/*
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
    alert("I got clicked!");
    // want to do when click detected.
  });
}
*/

//Using While Loops
var noOfDrumButtons = document.querySelectorAll(".drum").length;
var i=0;
while (i < noOfDrumButtons) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
    alert("I got clicked!");
    // want to do when click detected.
  });
  i++;
}

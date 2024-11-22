
//Adding EventListeners with jquery
/*
$("h1").click(function(){
  $("h1").css("color","purple");
});

var noOfButtons = ($("button").length);
for (var i = 0; i < noOfButtons; i++) {
  $("button")[i].addEventListener('click',function(){
    $("h1").css("color","purple");
  });
}
*/
//keypress EventListener
/*
$("input").keypress(function(event){
  console.log(event.key);
});
*/

/*
$("body").keypress(function(event){  //body
  console.log(event.key);
});

$("document").keypress(function(event){  //Entire Document
  console.log(event.key);
});
*/
/*
$(document).keypress(function(event){ //For entire document
  $("h1").text(event.key);
});
*/
//Instead Of using click or keypress functions another more felixble way is add On function
//Mouseover Function
$("h1").on("mouseover",function(){
  $("h1").css("color",'purple');
});

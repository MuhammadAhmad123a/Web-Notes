
//Website Animations with jQuery
/*
$("button").on("click",function(){
  $("h1").hide();   //Hide is an annimation that hides selected item  Use this to show again $("h1").show();
});
*/
/*
$("button").on("click",function(){
  $("h1").toggle();  //This annimation hides h1 on first click of any button and again show on click and so again and again
});
*/
//Let's reduce the opacity
/*
$("button").on("click",function(){
  $("h1").fadeOut();
});
*/
/*
$("button").on("click",function(){
  $("h1").fadeIn();
});
*/
//$("h1").fadeIn();
/*
$("button").on("click",function(){
  $("h1").fadeToggle();
});
*/
/*
$("button").on("click",function(){
  $("h1").slideUp();
});
$("button").on("click",function(){
  $("h1").slideDown();
});
*/
/*
$("button").on("click",function(){
  $("h1").slideToggle();
});
*/
/*
$("button").on("click",function(){
  $("h1").animate({
    opacity:0.5
  });
});
*/
/*
$("button").on("click",function(){
  $("h1").animate({
    margin: "100px"
  });
});
*/
$("button").on("click",function(){
  $("h1").slideUp().slideDown().animate({  opacity: 0.5  });
});

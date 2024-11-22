//jshint esversion: 6

//console.log(module);  //module object = https://nodejs.org/dist/latest-v18.x/docs/api/modules.html#the-module-object
//Above module is required to run all this code
//module.exports="Hello World!";
//module.exports=getDate;
//let's run all below functions
/*
module.exports.getDate = getDate;

function getDate() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    //year:"numeric"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  let day = today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday, August 24, 2022
  return day;
}

module.exports.getDay = getDay;

function getDay() {
  let today = new Date();

  let options = {
    weekday: "long"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  let day = today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday
  return day;
}

console.log(module.exports);
*/
/*
//Function Expressions
module.exports.getDate = function() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    //year:"numeric"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  return today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday, August 24, 2022
}

module.exports.getDay function() {
  let today = new Date();

  let options = {
    weekday: "long"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  return today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday
}
*/

//Function Expressions  with export shortcuts
exports.getDate = function() {
  const today = new Date();  //change all variables from let to const

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    //year:"numeric"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  return today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday, August 24, 2022
}

exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: "long"
  };

  //var day=today.toLocaleDateString("en-US");  //8/24/2022
  return today.toLocaleDateString("en-US", options); //add date format in us english format
  //Wednesday
}

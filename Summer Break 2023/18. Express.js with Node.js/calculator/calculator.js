//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){ //callback function
  //res.send("Hello, World!");
  //res.sendFile("index.html");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  console.log(req.body);
  //req.body.num1
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  console.log("Result of calculation is: " + result);
  //res.send("Thanks for post that!");
  res.send("Result of calculation is: " + result);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmicalCulator.html");
});

app.post("/bmiCalculator", function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("Your bmi is: " + bmi);
});



app.listen(3000, function(){
  console.log("Server is running at Port 3000.");
});

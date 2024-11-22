const express = require('express');
const app = express();

//app.listen(3000);  //Listen at port 3000 just a channel (server is tunned to a channel 3000)
//Add callback function


/*app.get("/", function(request, response){ //callback function
  //console.log(request);
  //response.send("Hello");
  response.send("<h1>Hello, World!</h1>")
});*/
app.get("/", function(req, res){ //callback function
  res.send("<h1>Hello, World!</h1>")
});
app.get("/contact", function(req, res){ //callback function
  res.send("Contact me at: ahmad481988@gmail.com")
});
app.get("/about", function(req, res){ //callback function
  res.send("My name is Muhammad Ahmad and I love hard-work. I just want to be successfull soon.")
});
app.listen(3000, function(){
  console.log("Server is running at Port 3000.");
});

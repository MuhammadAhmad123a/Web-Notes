//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

//console.log(date);
//console.log(date);

const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];  //let to const
const workItems = [];  //let to const

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public")); //use pulic folder as static

app.get("/", function(req, res) {

  //let day = date();
  const day = date.getDate();  //only day let to const
  //let day = date.getDate();

  res.render("list", {
    listTitle: day, //replace the entire value of kind of day with current day
    //newListItem: item //Its written to fix below problem of server
    newListItems: items
  });
});


app.post("/", function(req, res) {
  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/"); //simple form of above line
  }
  console.log(req.body);

  //console.log(item);
  //res.render("list",{newListItem:item});
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.post("/work", function(req, res) { //post route
  const item = req.body.newItem;  //let to const
  workItems.push(item);
  res.redirect("/work");
});

//create about route
app.get("/about", function(req, res) {
  res.render("about");
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

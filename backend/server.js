var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
const path = require('path');
// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");
var cors = require("cors");

// Require all models
var db = require("./models");

const PORT = process.env.PORT || 3001;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(bodyparser.urlencoded([{ extended: true}]));
app.use(express.json());
app.use(cors());
// Make public a static folder
app.use(express.static("public"));
app.use(express.static("../client/build"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookshelf", { useNewUrlParser: true });

// Routes


// Route for getting all Book from the db
app.get("/API/saved", function(req, res) {
  console.log("UPSET")
  // Grab every document in the Book collection
  db.Book.find({})
    .then(function(dbBook) {
      // If we were able to successfully find Book, send them back to the client
      console.log("BOOK" + dbBook)
      res.json(dbBook);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.delete("/saved", function(req, res){
  console.log(req.body)
  db.Book.remove({
    _id: mongoose.Types.ObjectId(req.body.id)
  }).then((data) => res.json(data))

})

app.post("/save", function(req, res){

    db.Book.update({
        image: req.body.image
    },
    {
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    },
    {upsert: true}).then((dbBook) => {
      res.json(dbBook);
    })
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname,"..","client", "build", "index.html"));
}); 

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});

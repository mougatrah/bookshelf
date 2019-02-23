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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/newsroom", { useNewUrlParser: true });

// Routes


// Route for getting all Articles from the db
app.get("/saved", function(req, res) {
  // Grab every document in the Articles collection
  db.Books.find({})
    .then(function(dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.post("/save", function(req, res){
    db.Books.update({
        title: req.query.title
    },
    {
        title: req.query.title,
        authors: req.query.authors,
        description: req.query.description,
        image: req.query.image,
        link: req.query.link
    },
    {upsert: true})
})

app.get('/', function(req, res) {
  res.sendFile("../client/build/index.html");
}); 

// Start the server
app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});

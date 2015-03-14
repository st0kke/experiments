var express = require('express');
var path = require('path');
var bourne = require('bourne');

var app = express();
var posts = new bourne("simpleBlogPosts.json");
var comments = new bourne("simpleBlogComments.json");

app.configure(function() {
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
});

/*
app.get("/posts", function (req, res) {
  posts.find(function (results) {
    res.json(results);
  });
});

*/
app.get("/posts", function (req, res) {
     posts.find(function (abc, results) {
       res.json(results);
     });
});

app.get("/posts", function (req, res) {
	res.json('{"result":' + posts + '}');
});

app.post("/posts", function (req, res) {
  posts.insert(req.body, function (result) {
    res.json(result);
  });
});

app.get('/*', function(req, res) {
  posts.find(function (err, results) {
   res.render("index.ejs", {posts: JSON.stringify(results)} );
  });
});

app.listen(3000);


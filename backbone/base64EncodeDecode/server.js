var express = require('express');
var path = require('path');
var app = express();

app.configure(function() {
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/*', function(req, res) {
	res.render("index.ejs");
});

app.post("/decode", function(req, res) {
  res.json('{"decodedString":"the decoded version eventually"}');
});

app.listen(3000);

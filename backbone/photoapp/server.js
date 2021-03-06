var requser = {
  username: "simon",
  id: "1"
}

var express = require('express');
var path = require('path');
var bourne = require("bourne");
var passport = require("passport");
var signin = require("./signin");
var fs = require("fs");
var app = express();

var users = new bourne("users.json");
var photos = new bourne("photos.json");
var comments = new bourne("comments.json");

passport.use(signin.strategy(users));
passport.serializeUser(signin.serialize);
passport.deserializeUser(signin.deserialize(users));

function safe(user) {
  var toHide=['passwordHash'],
    clone = JSON.parse(JSON.stringify(user));

  toHide.forEach(function(prop) {
    delete clone[prop];
  });

  return clone;
}

app.configure(function() {
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(express.multipart());
  app.use(express.cookieParser());
  app.use(express.session({secret: 'photo-application'}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static('public'));
});

app.get("/login", function(req, res) {
  res.render("login.ejs");
});

app.post("/login", passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect('/');
});

app.post('/create', function(req, res, next) {
  var userAttrs = {
    username: req.body.username,
    passwordHash: signin.hashPassword(req.body.password), 
    following: []
  };
  console.log(userAttrs);
  users.findOne({username: userAttrs.username}, function (err, existingUser) {
    if (!existingUser) {
      users.insert(userAttrs, function(err, user) {
        req.login(user, function(err) {
          res.redirect("/");
        });
      });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/photos", function(req, res) {
  var oldPath = req.files.file.path,
      publicPath = path.join("images", requuser.id + "_" + 
        (photos.data.length + 1) + ".jpg"),
      newPath = path.join(_dirname, "public", publicPath);

  fs.rename(oldPath, newPath, function(err) {
      if (!err) {
        photos.insert({
          userId: requser.id,
          path: "/" + publicPath,
          caption: req.body.caption,
          username: requser.username
        }, function(photo) {
          res.send(photo);
        });
      } else {
       res.send(err);
      }
  });
});  

app.get('/*', function(req, res) {
  if(!requser) {
    res.redirect('/login');
    return;
  }
  res.render("index.ejs", {
    user: JSON.stringify(safe(requser))
  });
});


app.listen(3000);

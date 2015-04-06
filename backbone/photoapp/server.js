var express = require('express');
var path = require('path');
var bourne = require('bourne');
var passport = require("passport");
var signin = require("./signin");

var app = express();

var users = new Bourne("users.json");
var photos = new Bourne("photos.json");
var comments = new Bourne("comments.json");

passport.use(signin.strategy(users));
passport.serializeUser(signin.serialize);
passport.deserializeUser(signin.deserialize(users));

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
  users.findOne({username: userAttrs.username}, function (existingUser) {
    if (!existingUser) {
      users.insert(userAttrs, function(user) {
        req.login(user, function(err) {
          res.redirect("/");
        });
      });
    } else {
      res.redirect("/");
    }
  });
});

app.get('/*', function(req, res) {
  if(!req.user) {
    res.redirect('/login');
    return;
  }
  res.render("index.ejs", {
    user: JSON.stringify(safe(req.user))
  });
});

function safe(user) {
  var toHide=['passwordHash'],
    clone = JSON.parse(JSON.stringify(user));

  toHide.forEach(function(prop {
    delete clone[prop];
  });

  return clone;
}

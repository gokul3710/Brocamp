var express = require("express");
var router = express.Router();
var {data} =  require('../data/homeData')

/* GET home page. */

const userValid = (userData) => {
  if (userData.name != "Gokul") {
    return [false, "Invalid username"];
  }

  if (userData.password != "123") {
    return [false, "Wrong Password"];
  }

  return [true, "Logged in Succesfully"];
};

router.get("/", function (req, res) {
  if (req.session.loggedIn) {
    let user = req.session.user;
    res.render("user/index", { user, data });
  } else {
    res.redirect("/login");
  }
});

router.get("/login", function (req, res) {
  if (req.session.user) {
    res.redirect("/");
  } else {
    let loginErr = req.session.loginErr;
    res.render("user/login", { loginErr });
  }
});

router.post("/login", function (req, res) {
  let validity = userValid(req.body);
  if (validity[0] == true) {
    req.session.loggedIn = true;
    req.session.user = req.body;
    req.session.loginErr = null;
    res.redirect("/");
  } else {
    req.session.loginErr = validity[1];
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  req.session.user = null;
  req.session.loggedIn = false;
  res.redirect("/");
});

module.exports = router;

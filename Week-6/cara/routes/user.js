var express = require("express");
var router = express.Router();
var userHelpers = require("../helpers/userHelpers");
const { response } = require("express");



const userLogin = (req,res,next)=>{
  if(req.session.userLoggedIn){
    next()
  }else{
    res.redirect('/login')
  }
}



/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("user/index");
});

router.get("/signup", function (req, res, next) {
  if (req.session.userLoggedIn) {
    res.redirect("/");
  } else {
    res.render("user/signup",{signupErr:req.session.userSignupErr});
  }
});

router.get("/login", function (req, res, next) {
  if (req.session.userLoggedIn) {
    res.redirect("/");
  }else{
    res.render("user/login",{loginErr:req.session.userLoginErr});
  }
});

router.post("/signup", function (req, res, next) {
  userHelpers.doSignup(req.body).then((response) => {
    if(response.signupErr){
      req.session.userSignupErr = response.signupErr
      res.redirect('/signup')
    }else{
      req.session.userSignupErr = false
      req.session.userLoginErr = false
      res.redirect('/login')
    }
    
  });
});

router.post("/login", function (req, res, next) {
  userHelpers.doLogin(req.body).then((response) => {
    console.log(response);
    if (response.status) {
      req.session.userLoggedIn = true;
      req.session.user = response.user;
      req.session.userLoginErr = false
      req.session.userSignupErr = false
      res.redirect("/");
    } else {
      req.session.userLoginErr = response.loginErr
      res.redirect("/login");
    }
  });
});

router.get("/logout", function (req, res, next) {
  req.session.userLoggedIn = false;
  req.session.user = null;
  res.redirect('/')
});




router.get("/shop",userLogin, function (req, res, next) {
  res.render("user/shop");
});

router.get("/cart",userLogin, function (req, res, next) {
  res.render("user/cart");
});

router.get("/blog", function (req, res, next) {
  res.render("user/blog");
});

router.get("/about", function (req, res, next) {
  res.render("user/about");
});

router.get("/contact", function (req, res, next) {
  res.render("user/contact");
});

router.get("/product", userLogin, function (req, res, next) {
  res.render("user/product");
});

router.get('/edit-user',userLogin,(req,res,next)=>{
  console.log("one");
  userHelpers.getUser(req.query.id).then((user)=>{
    console.log("three");
    console.log(user);
    res.render('user/edit-user',{user})
  })
})

router.post('/edit-user',(req,res,next)=>{
  userHelpers.editUser(req.body).then((response)=>{
    req.session.user = req.body
    res.redirect('/admin')
  })
})


module.exports = router;

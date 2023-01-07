var express = require("express");
var router = express.Router();
var userHelpers = require("../helpers/userHelpers");
const productHelpers = require("../helpers/productHelpers");

const userLogin = (req,res,next)=>{
  if(req.session.userLoggedIn || req.session.adminLogin){
    next()
  }else{
    res.redirect('/login')
  }
}

/* GET home page. */
router.get("/", function (req, res, next) {
  productHelpers.getAllProducts().then((products)=>{
    res.render("user/index",{user:req.session.user,products,admin:req.session.adminLogin});
  })
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
  productHelpers.getCount("company").then((data)=>{
    console.log(data);
  })
  res.render("user/blog");
});

router.get("/about", function (req, res, next) {
  productHelpers.startsWith().then((data)=>{
    console.log(data);
  })
  res.render("user/about");
});

router.get("/contact", function (req, res, next) {
  res.render("user/contact");
});

router.get("/product", userLogin, function (req, res, next) {
  if(req.query.productId){
    productHelpers.getProduct(req.query.productId).then((product)=>{
      res.render("user/product",{product})
    })
  }else{
    res.redirect('/')
  }
});

router.get('/edit-user',userLogin,(req,res,next)=>{
  if(req.query.id){
    userHelpers.getUser(req.query.id).then((user)=>{
      res.render('user/edit-user',{user})
    })
  }else{
    res.redirect('/')
  }
})

router.post('/edit-user',(req,res,next)=>{
  userHelpers.editUser(req.body).then((response)=>{
    if(req.session.adminLogin){
      res.redirect('/admin')
    }else{
      res.redirect('/')
    }
  })
})


router.get('/delete-user',userLogin,(req,res)=>{
  if(req.query.id){
    userHelpers.deleteUser(req.query.id).then((response)=>{
      if(req.session.adminLogin){
        res.redirect('/admin')
      }else{
        res.redirect('/')
      }
    })
  }
})

module.exports = router;

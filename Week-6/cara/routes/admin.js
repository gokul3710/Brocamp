var express = require('express');
const userHelpers = require('../helpers/userHelpers');
var router = express.Router();

const adminLoggin =(req,res,next)=>{
  if(req.session.adminLoggin){
    next()
  }else{
    res.redirect('/admin/login')
  }
}

/* GET users listing. */
router.get('/', adminLoggin, function(req, res, next) {
  userHelpers.getAllUsers().then((users)=>{
    console.log(users);
    res.render('admin/index' , {admin:true,users});
  })
});

router.get('/login', function(req, res, next) {
  res.render('admin/login');
});

router.post('/login', function(req, res, next) {
  if(req.body.email === "admin@cara.com" && req.body.password === "123"){
    req.session.adminLoggin = true;
    res.redirect('/admin')
  }else{
    console.log("error");
    res.redirect('/admin/login')
  }
});


module.exports = router;

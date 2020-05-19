var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SocGEN' });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/', function (req, res) {
  console.log(req.body);
  res.send(req.body);
});


module.exports = router;

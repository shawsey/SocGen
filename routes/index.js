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

router.post('/', function (req, res, next) {
  /* Identity Form Checks */

  if (req.body.fname) {
  var fnameinclude = req.body.fname;
  } else {
    var fnameinclude = false;
  }

  if (req.body.lname) {
    var lnameinclude = req.body.lname;
    } else {
      var lnameinclude = false;
    }
  
  var gender = req.body.gender;
  
  if (req.body.state) {
    var stateinclude = req.body.state;
  } else {
    var stateinclude = false;
  }
 
  if (req.body.street) {
    var streetinclude = req.body.street;
  } else {
    var streetinclude = false;
  }

  if (req.body.phone) {
    var phoneinclude = req.body.phone;
  } else {
    var phoneinclude = false;
  }

  if (req.body.occupation) {
    var occupationinclude = req.body.occupation;
  } else {
    var occupationinclude = false;
  }

    res.render('generate', { fnameinclude, lnameinclude, gender, stateinclude, streetinclude, phoneinclude, occupationinclude});
  

});

router.post('/test/submit', function(req, res, next) {

  var id = req.body.id;

  if ( id == 5 ) {
    res.redirect('/test/100');
  }else {
    res.redirect('/test/' + id);
  }

})

router.get('/test/:id', function(req, res, next) {
  res.render('test', { output: req.params.id });
});

module.exports = router;

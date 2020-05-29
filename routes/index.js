var express = require('express');
var router = express.Router();
const fs = require('fs');


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

/* Get Alternate Generation Page -2 */
router.get('/dnd', function(req, res, next) {
  res.render('dnd', {title:"dndgen"});
})

router.post('/', function (req, res, next) {
  /* Identity Form Checks */


  
  
  if (req.body.fname || req.body.lname ) {
    
    if (req.body.fname) {
      if ( req.body.gender == "male" ) {
        /*Male FirstName */
        var malefndata = fs.readFileSync('public/files/malefirst.txt');
        malefndata+='';
        var lines = malefndata.split('\n');
        var fname = lines[Math.floor(Math.random()*lines.length)];
        console.log("MaleNAMEANSWER: " + fname);
        var fnamepost = fname;
      } else {
        /*Female FirstName */
        var femalefndata = fs.readFileSync('public/files/femalefirst.txt');
        femalefndata+='';
        var lines = femalefndata.split('\n');
        var fname = lines[Math.floor(Math.random()*lines.length)];
        console.log("FemaleNAMEANSWER: " + fname);
        var fnamepost = fname;
      }
    } else {
      var fnamepost = "";
    }

    if (req.body.lname) {
        var lndata = fs.readFileSync('public/files/last.txt');
        lndata+='';
        var lines = lndata.split('\n');
        var lname = lines[Math.floor(Math.random()*lines.length)];
        console.log("LASTNAMEANSWER: " + lname);
        var lnamepost = lname;
      } else {
        var lnamepost = "";
      }

    var name = fnamepost.concat(lnamepost);
  }
  
  /* City State Zip || Street */

  if (req.body.state || req.body.street ) {

    if (req.body.state) {
      var statedata = fs.readFileSync('public/files/citystatezip.txt');
      statedata+='';
      var lines = statedata.split('\n');
      var csz = lines[Math.floor(Math.random()*lines.length)];
      console.log("City State Zip ANSWER: " + csz);
      var cszpost = csz;

    } else {
      var cszpost = "";
    }
  
    if (req.body.street) {
      var streetdata = fs.readFileSync('public/files/streetads.txt');
      streetdata+='';
      var lines = streetdata.split('\n');
      var street = lines[Math.floor(Math.random()*lines.length)];
      console.log("Phone number ANSWER: " + street);
      var streetpost = street;
    } else {
      var streetpost = "";
    }

    var location = streetpost.concat(cszpost);
  }
 
  if (req.body.phone) {
    var phonedata = fs.readFileSync('public/files/phonenumbers.txt');
    phonedata+='';
    var lines = phonedata.split('\n');
    var phone = lines[Math.floor(Math.random()*lines.length)];
    console.log("Phone number ANSWER: " + phone);
    var phonepost = phone;

    var phoneinclude = req.body.phone;
  } else {
    var phoneinclude = false;
  }

  if (req.body.occupation) {
    var jobdata = fs.readFileSync('public/files/occupations.txt');
    jobdata+='';
    var lines = jobdata.split('\n');
    var job = lines[Math.floor(Math.random()*lines.length)];
    console.log("Occupation ANSWER: " + job);
    var occupationpost = job;
  }


    res.render('generate', { name, fnamepost, lnamepost, location, phoneinclude, phonepost, occupationpost});
  

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

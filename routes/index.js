var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var config = req.app.get('config');
  if (config.maintainance) {
    res.render('construction', {countdownDate: "4 august 2018 16:00:00"});
  }
  else {
    res.render('index', { title: 'Express' });
  }
  
});

module.exports = router;

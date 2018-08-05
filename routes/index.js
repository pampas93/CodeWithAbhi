var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  if (req.app.get('config') != null) {
    
    var config = req.app.get('config');
    if (config.maintainance) {
      res.render('construction', { countdownDate: config.eventDate });
    }
  }
  else {
    res.render('index', { title: 'Express' });
  }

});

router.get('/private/config', function (req, res, next) {
  res.render('config');
});

router.post('/private/config/setMaintainance', function (req, res, next) {

  var config = req.app.get('config');

  var admin = req.body.username;
  var password = req.body.password;

  if (admin == config.username && password == config.password) {

    if (req.body.maintainance) {
      var eventDate = req.body.maintainanceTime;
      config.eventDate = eventDate;
      module.exports = config;
    }
    res.status(202).send('Success');
  }
  else {
    res.status(404).send('You are not authorized.');
  }
})

module.exports = router;

var express = require('express');
var router = express.Router();
var keystone = require('keystone');
var Maintainance = keystone.list('Maintainance');

/* GET home page. */
router.get('/', function (req, res, next) {

  Maintainance.model.findOne().exec(function (err, object) {
    if (err) {
      res.render('index', { title: 'Express' });
    }
    else {
      if (object.setMaintainance) {
        res.render('construction', { countdownDate: object.DateTime });
      }
    }
  });
});

module.exports = router;

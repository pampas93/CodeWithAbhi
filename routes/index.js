var express = require('express');
var router = express.Router();
var keystone = require('keystone');
var Maintainance = keystone.list('Maintainance');
var Post = keystone.list('Post');

var postController = require("../controllers/PostController");

/* GET home page. */
//TODO: Remove async later phase
router.get('/', async (req, res, next) => {

  if (!process.env.MAINTAINANCE) {

    var data = await postController.listPosts(req, res);
    res.render('home', { posts: data });
  }
  else {
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
  }

});

module.exports = router;

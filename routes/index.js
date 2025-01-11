var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.get('/menu', function(req, res, next) {
  res.render('menu');
});
router.get('/news', function(req, res, next) {
  res.render('news');
});

module.exports = router;
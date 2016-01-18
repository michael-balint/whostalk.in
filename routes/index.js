var express     = require('express');
var router      = express.Router();

var test        = require('./test');
var reddit      = require('./reddit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {site: req.query.q || ''});
});

router.get('/test', function(req, res, next) {
  test.getData(req, res, next);
});

router.get('/reddit', function(req, res, next) {
  reddit.getData(req, res, next);
});

module.exports = router;

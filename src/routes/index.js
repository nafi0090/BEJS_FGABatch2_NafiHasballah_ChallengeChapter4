var express = require('express');
var router = express.Router();
const INDEX_ROUTERS = require('routes/v1/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

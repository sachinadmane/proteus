var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  return res.send('welcome to node');
});

// Other routes specific to project 1 here

module.exports = router;
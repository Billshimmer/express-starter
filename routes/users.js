var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'layout' });
});

router.post('/', function (req, res) {
  res.send('Got a Post request');
})

module.exports = router;

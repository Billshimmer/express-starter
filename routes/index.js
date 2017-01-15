var express = require('express');
var router = express.Router();
var process = require('process');
var events = require('events');
var util = require('util');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { name: 'nick' });
  process.nextTick(function () {
    setTimeout(function () {
      console.log('TimeOut');
    }, 0)
  })
  process.nextTick(function () {
    console.log(process.cwd());
  })
  var p = function () {
    events.EventEmitter.call(this);
  }
  util.inherits(p, events.EventEmitter);
  var pro = new p();
  pro.on('data', function (data) { console.log(data) });
  pro.emit('data', '事件触发');
});

module.exports = router;

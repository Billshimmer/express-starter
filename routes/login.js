var express = require('express');
var process = require('process');
var events = require('events');
var util = require('util');
/* GET login page. */
module.exports = function (app) {
  app.get('/', function (req, res, next) {
    res.render('login');
    // process.nextTick(function () {
    //   setTimeout(function () {
    //     console.log('TimeOut');
    //   }, 0)
    // })
    // process.nextTick(function () {
    //   console.log(process.cwd());
    // })
    // var p = function () {
    //   events.EventEmitter.call(this);
    // }
    // util.inherits(p, events.EventEmitter);
    // var pro = new p();
    // pro.on('data', function (data) { console.log(data) });
    // pro.emit('data', '事件触发');
  });
  app.post('/', function (req, res) {
    res.sendStatus(200);
  });
  app.get('/login', function (req, res) {
    res.render('login');
  })
  app.post('/login', function (req, res) {
    res.sendStatus(200);
  });
};
var express = require('express');
var process = require('process');
var events = require('events');
var util = require('util');
/* GET login page. */
module.exports = function (app) {
  app.route('/')
    .get(function (req, res, next) {
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
    })
    .post(function (req, res, next) {
      res.send(200);
    })

  app.route('/login')
    .get(function (req, res) {
      res.render('login');
    })
    .post(function (req, res, next) {
      res.send(200);
    })
};
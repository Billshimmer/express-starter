var express = require('express');
var process = require('process');
var events = require('events');
var util = require('util');
/* GET login page. */
module.exports = function (app) {
  app.route('/')
    .all(function (req, res, next) {
      next();
    })
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

  app.route('/login')
    .get(function (req, res) {
      res.render('login');
    })
    .post(function (req, res, next) {
      var name = req.body.username;
      var User = global.dbHelper.getModel('user');
      User.findOne({ name: name }, function (error, doc) {
        if (error) {
          res.sendStatus(500);
          console.log(error);
        } else if (!doc) {
          req.session.error = '用户名不存在!';
          res.sendStatus(404);
        } else {
          if (doc.password != req.body.password) {
            req.session.error = '密码错误';
            res.sendStatus(404);
          } else {
            req.session.user = doc;
            res.sendStatus(200);
          }
        }
      })
    })
};
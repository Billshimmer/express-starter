var express = require('express');

/* GET users listing. */
module.exports = function (app) {
  app.route('/register')
    .get(function (req, res) {
      res.render('register');
    })
    .post(function (req, res, next) {
      var name = req.body.username,
          password = req.body.password,
          User = global.dbHelper.getModel('user');
      User.findOne({ name: name }, function (error, doc) {
        if (error) {
          req.session.error = '网络异常';
          console.log('网络异常');
          res.sendStatus(500);
        } else if (doc) {
          req.session.error = '用户名已存在';
          res.sendStatus(500);
        } else {
          User.create({
            name: name,
            password: password
          }, function (error, doc) {
            if (error) {
              res.send(500);
              console.log(error);
            } else {
              req.session.error = '用户名创建成功！';
              res.send(200);
            }
          })
        }
      })
    });
};
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
          res.status(500).send({message: '网络异常'});
        } else if (doc) {
          res.status(400).send({message: '用户名已经存在'});
        } else {
          User.create({
            name: name,
            password: password
          }, function (error, doc) {
            if (error) {
              res.status(500).send({message: '网络异常'});
            } else {
              res.status(200).send({message: '用户名创建成功！'});
            }
          })
        }
      })
    });
};
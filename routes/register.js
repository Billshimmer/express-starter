var express = require('express');

/* GET users listing. */
module.exports = function (app) {
  app.route('/register')
    .get(function (req, res) {
      res.render('register');
    })
    .post(function (req, res, next) {
      res.send(200);
    });
};
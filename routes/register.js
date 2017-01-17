var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = function (app) {
  app.get('/register', function (req, res) {
    res.render('register');
  });
  app.post('/register', function (req, res, next) {
    res.sendStatus(200);
  });
};
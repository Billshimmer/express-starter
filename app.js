var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
require('./linkMongodb')(app);
require('./connect')(app);
require('./static-files')(app);
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.message = '';
  next();
});
require('./routes')(app);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.user = req.session.user;
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

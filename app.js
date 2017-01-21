var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var connection = mongoose.connection;

//mongodb connection and Curd
global.dbHelper = require('./common/dbHelper.js');
global.db = mongoose.connect('mongodb://127.0.0.1:27017/test1');
connection.on('error', function (error) {
  console.log('mongodb connection error');
});
connection.once('open', function () {
  console.log('mongodb connection success');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// session set
app.use(session({
  secret: "shimmer.secret",
  cookie: { maxAge: 30 * 86400 * 1000 },
  resave: true,
  saveUninitialized: true
}));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.message = '';
  next();  
});
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

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

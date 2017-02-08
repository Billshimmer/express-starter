var path = require('path');
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var helmet = require("helmet");

module.exports = function(app) {
  
  //Use Helmet for security
  app.use(helmet());

  // view engine setup
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");

  // session set
  app.use(
    session({
      secret: "shimmer.secret",
      cookie: {maxAge: 30 * 86400 * 1000},
      resave: true,
      saveUninitialized: true
    })
  );

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());

}

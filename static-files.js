var express = require('express');
var path = require('path');

module.exports = function(app) {
  //set up static files
  app.use(express.static(path.join(__dirname, "public")));
}

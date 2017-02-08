var mongoose = require('mongoose');
var connection = mongoose.connection;

module.exports = function(app) {
  
  //mongodb connection and Curd
  global.dbHelper = require("./common/dbHelper.js");
  global.db = mongoose.connect("mongodb://127.0.0.1:27017/test1");
  connection.on("error", function(error) {
    console.log("mongodb connection error");
  });
  connection.once("open", function() {
    console.log("mongodb connection success");
  });

}

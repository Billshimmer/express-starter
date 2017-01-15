module.exports = function (app) {
  require('./cart')(app);
  require('./home')(app);
  require('./login')(app);
  require('./logout')(app);
  require('./register')(app);
}
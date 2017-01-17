module.exports = function (app) {
  app.route('/logout')
    .get(function (req, res) {
      res.redirect('/login');
    })
}
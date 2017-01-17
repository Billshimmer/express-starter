module.exports = function (app) {
  app.route('/home')
    .get(function (req, res) {
      // res.render('home', { user : req.body });
      res.render('home');
    })
}
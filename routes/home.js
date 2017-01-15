module.exports = function (app) {
  app.get('/home', function (req, res) {
    // res.render('home', { user : req.body });
    res.render('home');
  })
}
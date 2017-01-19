module.exports = function (app) {
  app.route('/home')
    .get(function (req, res) {
      // res.render('home', { user : req.body });
      // var Commodity = global.dbHelper.getModel('commodity');
      // var commoditys = [];
      // Commodity.find({}, function (error, doc) {
      //   if (error) {
      //     res.sendStatus(500);
      //     console.log('error');
      //   } else if (doc.length !== 0) {
      //     commoditys = doc;
      //     console.log('no commodity');
      //     res.render('home', { commoditys: commoditys });
      //   }
      // })
      res.render('home');
    });
  app.route('/addcommodity')
    .get(function (req, res) {
      res.render('addcommodity');
    })
    .post(function (req, res) {
      res.sendStatus(200);
    })
}
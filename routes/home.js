module.exports = function (app) {
  app.route('/home')
    .get(function (req, res) {
      var commoditys = [],
          cartNumber = 0,
          Cart = global.dbHelper.getModel('cart'),
          Commodity = global.dbHelper.getModel('commodity');
      Commodity.find({}, function (err, doc) {
        if (err) return res.send(500, { error: err });
        if (doc) {
          Cart.find({ uId: req.session.user._id, cStatus: false }, function (err, Cdoc) {
            cartNumber = Cdoc.length;
            commoditys = doc;
            res.render('home', { commoditys: commoditys, user: req.session.user, cartNumber: cartNumber });
          })
        }
      })
    });
  app.route('/addcommodity')
    .get(function (req, res) {
      res.render('addcommodity');
    })
    .post(function (req, res) {
      var query = { name: req.body.name };
      var Commodity = global.dbHelper.getModel('commodity');
      Commodity.findOneAndUpdate(query, req.body, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
      });
    })
}
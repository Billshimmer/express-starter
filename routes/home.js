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
      var query = { name: req.body.name };
      var Commodity = global.dbHelper.getModel('commodity');
      // Commodity.findOne({ name: newCom.name }, function (error, doc) {
      //   if (error) {
      //     res.sendStatus(500);
      //     console.log('error');
      //   } else if (doc) {

      //   }
      // })
      Commodity.findOneAndUpdate(query, req.body, { upsert: true }, function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
      });
    })
}
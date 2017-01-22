module.exports = function(app) {
  //获取购物车
  app.route("/cart")
    .get(function(req, res) {
      var Cart = global.dbHelper.getModel("cart");
      if (req.session.user) {
        var user = req.session.user;
        Cart.find({uId: req.session.user._id, cStatus: false}, function(
          error,
          doc
        ) {
          if (error) {
            res.status(500).send({message: "网络错误"});
          } else {
            console.log(doc);
            res.render("cart", {carts: doc});
          }
        });
      }
    });

  //购物车添加
  app.route("/addToCart/:id")
    .post(function(req, res) {
      var cId = req.params.id;
      var Cart = global.dbHelper.getModel("cart"),
        Commodity = global.dbHelper.getModel("commodity");
      if (!req.session.user) {
        req.session.error = "用户已过期，请重新登录:";
        res.redirect("/login");
      } else {
        Cart.findOne({cId: cId, uId: req.session.user._id, cStatus: false}, function(error, doc) {
          //商品已存在，数量+1
          if (doc) {
            Cart.update(
              {cId: cId, uId: req.session.user._id},
              {$inc: {cQuantity: 1}},
              function(error, doc) {
                if (doc) {
                  res.sendStatus(200);
                }

              }
            );
          } else {
          //商品不存在, 添加
            Commodity.findOne({_id: cId}, function(error, doc) {
              if (doc) {
                Cart.create(
                  {
                    uId: req.session.user._id,
                    cId: cId,
                    cName: doc.name,
                    cPrice: doc.price,
                    cImgSrc: doc.imgSrc,
                    cQuantity: 1
                  },
                  function(error, doc) {
                    res.sendStatus(200);
                  }
                );
              } else {}
            });
          }
        });
      }
    });

  //购物车删除
  app.route("/deleteCart/:id")
    .post(function(req, res) {
      var id = req.params.id;
      Cart = global.dbHelper.getModel("cart");
      Cart.remove({_id: id}, function(err, doc) {
        if (!err) {
          res.send("succesfully remove");
        }
      });
    });

  //结算购物车
  app.route("/cart/clear")
    .post(function(req, res) {
      Cart = global.dbHelper.getModel("cart");
      Cart.findOneAndUpdate(
        {_id: req.body.id},
        {$set: {cQuantity: req.body.number, cStatus: true}},
        function(err, doc) {
          if (!err) {
            res.send("succesfully clear");
          }
        }
      );
    });
};

module.exports = function (app) {
  app.get("/cart", function (req, res) {
    res.render("cart", {
      commoditys: [
        { name: "bar", price: 10 },
        { name: "foo", price: 100 },
        { name: "nick", price: 1000 }
      ]
    });
  });
};

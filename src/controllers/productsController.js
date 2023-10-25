const db = require("../database/models");

module.exports = {
  products: (req, res) => {
    db.Product.findAll({
      include: ["images"],
    })
      .then((products) => {
        return res.render("products", {
          products,
        });
      })
      .catch((error) => console.log(error));
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },

  detalle: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: ["images"],
    })
      .then((product) => {
        return res.render("detalle", {
          product,
        });
      })
      .catch((error) => console.log(error));
  },
  createProduct: require("./products/create"),
  add: require("./products/add"),
  saveProduct: require("./products/saveProduct "),
  editProduct: require("./products/edit"),
  updateProduct: require("./products/update"),
  deleteProduct: require("./products/delete"),
};

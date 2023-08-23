const { readJson } = require("../data");

module.exports = {
  products: (req, res) => {
    const listProduct = readJson("products.json");
    return res.render("products", {
      listProduct,
    });
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  detalle: (req, res) => {
    return res.render("detalle");
  },
  createProduct: (req, res) => {
    return res.render("createProduct");
  },
  editProduct: require('./products/edit'),
  updateProduct : require('./products/update')
};

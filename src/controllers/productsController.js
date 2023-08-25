const { readJson, writeJson } = require("../data");
const  Product  = require('../data/Product');

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
  createProduct: require('./products/create'),
  saveProduct: require('./products/saveProduct '),
  editProduct: require('./products/edit'),
  updateProduct : require('./products/update')
};

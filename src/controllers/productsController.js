const { readJson } = require("../data");

readJson

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
  editProduct: (req, res) => {
    return res.render("editProduct");
  },
};

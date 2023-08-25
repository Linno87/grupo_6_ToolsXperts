const { readJson } = require("../data");

readJson;

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
    const listProduct = readJson("products.json");
    const id = req.params.id;
    const product = listProduct.find((product) => product.id === +id);
    return res.render("detalle", {
      product,
    });
  },
  createProduct: (req, res) => {
    return res.render("createProduct");
  },
  editProduct: (req, res) => {
    return res.render("editProduct");
  },
};

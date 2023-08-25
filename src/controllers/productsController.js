const { readJson, writeJson } = require("../data");




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
    const listProduct = readJson("products.json");
    const id = req.params.id;
    const product = listProduct.find((product) => product.id === +id);
    return res.render("detalle", {
      product,
    });
  },
  createProduct: require('./products/create'),
  saveProduct: require('./products/saveProduct '),
  editProduct: require('./products/edit'),
  updateProduct : require('./products/update'),
  deleteProduct: require('./products/delete')
};

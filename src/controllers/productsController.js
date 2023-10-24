const { readJson, writeJson } = require("../data");

const db = require('../database/models')


module.exports = {
  products: (req, res) => {
    db.Product.findAll({
      include: ['images']
    })
    .then(products =>{
      return res.render("products", {
        products,
      });
    })
    .catch(error => console.log(error))
  },
  carrito: (req, res) => {
    return res.render("carrito");
  },
  detalle: (req, res) => {
    const listProduct = readJson("products.json");
    const id = req.params.id;
    const product = listProduct.find((product) => product.id === id);

    return res.render("detalle", {
      product,
    });
  },
  createProduct: require("./products/create"),
  add: require("./products/add"),
  saveProduct: require("./products/saveProduct "),
  editProduct: require("./products/edit"),
  updateProduct: require("./products/update"),
  deleteProduct: require("./products/delete"),
};

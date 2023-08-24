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
  createProduct: (req, res) => {
    return res.render("createProduct");
  },
  saveProduct:(req, res)=>{
   const productsJson = readJson('products.json');
   const newProduct = new Product(req.body);
   productsJson.push(newProduct);

   writeJson(productsJson, 'products.json')


    res.send(productsJson)
  },

  editProduct: require('./products/edit'),
  updateProduct : require('./products/update')
};

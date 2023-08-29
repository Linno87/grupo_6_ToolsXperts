const { existsSync, unlinkSync } = require("fs");
const { readJson, writeJson } = require("../../data");

module.exports = (req, res) => {
  const products = readJson("products.json");
  const id = req.params.id;
  const { name, category, brand, model, price, discount, description } = req.body;

  const productsModify = products.map((product) => {
    if (product.id === id) {
    
      req.file &&
        existsSync(`/public/img/${product.image}`) &&
        unlinkSync(`/public/img/${product.image}`);

      product.name = name.trim();
      product.category = category;
      product.brand = brand;
      product.model = model;
      product.price = +price;
      product.discount = +discount;
      product.description = description.trim();
      product.createdAt = new Date();
      product.image = req.file ? req.file.filename : product.image;

    }

    return product
  });
  writeJson(productsModify, "products.json");

  return res.redirect('/admin')
};

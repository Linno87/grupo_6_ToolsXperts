const { readJson } = require("../data");

module.exports = {
  index: (req, res) => {
    const listProduct = readJson("products.json");

    return res.render("index", {
      listProduct,
    });
  },
  searchProduct: (req, res) => {
    const key = req.query.keywords;
    const listProduct = readJson("products.json");
    const listSearch = listProduct.filter(product=> product.name.toLowerCase().includes(key.toLowerCase()));
    
    
      return res.render("search", {
        listSearch,
        key
      });
  },
  admin : (req,res) => {
        const listProduct = readJson('products.json');

        return res.render('admin', {
          listProduct
        })
    
  },
};

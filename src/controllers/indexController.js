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
    
    if (listSearch.length) {
      return res.render("search", {
        listSearch,
        key
      });
    }else{
    return res.redirect("/");
    }},
  admin : (req,res) => {
        const listProduct = readJson('products.json');

        return res.render('admin', {
          listProduct
        })
    
  },
};

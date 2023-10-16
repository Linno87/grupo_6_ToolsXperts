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
  searchAdmin: (req, res) => {
    const listProducts = readJson("products.json");
    let listProduct = readJson('products.json');

    const key = req.query.marca;
    const key2 = req.query.keywords;
    if(key){
      listProduct = listProducts.filter(product=> product.brand.toLowerCase().includes(key.toLowerCase()));
      if(key2){
        listProduct = listProduct.filter(product=> product.name.toLowerCase().includes(key2.toLowerCase()));
        
      }
      return res.render("admin", {
        listProduct
      });
    }
    
    if(key2){
        listProduct = listProducts.filter(product=> product.name.toLowerCase().includes(key2.toLowerCase()));
        return res.render("admin", {
          listProduct
        });
      }
      return res.render("admin", {
        listProduct
      });
    
  }
    
};

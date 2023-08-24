const { readJson } = require("../data");

module.exports = {
  index: (req, res) => {
    const listProduct = readJson("products.json");

    return res.render("index", {
      listProduct,
    });
  },
  searchProduct: (req, res) => {
    const listProduct = readJson("products.json");
    return res.render("search",{
      listProduct
    })
    /* 
    const listSearch = listProduct.map(product=>
      product.includes(req.query.name)
    );

    if (listSearch) {
      return res.render("search", {
        listSearch
      });
    }
    return res.send(req.params.name); */
  },
};

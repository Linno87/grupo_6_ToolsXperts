const { readJson } = require("../data");

module.exports = {
    index : (req, res) => {
        const listProduct = readJson('products.json');

        return res.render('index',{
          listProduct
        });
      }
}
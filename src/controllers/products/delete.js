const { readJson, writeJson} = require("../../data")
const db = require("../../database/models");

module.exports = (req,res) => {
//JSON
     const products = readJson('products.json');
    const id = req.params.id;

    const productsModify = products.filter(product => product.id !== id);


    writeJson(productsModify, 'products.json')

    return res.redirect('/admin')

    //SQL
    
        db.Product.destroy({
          where: {
            id: req.params.id,
          },
        })
          .then((response) => {
            console.log(response);
            return res.redirect("/products");
          })
          .catch((error) => console.log(error));
}
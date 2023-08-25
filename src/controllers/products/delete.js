const { readJson, writeJson} = require("../../data")

module.exports = (req,res) => {
    const products = readJson('products.json');
    const id = +req.params.id;

    const productsModify = products.filter(product => product.id !== id);


    writeJson(productsModify, 'products.json')

    return res.redirect('/admin')
}
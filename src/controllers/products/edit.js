const {readJson} = require('../../data')

module.exports = (req,res) => {

    const products = readJson('products.json')
    const categorys =readJson('categorys.json')

    const id = req.params.id;
    const product = products.find(product => product.id === +id);

    return res.render('editProduct', {
        ...product,
        categorys : categorys.sort((a, b) =>
        a.category > b.category ? 1 : a.category < b.category ? -1 : 0
      ),
    })
}
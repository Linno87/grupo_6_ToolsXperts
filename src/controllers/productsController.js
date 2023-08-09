module.exports = {
    carrito : (req,res) => {
        return res.render('carrito')
    },
    detalle : (req,res) => {
        return res.render('detalle')
    },
    createProduct : (req,res) => {
        return res.render('createProduct')
    }
}
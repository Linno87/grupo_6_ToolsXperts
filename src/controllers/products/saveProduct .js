const {v4 : uuidv4} = require('uuid');
const { readJson, writeJson } = require("../../data");

module.exports= (req, res)=>{
    /* guarda datos del producto  */
   const {name,category,brand,model,price,discount,description} = req.body;
   const productsJson = readJson('products.json');
   const newProduct = {
    id : uuidv4(),
    name : name.trim(),
    category : category,
    brand : brand.trim(),
    model : model.trim(),
    price : +price,
    discount : +discount,
    description : description.trim(),
    image : req.file ? req.file.filename : null,
    createdAt: new Date(),
}

   productsJson.push(newProduct);
   writeJson(productsJson, 'products.json')
   res.redirect('/admin')
  }

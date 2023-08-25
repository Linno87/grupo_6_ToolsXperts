const {v4 : uuidv4} = require('uuid');
const { readJson, writeJson } = require("../../data");
const validationResult = require("express-validator")

module.exports= (req, res)=>{
 

    /* guarda datos del producto  */
   const {name, category,brand,model,price,discount,description} = req.body;
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
    image : req.files.image ? req.files.image[0].filename : null,
    images: req.files.images ? req.files.images.map((image) => image.filename) : [],


    createdAt: new Date(),
}
console.log(newProduct);

   productsJson.push(newProduct);
   writeJson(productsJson, 'products.json')
   res.redirect('/admin')
  }

const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models")

module.exports = (req, res) => {

  const id = req.params.id;
  const { name, categoryId, brandId, price, discount, description, rubroId, image } = req.body;
  

  db.product.findByPk(id,{
    include:['images']
  })
  .then((product)=>{
 req.file &&
        existsSync(`/public/img/${product.category} /${product.image}`) &&
        unlinkSync(`/public/img/${product.category} /${product.image}`)
  })
 db.Product.update({
    name : name.trim(),
    description :description.trim(),
    price,
    discount,
    brandId,
    categoryId :categoryId,
    rubroId,
    image :req.files.image ? req.files.image[0].filename : product.image,
 },
 {
  where:{
    id,
  }
 }
 ).then(()=>{
  const images= req.file.images.map((file)=>{
    return {
      file: file.filename,
      main: false,
      productId: product.id
    };
  });
  db.bulkCreate(images,{
    
  })
 })

 
      
     

      

      
    }

 


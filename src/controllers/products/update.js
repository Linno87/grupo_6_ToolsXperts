const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models")
const {validationResult} = require("express-validator");
const { error } = require("console");

module.exports = (req, res) => {
  const errors = validationResult(req)

  const id = req.params.id;

  const { name, categoryId, brandId, price, discount, description, rubroId } = req.body;
  
if (errors.isEmpty()) {
  
/* desde la base de datos trae el producto con el método findByPk(busca por id), eh incluye las "images" de la base de datos  */
  db.Product.findByPk(id,{
    include:['images']
  })
.then((product)=>{
 req.files.image &&/*si viene la imagen por req.files.image y es la misma que se encuentra en la carpeta públic, borrala*/
        existsSync(`/public/img/products/${product.image}`) &&
        unlinkSync(`/public/img/products/${product.image}`)
 
 db.Product.update(
  {
    name : name.trim(),
    description :description.trim(),
    price,
    discount,
    brandId,
    categoryId :categoryId,
    rubroId,
    image :req.files.image ? req.files.image[0].filename : product.image,/* actualiza la "imagen" principal */
 },
 {
  where:{
    id,/* actualiza el producto donde el id es coincidente   */
  },
 }
 ).then(()=>{
  if(req.files.images){
    product.images.forEach((image) => {
      existsSync(`./public/imag/products/${image.file}`) &&
      unlinkSync(`./public/imag/products/${image.file}`);
    });
    db.Image.destroy({
      where: {
        productId:id,
      },
    }).then(()=>{
  const images = req.files.images.map((file)=>{ /* crea una constante con el los nombres(array) que llegan del imput(por el name="images") y los mapea, retornando un nuevo array con los datos reemplazados */
    return {
      file: file.filename,
      main: false,
      productId: product.id
    };
  });
  db.Image.bulkCreate(images,{
    validate: true, 
  }).then((response)=>{
  /*   return res.send(product) */
    return res.redirect("/admin")
  });
 });
}else{
/*   return res.send(product)  */
 return res.redirect("/admin");
}
 });
})
.catch((error)=> console.log(error));   

}else{
 const product = db.Product.findByPk(req.params.id,{
    include: ["images"],
  });

  const brands = db.Brand.findAll({
    order: ["name"],
  });

  const categories = db.Category.findAll({
    order: ["name"],
  });

  Promise.all([product, brands, categories])
    .then(([product, brands, categories]) => {
      
      return res.render("editProduct", {
        product,
        brands,
        categories,
        old: req.body,
        errors: errors.mapped()
      });
    })
    .catch((error) => console.log(error));
}
  };

 


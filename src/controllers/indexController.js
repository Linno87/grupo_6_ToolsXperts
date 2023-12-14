
const db = require('../database/models')
const { Op } = require('sequelize');

rangoList = (arr, range)=>{
  const ranges = arr.map(element=>Math.trunc(element/range));
  
  let result = noRpeat(ranges);
  let resultRanges = result.map((element, index)=>element*range)
  return resultRanges
}

noRpeat = (array)=>{
  let result = array.filter((item,index)=>{
    return array.indexOf(item) === index;
  })
  return result;
}

module.exports = {
  index: (req, res) => {
    const products = db.Product.findAll({
      include: ['images'],
      order : ['name']
    } )
    const brands = db.Brand.findAll()
    Promise.all([products,brands])
     
    .then(([products,brands]) =>{
      
      return res.render("index", {
        products,
        brands
      });
    })
    .catch(error => console.log(error))
  },
  searchProduct: (req, res) => {
    const key = req.query.keywords;

    const products = db.Product.findAll({
      where:{
        name : { [Op.like]: `%${key}%`}
      },
      include: ["images","brand","category"],
      order : ["name"]
    })
    
    const brands = db.Brand.findAll({
      order : ["name"]
    })

    const categories = db.Category.findAll({
      order : ["name"]
    })

    Promise.all([products,categories,brands]) 
    .then(([products,categories,brands]) => {
      
     
      const prices = rangoList(products.map(product =>product.price), 10000)
      
      return res.render("products", {
        products,
        brands,
        categories,
        prices,
        findBrand:0,
        findPrice : -1,
        findCategory : 0,
        discount :"",
        key
      });
    })
    .catch(error => console.log(error))
  },

  admin : (req,res) => {
    const products = db.Product.findAll({
      include: ['category','brand','images'],
      order : ['name']
    } )
    const brands = db.Brand.findAll()
    Promise.all([products,brands])
   
    .then(([products,brands]) =>{
      return res.render("admin", {
        products,
        brands
      });
    })
    .catch(error => console.log(error))
  },

  searchAdmin: (req, res) => {
    const key = req.query.brand;
    const key2 = req.query.keywords;
    console.log(key2);
    if(!key && !key2){
      return res.redirect('/admin')
    }
    let products = []
    if(key){
          if(key2){
            products = db.Product.findAll({
              where:{
                brandId : key,
                name : { [Op.like]: `%${key2}%`}
              },
              include: ['images','category','brand']
            })
          }else{
          products = db.Product.findAll({
              where:{
                brandId : key},
                include: ['images','category','brand']
            })
          }
         
      }

      if(!key && key2){
        
        products =  db.Product.findAll({
          where:{
            name : { [Op.like]: `%${key2}%`}
            
          },
          include: ['images','category','brand']
        })
          
      }
    const brands = db.Brand.findAll()
    Promise.all([products,brands])
   
    .then(([products,brands]) =>{
      
      return res.render("admin", {
        products,
        brands
      });
    })
    .catch(error => console.log(error))

  }
    
}

const { readJson } = require("../data");
const db = require('../database/models')
const { Op } = require('sequelize')

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
    db.Product.findAll({
      where:{
        name : { [Op.like]: `%${key}%`}
      },
      include: ['images']
    })
    .then(products =>{
      return res.render("search", {
        products,
        key
      });
    })
    .catch(error => console.log(error))
  },

  admin : (req,res) => {
    const products = db.Product.findAll({
      include: ['images','category','brand'],
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

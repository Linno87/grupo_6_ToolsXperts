const { readJson } = require("../data");
const db = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
  index: (req, res) => {
    const products = db.Product.findAll({
      include: ['image']
    })
    const brands = db.Brand.findAll()
    Promise.all([products,brands])
   
    .then(([products,brands]) =>{
      return res.send(products)
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
      }
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
        db.Product.findAll()
        .then(products =>{
          return res.render('admin', {
            products
          })
        })
        .catch(error => console.log(error))
  },
  searchAdmin: (req, res) => {
    const key = req.query.brand;
    const key2 = req.query.keywords;
    if(key){
      db.Brand.findOne({
        where:{
          name : { [Op.like]: `%${key}%`}
        }
      })
      .then(brand=>{
          if(key2){
            db.Product.findAll({
              where:{
                brandId : brand.id,
                name : { [Op.like]: `%${key2}%`}
              }})
              .then(products =>{
                return res.send(products)
                return res.render("admin", {
                  products
                })
              })
              .catch(error => console.log(error))
          }
          db.Product.findAll({
              where:{
                brandId : brand.id}
          })
          .then(products =>{
              return res.send(products)
              return res.render("admin", {
                products
              })
          })
          .catch(error => console.log(error))
          
      }
      )}

      if(key2){
        db.Product.findAll({
          where:{
            brandId : brand.id,
            name : { [Op.like]: `%${key2}%`}
          }})
          .then(products =>{
            return res.render("admin", {
              products
            })
          })
          .catch(error => console.log(error))
      }
/* 
      listProduct = listProducts.filter(product=> product.brand.toLowerCase().includes(key.toLowerCase()));
      if(key2){
        listProduct = listProduct.filter(product=> product.name.toLowerCase().includes(key2.toLowerCase()));
        
      }
      ;
    }
    
    if(key2){
        listProduct = listProducts.filter(product=> product.name.toLowerCase().includes(key2.toLowerCase()));
        return res.render("admin", {
          listProduct
        });
      } */
      return res.redirect("/admin");
    
  }
    
}

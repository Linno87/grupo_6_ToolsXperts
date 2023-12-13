const db = require("../database/models");

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
  return result
}

module.exports = {
  products: (req, res) => {
    const {brand, category, price, discount}=req.query;

    const products = db.Product.findAll({
      include: ["images","brand","category"],
      order : ["name"]
    });

    const brands = db.Brand.findAll({
      order : ["name"]
    })

    const categories = db.Category.findAll({
      order : ["name"]
    })

    Promise.all([products,categories,brands])
    .then(([products,categories,brands]) => {
        
        let filterArray = products;
        
        filterArray = brand ? filterArray.filter(product => product.brand.id === +brand) : filterArray
        filterArray = category ? filterArray.filter(product => product.category.id === +category) : filterArray
        filterArray = price ? filterArray.filter(product => Math.trunc(product.price/10000) === +Math.trunc(price/10000)) : filterArray
        
        


        const prices = rangoList(products.map(product =>product.price), 10000)
        
        if(discount==="true"){
          filterArray = filterArray.filter(product =>product.discount>0)
        }
        if(discount==="false"){
          filterArray = filterArray.filter(product =>product.discount===0)
        }
       
        
        return res.render("products", {
          products : filterArray,
          brands,
          categories,
          prices,
          old: { 
            brand,
            price,
            category,
            discount
          }
        });
      })
      .catch((error) => console.log(error));
  },

  carrito: (req, res) => {
    return res.render("carrito");
  },

  detalle: (req, res) => {
    const product = db.Product.findByPk(req.params.id, {
      include: ["images","category"],
    })
      
   const productsRel = db.Product.findAll({
         
          include: ['category','brand']
        })
    Promise.all([product,productsRel])
        .then(([product,productsRel]) => {
        
        return res.render("detalle", {
          product,
          productsRel
        });
      })
      .catch((error) => console.log(error));
  },
  createProduct: require("./products/create"),
  add: require("./products/add"),
  saveProduct: require("./products/saveProduct "),
  editProduct: require("./products/edit"),
  updateProduct: require("./products/update"),
  deleteProduct: require("./products/delete"),
};

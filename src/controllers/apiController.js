const db = require("../database/models");
const createError = require('http-errors')

const checkEmail = async (req, res) => {
  try {
    if (!req.query.email) {
      let error = new Error("Falta el parámetro email");
      error.status = 400;
      throw error;
    }

    const user = await db.User.findOne({
      where: {
        email: req.query.email,
      },
    });

    return res.status(200).json({
      ok: true,
      data: user ? true : false,
    });
  } catch (error) {
    return res.status(error.status || 500).json({
      ok: false,
      msg: error.message || "Hubo un error",
    });
  }
};
const addFavorite = async (req, res) => {
  try {
    const productId =
      req.query
        .productId; /* recibo el id del producto por query y lo busco en la base de datos (Favorite), con findOne por coincidencia con el id que llega por query */
   const userId = req.query.userId
        if(!userId){
      throw createError(400, 'Se precisa el id del producto')
    }
    
        if(!req.session.userLogin){
       throw createError(403, 'El usuario no está logueado')
    }
        const favoritos = await db.Favorite.findOne({
      where: {
        productId,
        userId
      },
    });
    if (favoritos) {
      await favoritos.destroy();/* si ya no quiere al producto como favorito("lo destruye", corazón vacio)  */
    } else {
      await db.Favorite.create({
        productId,
        userId: req.session.userLogin.id,/* si lo quiere como favorito("lo crea",corazón relleno) */
      });
    }
    /* devuelvo los favoritos del usuario*/
 const favorites = await db.Favorite.findAll({
    where: {
        userId
      }
 })
 return res.status(200).json({
    ok: true,
    data: favorites
  });
  } catch (error) {
    {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
      });
    }
  }
};

const getAllProducts = async (req,res) => {
    try {
      
      const products = await db.Product.findAll({
        include : ["brand", "category"],
      });
      return res.status(200).json({
        ok : true,
        data : products
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
      });
    }
  }

  const getProductDetails = async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id, {
        include: ["brand", "category"],
      });
  
      if (!product) {
        throw createError(404, 'Producto no encontrado');
      }
  
      return res.status(200).json({
        ok: true,
        data: product,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
      });
    }
  };

  const createProduct = async (req,res) => {
    try {

      const {name, price ,discount, description, brandId, categoryId} = req.body

      const {id} = await db.Product.create({
        name : name.trim(),
        price: price,
        discount: discount || 0,
        description: description.trim(),
        brandId,
        categoryId,
        image : req.files[0].filename,
      });

      const product = await db.Product.findByPk(id, {
        include: ["brand", "category"],
      });

      product.image = `${req.protocol}://${req.get('host')}/img/products/${product.image}`
      
      return res.status(200).json({
        ok : true,
        msg: 'El producto fue creado con éxito',
        data : product
      });
      
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
        data: null
      });
    }
  }

  const updateProduct = async (req, res) => {
    try {
      const { name, discount, price, description, brandId, categoryId } = req.body;
  
      const product = await db.Product.findByPk(req.params.id, {
        include: ["brand", "category","images"],
      });
  
      await db.Product.update(
        {
          name: name.trim(),
          discount: discount || 0,
          price,
          description: description.trim(),
          brandId,
          categoryId,
          image : req.files.length ? req.files[0].filename : product.image
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      if(req.files.length){
         const [imageRow, isCreated] = await db.Image.findOrCreate(
            {
              where : {
                productId : req.params.id,
                main : true
              },
              defaults : {
                productId : req.params.id,
                main : true,
                file : req.files[0].filename,
    
              }
            },
          )
          console.log(imageRow, isCreated);
    
        }

      product.reload();
      product.image = `${req.protocol}://${req.get('host')}/img/products/${product.image}`;
  
  
      return res.status(200).json({
        ok: true,
        msg: "El producto fue actualizado con éxito",
        data: product,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
        data: null,
      });
    }
  };

  const deleteProduct = async (req, res) => {
    try {
      await db.Product.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      return res.status(200).json({
        ok: true,
        msg: "El producto fue eliminado con éxito",
        data: null,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Upss, hubo un error",
        data: null,
      });
    }
  };

  const getAllBrands = async (req,res) => {
    try {
      
      const brands = await db.Brand.findAll();
      return res.status(200).json({
        ok : true,
        data : brands
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
      });
    }
  }

  const getAllCategories = async (req,res) => {
    try {
      
      const categories = await db.Category.findAll();
      return res.status(200).json({
        ok : true,
        data : categories
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Hubo un error",
      });
    }
  }

module.exports = {
  checkEmail,
  addFavorite,
  getAllProducts,
  getProductDetails,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllBrands,
  getAllCategories
};

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
    
        if(!req.session.userLoguin){
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
      await db.Favorites.create({
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
module.exports = {
  checkEmail,
  addFavorite,
};

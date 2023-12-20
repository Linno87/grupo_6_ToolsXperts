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

module.exports = {
  checkEmail,
 
  getAllProducts
};

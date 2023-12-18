const db = require("../database/models");
const sendErrorResponse = require("../helpers/sendErrorResponse");
const sendSuccessResponse = require("../helpers/sendSuccessResponse");
const addOrRemoveToFavorite = require("../services/favoriteService");
const getAllProducts = require("../services/productsService");

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
  const { id } = req.session.userLogin;
  const { productId } = req.body;
  const { isRemove } = await addOrRemoveToFavorite({
    userId: id,
    productId,
  });


  sendSuccessResponse(res, { data: { isRemove } });
 } catch (error) {
  sendErrorResponse(res, error);
 }

};

const list = async (req,res) => {
  try {
    const { withPagination = "true",page = 1, limit = 6 } = req.query;  
    const { count, products, pages } = await getAllProducts(req, {
      withPagination,
      page,
      limit: +limit,
    });

    const pagina = Object.keys(req.query).join(" ");
    const currentPage = pagina.charAt(pagina.length - 1) 

    let data = {
      count,
      products,
    }

    if(withPagination === "true"){
      data = {
        pages,
        page,
        nextPage: +currentPage < pages ? `http://localhost:3000/apis/products?page${+currentPage + 1}`: "",
        prevPage: +currentPage == 0 || +currentPage == 1 ? "" : `http://localhost:3000/apis/products?page${+currentPage - 1}`,
        ...data,
        

      
      }
    }
           
    
    return res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      ok: false,
      error: {
        status: error.status || 500,
        message: error.message || "Upss, hubo un error",
      },
    });
  }
}



module.exports = {
  checkEmail,
  addFavorite,
  list
};

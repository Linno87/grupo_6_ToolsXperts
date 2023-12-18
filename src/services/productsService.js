const { Op } = require("sequelize");
const db = require("../database/models"); 

const getAllProducts = async (
    req,
    { withPagination = "false", page = 1, limit = 6 }
  ) => {
    try {
    let options = {
       
    attributes: {
      exclude: ["updatedAt","createdAt"],
    },
    }
    if (withPagination === "true") {
        options = {
          ...options,
          page,
          paginate: limit,
        };
  
        const { docs, pages, total } = await db.Product.paginate(options);
  
        return {
          products: docs,
          pages,
          count: total,
        };
      }
  
      const { count, rows: products } = await db.Product.findAndCountAll(options);
      return {
        count,
        products,
      };          



    } catch (error) {
        console.log(error);
    }

  }
module.exports = getAllProducts
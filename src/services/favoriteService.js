const { Op } = require("sequelize");
const db = require("../database/models");


const addOrRemoveToFavorite= async ({ userId, productId }) => {
    if (!userId || !productId) {
      throw {
        status: 400,
        message: "Debes ingresar el userId y el productId",
      };
    }

    const [favorite, isCreatedFavorite] = await db.Favorite.findOrCreate({
      where: { [Op.and]: [{ userId }, { productId }] },
      defaults: {
        userId,
        productId,
      },
    });

    if (!isCreatedFavorite) {
      await favorite.destroy();
    }
    return { isRemove: !isCreatedFavorite };
  }

  module.exports = {
    addOrRemoveToFavorite
  }
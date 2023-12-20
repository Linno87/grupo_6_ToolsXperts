const db = require('../database/models')
const { Op } = require("sequelize");
module.exports = {
    getFavoritesUser:({userId})=>{
        if(!userId){
            throw {
                status: 400, 
                message:'Debes loguearte'
            }
        }
        return db.User.findByPk(userId,{
           include: [{
            association:'favoriteProduct'
           }] 
        })

    },
    addOrRemoveToFavorite : async ({userId,productId})=>{
        if(!userId || !productId){
            throw {
                status:400,
                message:'El necesario enviar el userId y el courseId'
            }};
            /* si lo encuetra te lo devuelve y si no lo encuentra te lo crea */
            const config = {
                where:{
                 /* Op.and : te trae un array */ 
                   [Op.and]: [
                        {
                            userId
                        },
                        {
                            productId
                        }
                    ]
                },
                defaults:{userId,productId}
              

            }
          const [favorite, isCreated] = await db.Favorite.findOrCreate(config);
          if(!isCreated){
           await favorite.destroy()
          }
        }
    }

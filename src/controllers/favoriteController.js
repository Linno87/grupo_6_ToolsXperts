const sendErrorResponse = require('../helper/sendErrorsResponse')
const sendSuccessResponse = require('../helper/sendSuccessResponse')
const {getFavoritesUser, addOrRemoveToFavorite}= require('../services/favoriteService')
module.exports= {
    getFavorite: async(req,res)=>{
    try {
     const {id}= req.session.userLogin; 
      const user = await getFavoritesUser({userId : id});
      sendSuccessResponse(res,{ data: user.favoriteProduct})/* trae los datos de un usuario y sus favoritos */
    } catch (error) {
          sendErrorResponse(res,error)
    } 
    },
    toggleFavorite: async (req,res)=>{
        try {
            const {id} = req.session.userLogin;  
            const {productId} = req.body;
            addOrRemoveToFavorite({userId : id, productId})
            sendSuccessResponse(res)
        } catch (error) {
            sendErrorResponse(res,error)
        }
    }
 
}
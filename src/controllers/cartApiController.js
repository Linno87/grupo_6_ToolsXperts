const db = require('../database/models');
const sendErrorsResponse = require('../helper/sendErrorsResponse');
const sendSuccessResponse = require('../helper/sendSuccessResponse');

const { getOrder, createProductInCart, removeProductFrontCart, clearAllProductFromCart, modifyStatusFromOrder } = require('../services/cartServices');
/* me busca el usuario que viene por sesión o me lo crea por defecto usando el id de la sesión. El [Op.and]: permite buscar en la base de datos mediante where, donde se puede especificar lo que uno busca*/
module.exports = {
    getOrderPending:async (req,res)=>{
        try {
        const {id}= req.session.userLogin;
        const order = await getOrder({userId:id});
        sendSuccessResponse(res,{data:order});
        } catch (error) {
          sendErrorsResponse(res, error)
        }
        
    },
    addProduct : async (req,res)=>{
        try {
        const {productId} = req.body;
        const {id} = req.session.userLogin;
      await  createProductInCart({userId:id,productId})
        sendSuccessResponse(res);
    } catch (error) {
            sendErrorsResponse(res, error)
        }
    },
    removeProduct : async (req,res)=>{
        try {
            const {productId} = req.body;
            const {id} = req.session.userLogin;
           
          await  removeProductFrontCart({userId:id , productId})
            sendSuccessResponse(res);
        } catch (error) {
                sendErrorsResponse(res, error)
            }
           
        },
    
    moreQuantity : async (req,res)=>{
        try {
            const {productId} = req.body;
            const {id} = req.session.userLogin;
           
          await moreOrLessQuantityFromProduct({userId:id , productId})
            sendSuccessResponse(res);
        } catch (error) {
                sendErrorsResponse(res, error)
            }
           
        },

    
    lessQuantity:async (req,res)=>{
        try {
            const {productId} = req.body;
            const {id} = req.session.userLogin;
            await moreOrLessQuantityFromProduct({userId:id , productId, action: "less"})
            sendSuccessResponse(res);
        } catch (error) {
                sendErrorsResponse(res, error)
            }

    },
    cleanCart:async (req,res)=>{
try {
    const {id} = req.session.userLogin;
 await clearAllProductFromCart({userId:id})
 sendSuccessResponse(res);
} catch (error) {
    sendErrorsResponse(res, error)
}
},
    statusOrder:async (req,res)=>{
    try {
        const {status} = req.body
        const {id} = req.session.userLogin; 
         await modifyStatusFromOrder({userId:id, status})
         sendSuccessResponse(res);
           } catch (error) {
            sendErrorsResponse(res, error)
           }

    },
}
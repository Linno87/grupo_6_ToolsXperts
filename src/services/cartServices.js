const { Op } = require("sequelize");
const db = require("../database/models");

/* mtd es una varible que se inicializa como un objeto vacio y que puede contener funciones y propiedades reutilizables */
module.exports = mtd = {
  getOrder: async ({ userId }) => {
    if (!userId) {
      throw {
        ok: false,
        message: "Debes ingresar el userId ",
      };
    } /* que devuelva el userId si fue creado o la orden en sí */
    const [order] = await db.Order.findOrCreate({
      where: {
        [Op.and]: [
          {
            userId,
          },
          {
            status: "pending",
          },
        ],
      },
      defaults: {
        userId,
      },
      include: [
        {
          association: "cart",
          through:{
            attributes:["quantity"]
          },
          include: ["images"],
        },
      ],
    });
    return order;
  },
  /* crea un nuevo producto en el carrito */
  createProductInCart: async ({ userId, productId }) => {
    if (!userId || !productId) {
      throw {
        ok: false,
        message: "Debes ingresar el userId y producId",
      };
    }
    /* de la const order, obtengo la orden pendiente que corresponde a userId  */
    const order = await mtd.getOrder({ userId });

    await mtd.getCart({orderId: order.id, productId})

    const orderReload = await order.reload({include:{all: true}})
    order.total=  mtd.calcTotal(orderReload)
    await order.save();
  },

  removeProductFrontCart: async ({userId, productId})=>{
    if (!userId || !productId) {
        throw {
          ok: false,
          message: "Debes ingresar el userId y producId",
        };
      }
      const order = await mtd.getOrder({ userId });
    return  mtd.removeCart({orderId: order.id, productId})
  },
  moreOrLessQuantityFromProduct: async({userId, productId, action= "more"})=>{
    if (!userId || !productId) {
        throw {
          ok: false,
          message: "Debes ingresar el userId y producId",
        };
      }
      const order = await mtd.getOrder({ userId });
      const [, isCreated] = await  mtd.getCart({orderId: order.id, productId});
      if(!isCreated){
        if(action === "more"){
            cart.quantity++;/* aumenta la cantidad de 1 */
        }else{
            cart.quantity--
        }
      
        await cart.save()  /*si no fue creado, quiero que me guarde la cantidad */
      }
      
      
      const orderReload = await order.reload({include:{all: true}})
      order.total=  mtd.calcTotal(orderReload)
      await order.save();
      
   
  },
  clearAllProductFromCart : async({userId})=>{
    if (!userId ) {
        throw {
          ok: false,
          message: "Debes ingresar el userId ",
        };
      }
      const order = await mtd.getOrder({userId})
    return   db.Cart.destroy({
        where:{orderId: order.id}
      })
  },
  modifyStatusFromOrder: async({userId, status})=>{
    if (!userId || !status) {
        throw {
          ok: false,
          message: "Debes ingresar el userId y status",
        };
      }
      const order = await mtd.getOrder({userId});
      order.status = status
      return order.save()
  },
  removeCart:({orderId, productId})=>{
    db.Cart.destroy({
        where : {
            [Op.and] : [
                {
                    orderId,
                },
                {
                    productId,
                }
            ]
        }
     });/* eliminamos el registro de 1 carrito, para ello debe recibir: orderId, productId*/

  },
  getCart :({productId, orderId})=>{
return db.Cart.findOrCreate({//me devuelve un array con el carrito y si fue creado
    where :{
    [Op.and]:[
        {
            orderId
        },
        {
          productId
        },
    ],
},
defaults:{
    orderId,
    productId,
}
})
  },
  calcTotal: ({cart})=>{
  return  cart.reduce((acum,{ product, Cart, discount})=>{
    const priceCale = discount ? price - (price * discount / 100): price
        acum += priceCale * Cart.quantity;
        return acum
      }, 0)
  }
};


const db = require("../../database/models")


module.exports = (req,res)=>{
           
    db.User.findByPk(req.session.userLogin.id,{
        attributes:["first_name", "last_name", "email", "about","avatar", "date"],
        include: [{
            association: 'address',
            attributes: ['address','city','province']
    }],
    })
    .then(user => {
       /*  res.send(user) */
            res.render('userProfile',{
            ...user.dataValues
    })   
    }).catch(error => console.log(error))
  
   
 
    
    
}
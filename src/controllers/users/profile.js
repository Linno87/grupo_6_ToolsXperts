
const db = require("../../database/models")


module.exports = (req,res)=>{
           
    db.User.findByPk(req.session.userLogin.id,{
        attributes:["id","first_name", "last_name", "email", "about","avatar", "date","gender"],
        include: [{
            association: 'address',
            attributes: ['address','city','province']
    }],
    })
    .then(user => {
       /*  res.send(user) */
       const date = new Date(user.date).toISOString().split('T')[0];
          return res.render('userProfile',{
            ...user.dataValues,
            date 
    })   
    }).catch(error => console.log(error))
  
   
 
    
    
}
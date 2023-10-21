
const db = require('../../database/models')

const {validationResult} = require("express-validator")

module.exports=(req,res)=>{
const errors = validationResult(req)

if(errors.isEmpty()){
/*  Busca el usuario en la base de datos segun email e inicia la session */
db.User.findOne({
    where: {
        email : req.body.email
    }
    
})
.then(user => {
    
    req.session.userLogin = {
        id : user.id,
        first_name : user.first_name,
        roleId: user.roleId
    }
    req.body.remember != undefined && res.cookie('userRemember',req.session.userLogin,{maxAge: 1000 * 60
    }) 
    
    res.redirect('/')
})
.catch(error =>{
   console.log(error);
})

/* Si el req.body.remember (no esta indefinido) o sea que trae algo
 entonces creame una cookie con el nombre userRemember la cual va a durar 1 minuto*/

}else{
    /* devuelve al login los errores con el método mapped/ el objeto old devuelve los datos ingresados que no tuvieron errores/se termina de configurar en la vista de loguin  */
   /* res.send(errors.mapped()) */
      res.render('login',{
        errors: errors.mapped(),
        old: req.body
    })
}
}
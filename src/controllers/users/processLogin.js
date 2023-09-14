const { readJson, writeJson } = require("../../data");
const {validationResult} = require("express-validator")

module.exports=(req,res)=>{
const errors = validationResult(req)

if(errors.isEmpty()){
const users = readJson('users.json')

const searchUser = users.find(user => user.email == req.body.email)

const {id,firstName,category} = searchUser

req.session.userLogin = {
    id,
    firstName,
    category
}
/* Si el req.body.remember (no esta indefinido) o sea que trae algo
 entonces creame una cookie con el nombre userRemember la cual va a durar 1 minuto*/
req.body.remember != undefined && res.cookie('userRemember',req.session.userLogin,{maxAge: 1000 * 60
}) 

res.redirect('/')
}else{
    /* devuelve al login los errores con el método mapped/ el objeto old devuelve los datos ingresados que no tuvieron errores/se termina de configurar en la vista de loguin  */
   /* res.send(errors.mapped()) */
      res.render('login',{
        errors: errors.mapped(),
        old: req.body
    })
}
}
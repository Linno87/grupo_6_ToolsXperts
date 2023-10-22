const { existsSync, unlinkSync } = require("fs");
const {validationResult} = require('express-validator');
const db = require('../../database/models')

module.exports = (req, res) => {
  const errors = validationResult(req);
   const {
    first_name,
    last_name,
  
    address,
    city,
    province,
    date,
    about,
    avatar,
  } = req.body;

  if(errors.isEmpty()){

 db.User.findByPk(req.session.userLogin.id)
.then((user)=>{
  req.file.avatar &&
  existsSync(`./public/img/users/${user.avatar}`) && (user.profile_image!=='defaultUserImg.jpg') &&
  unlinkSync(`./public/img/users/${user.avatar}`);

  db.User.update({
    first_name,
    last_name,
    address,
    city,
    province,
    date,
    about,
    avatar: req.file.avatar ? req.file.avatar.filename : user.avatar
  },
  {
      where: {
    id: req.session.userLogin.id
  }
  }

)
return  res.send(user)

})



}else{
 const user = db.User.findByPk(req.session.userLogin.id)
 .then(user =>{
   return res.render('userProfile',{
    ...user.dataValues,
    old: req.body,
    errors: errors.mapped() 
   }) 
 }).catch(error => console.log(error))
 
}


}
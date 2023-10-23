

const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const db = require('../../database/models')

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    
    return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
  
  const {first_name,
  last_name,
  email,
  password,
  about,
  gender,
  date} = req.body

  db.User.create({
    first_name,
    last_name,
    email,
    password : hashSync(password,8),
    about,
    gender,
    date,
    roleId : 2,
    avatar : "defaultUserImg.jpg"

  })
  .then(user =>{
    db.Address.create({
      userId : user.id
    })

    .then(() => res.redirect("/users/login"))
    
    
  })
  .catch(error => console.log(error))
};

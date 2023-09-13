const { existsSync, unlinkSync } = require("fs");
const { readJson, writeJson } = require("../../data");
const {validationResult} = require('express-validator');

module.exports = (req, res) => {
    const errors = validationResult(req);
    
  const users = readJson("users.json");
  
  const {
    firstName,
    lastName,
    email,
    direction,
    profile_image,
    description,
    preference
  } = req.body;
  

  const usersModify = users.map((user) => {
    if (user.id === req.session.userLogin.id) {
      
      req.file &&
        existsSync(`/public/img/users/${user.profile_image}`) &&
        unlinkSync(`/public/img/users/${user.profile_image}`);
        
        user.firstName = firstName?.trim();
        user.lastName = lastName?.trim();
        user.email = email;
        user.profile_image = req.file ? req.file.filename : user.profile_image;
        user.direction = direction;
        user.preference = preference;
        user.description = description?.trim();
      
    }

    return  user;
  });
  
  writeJson(usersModify, "users.json");
  
  res.redirect('/users/profile')


}
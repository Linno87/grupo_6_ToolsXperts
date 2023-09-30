const { v4: uuidv4 } = require("uuid");
const { readJson, writeJson} = require("../../data");
const User = require('../../data/User')
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    
    return res.render("register", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
 

  const usersJson = readJson("users.json");
  const profile_image = req.file ? req.file.filename : "defaultUserImg.jpg";
  const newUser = new User({...req.body, profile_image})

  usersJson.push(newUser);
  
  writeJson(usersJson, "users.json");

  res.redirect("/users/login");
};

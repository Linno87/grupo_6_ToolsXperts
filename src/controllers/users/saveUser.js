const { v4: uuidv4 } = require("uuid");
const { readJson, writeJson } = require("../../data");
const validationResult = require("express-validator");

module.exports = (req, res) => {
  const {
    firstName,
    lastName,
    date,
    email,
    password,
    password_confirmation,
    categoryUser,
  } = req.body;

  const usersJson = readJson("users.json");

  const newUser = {
    id: uuidv4(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    date: date,
    email: email.trim(),
    password: password,
    categoryUser: categoryUser,
    profile_image: req.file ? req.file.filename : null,
  };

  usersJson.push(newUser);
  writeJson(usersJson, "users.json");

  res.redirect("/users");
};

const { v4: uuidv4 } = require("uuid");

const User = ({ firstName, lastName, email, password, categoryUser, profile_image }) => {
  this.id = uuidv4();
  this.firstName = firstName.trim();
  this.lastName = lastName.trim();
  this.email = email.trim();
  this.password = password.trim();
  this.categoryUser = categoryUser;
  this.profile_image = profile_image;
};

module.exports = User;

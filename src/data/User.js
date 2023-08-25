const { v4: uuidv4 } = require("uuid");

const User = ({ firstName, lastName, email, password, category, image }) => {
  this.id = uuidv4();
  this.firstName = firstName.trim();
  this.lastName = lastName.trim();
  this.email = email.trim();
  this.password = password.trim();
  this.category = category;
  this.image = image;
};

module.exports = User;

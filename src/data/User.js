const { v4: uuidv4 } = require("uuid");

const User = ({ firstName, lastName, email, password, direction, preference, description, categoryUser, profile_image }) => {
  this.id = uuidv4();
  this.firstName = firstName.trim();
  this.lastName = lastName.trim();
  this.email = email.trim();
  this.password = password.trim();
  this.categoryUser = categoryUser;
  this.profile_image = profile_image;
  this.direction = direction.trim();
  this.preference = preference;
  this.desciption = description.trim();
};

module.exports = User;

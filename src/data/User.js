const { v4: uuidv4 } = require("uuid");
const { hashSync } = require("bcryptjs");

const User = ({
  firstName,
  lastName,
  email,
  password,
  categoryUser,
  profile_image,
}) => {
  this.id = uuidv4();
  this.firstName = firstName.trim();
  this.lastName = lastName.trim();
  this.email = email.trim();
  this.password = password.hashSync(password, 12);
  this.categoryUser = categoryUser;
  this.profile_image = profile_image;
};

module.exports = User;

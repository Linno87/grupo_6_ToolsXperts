const { v4: uuidv4 } = require("uuid");
const { hashSync } = require("bcryptjs");

class User {
  constructor({
    firstName,
    lastName,
    email,
    password,
    categoryUser,
    profile_image,
  }) {
    this.id = uuidv4();
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email = email.trim();
    this.password = hashSync(password, 8); 
    this.categoryUser = categoryUser;
    this.profile_image = profile_image;
  }
}

module.exports = User;

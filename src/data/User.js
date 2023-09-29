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
    direction, 
    preference, 
    description, 
    listSearch,
  }) {
    this.id = uuidv4();
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
    this.email = email.trim();
    this.password = hashSync(password, 8); 
    this.categoryUser = categoryUser;
    this.profile_image = profile_image;
    this.direction = direction.trim();
    this.preference = preference;
    this.desciption = description.trim();
    this.listSearch = listSearch;
  }
}

module.exports = User;

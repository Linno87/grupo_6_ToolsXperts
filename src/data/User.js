const { v4: uuidv4 } = require("uuid");
const { hashSync } = require("bcryptjs");

class User {
  constructor({
    firstName,
    lastName,
    email,
    date,
    password,
    categoryUser,
    profile_image,
    direction, 
    preference, 
    description, 
    listSearch,
  }) {
    this.id = uuidv4();
    this.firstName = firstName?.trim();
    this.lastName = lastName?.trim();
    this.email = email?.trim();
    this.date = date;
    this.password = hashSync(password, 8); 
    this.categoryUser = "user";
    this.profile_image = profile_image;
    this.direction = direction ? direction?.trim() : null;
    this.preference = preference ? preference : null;
    this.description = description ? description?.trim() : null;
    this.listSearch = listSearch ? listSearch : null;
  }
}

module.exports = User;

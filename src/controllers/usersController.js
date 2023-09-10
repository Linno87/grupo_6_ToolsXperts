const { readJson, writeJson } = require("../data");

module.exports = {
  register: require("./users/register"),
  login: require("./users/login"),
  users: require("./users/users"),
  saveUser: require("./users/saveUser"),
};

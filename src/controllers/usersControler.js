const { readJson } = require("../data");

module.exports = {
  register: (req, res) => {
    return res.render("register");
  },
  login: (req, res) => {
    return res.render("login");
  },
  users: (req, res) => {

    const listUser = readJson("users.json");

    return res.render("users", {
      listUser,
    });
  },
  /*   profile: (req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === +id);
    return res.render("users", {
      users,
    });
  } */
};

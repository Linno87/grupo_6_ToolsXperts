const { readJson } = require("../../data");

module.exports = (req, res) => {
  const listUser = readJson("users.json");
  const id = req.params.id;
  const users = listUser.find((user) => user.id === id);
  return res.render("users", {
    listUser,
    users,
  });
};

const db = require("../../database/models")

module.exports = async (req,res) => {
  try {
    await db.User.update({
      avatar: req.file.filename,
    },
    {
      where : {
        id : req.params.id
      }
    })
    return res.redirect("/users/profile")
  } catch (error) {
    console.log(error);
  }
};
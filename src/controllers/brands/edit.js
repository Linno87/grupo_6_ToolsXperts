const db = require("../../database/models");

module.exports = async (req, res) => {
   const brand = await db.Brand.findByPk(req.params.id);
   res.render("editBrand",{
      brand,
      old: req.body
   });
};

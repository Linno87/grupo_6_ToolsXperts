const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const id = req.params.id;

  const brand = await db.Brand.findByPk(id);

  if (!brand) {
    return res.status(404).send("Marca no encontrada");
  }

  existsSync(`./public/img/brands/${brand.image}`) &&
    unlinkSync(`./public/img/brands/${brand.image}`);

  
  await brand.destroy();

  res.redirect("/admin");
};

const { existsSync, unlinkSync } = require("fs");
const db = require("../../database/models");
const { validationResult } = require("express-validator");

module.exports = async (req, res) => {
  const errors = validationResult(req);

  const id = req.params.id;
  const { name } = req.body;

  if (errors.isEmpty()) {
    const brand = await db.Brand.findByPk(id);

    if (!brand) {
      return res.status(404).send("Marca no encontrada");
    }

    req.files.image &&
      existsSync(`./public/img/brands/${brand.image}`) &&
      unlinkSync(`./public/img/brands/${brand.image}`);

    await brand.update({
      name: name.trim(),
      image: req.files.image ? req.files.image[0].filename : brand.image,
    });

    res.redirect("/admin");
  } else {
    const brand = await db.Brand.findByPk(req.params.id);

    res.render("editBrand", {
      brand,
      old: req.body,
      errors: errors.mapped(),
    });
  }
};

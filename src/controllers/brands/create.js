const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name} = req.body;

    db.Brand.create({
      name: name?.trim(),
      image : req.files.image ? req.files.image[0].filename : null,
    })
      .then((brand) => {
        if (req.files.images) {
          const images = req.files.images.map((file) => {
            return {
              file: file.filename,
              main: false,
              brandId: brand.id,
            };
          });

          db.Image.bulkCreate(images, {
            validate: true,
          }).then((response) => {
            return res.redirect("/admin");
          });
        } else {
          return res.redirect("/admin");
        }
      })
      .catch((error) => console.log(error));
  } else {
    if (req.files.length) {
      req.files.forEach((file) => {
        existsSync("./public/img/brands" + file.filename) &&
          unlinkSync("./public/img/brands" + file.filename);
      });
    }
  }
};

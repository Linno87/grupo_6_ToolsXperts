const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img/brands/");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_brands_${path.extname(file.originalname)}`); 
  },
});

const uploadBrand = multer({ storage });
module.exports = uploadBrand;
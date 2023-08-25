const multer = require("multer");
const path = require("path");
const product = require('Product')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img/" + req.body.category);
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });
module.exports = upload;

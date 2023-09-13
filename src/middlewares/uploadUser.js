const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/img/users/");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_users_${path.extname(file.originalname)}`); 
  },
});

const uploadUser = multer({ storage });
module.exports = uploadUser;

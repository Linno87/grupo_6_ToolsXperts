const express = require("express");
const {
  carrito,
  detalle,
  add,
  createProduct,
  products,
  editProduct,
  updateProduct,
  deleteProduct,
  saveProduct,
} = require("../controllers/productsController");
const upload = require("../middlewares/upload");
const productAddValidator = require("../validations/productAddValidator");
const router = express.Router();

/* /products */
router.get("/", products);
router.get("/carrito", carrito);

router.get("/createProduct", add);
router.post(
  "/createProduct",
  upload.fields([
    {
      name: "image",
    },
    {
      name: "images",
    },
  ]),
  productAddValidator,
  saveProduct
);

/* router.get("/createProduct", createProduct);
router.post(
  "/createProduct",
  upload.fields([{ name: "image" }, { name: "images" }]),
  saveProduct
); */

router.get("/editProduct/:id", editProduct);
router.put("/updateProduct/:id", upload.single("image"), updateProduct);
router.get("/editProduct", editProduct);
router.get("/detalle/:id", detalle);
router.delete("/deleteProduct/:id", deleteProduct);

module.exports = router;

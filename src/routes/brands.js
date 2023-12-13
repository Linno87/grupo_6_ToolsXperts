const express = require("express");
const { create, add, editBrand, updateBrand, deleteBrand, } = require("../controllers/brandController");
const uploadBrand = require("../middlewares/uploadBrand");
const _delete = require("../controllers/brands/delete");
const router = express.Router();


/* /brands */
router.get("/createBrand",add)
      .post("/createBrand", uploadBrand.fields([{name: "image",},{name: "images",},]),create)
      .get("/editBrand/:id",editBrand)
      .put("/editBrand/:id",uploadBrand.fields([{name: "image",},{name: "images",},]),updateBrand)
      .delete("/deleteBrand/:id",deleteBrand)

module.exports = router;

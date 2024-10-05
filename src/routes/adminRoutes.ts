import express from "express";

import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController";
const router = express.Router();

router.route("/").post(createProduct);
router
  .route("/:id")
  .delete(deleteProduct)
  .put(updateProduct);

export default router;

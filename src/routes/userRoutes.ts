import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController";

import {getReviewsByProductId,getReviewById,deleteReview,createReview,updateReview} from "../controllers/reviewController";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").get(getReviewsByProductId);
// @ts-ignore
router.route("/:id/reviews").post(createReview);
router.route("/reviews/:id").get(getReviewById).delete(deleteReview).put(updateReview);


export default router;

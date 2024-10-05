import mongoose , { Schema } from 'mongoose';
import { IReview } from '../interfaces/ReviewModel';
import ObjectId = module
import * as module from "node:module";

const reviewSchema = new Schema({
    user: { type: String, required: true,ref:'User' },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    product: { type: ObjectId, required: true,ref:'Product' },

}, { timestamps: true });

const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;

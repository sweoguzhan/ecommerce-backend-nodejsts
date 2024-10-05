import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
    user: mongoose.Types.ObjectId;
    rating: number;
    comment: string;
    product: mongoose.Types.ObjectId;
}

const reviewSchema = new Schema<IReview>({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
}, { timestamps: true });

const Review = mongoose.model<IReview>('Review', reviewSchema);
export default Review;

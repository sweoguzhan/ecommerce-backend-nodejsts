// src/services/reviewService.ts
import Review from '../models/Review';
import { IReview } from '../interfaces/ReviewModel';



export const getReviews = async () => {
    return Review.find();
};

export const getReviewById = async (id: string) => {
    const review = await Review.findById(id);
    if (!review) {
        throw new Error('Review not found');
    }
    return review;
};

export const deleteReview = async (id: string) => {
    const review = await Review.findById(id);
    if (!review) {
        throw new Error('Review not found');
    }
    await review.deleteOne();
    return { message: 'Review removed' };
};

export const createReview = async (userId: string, productId: string, reviewData: Partial<IReview>) => {
    const review = new Review({
        ...reviewData,
        user: userId,
        product: productId,
    });
    return await review.save();
};

export const updateReview = async (id: string, updateData: Partial<IReview>) => {
    const review = await Review.findById(id);
    if (!review) {
        throw new Error('Review not found');
    }

    review.rating = updateData.rating || review.rating;
    review.comment = updateData.comment || review.comment;

    return await review.save();
};

export const getReviewsByProductId = async (productId: string) => {
    return Review.find({product: productId});
};

export const getReviewsByUserId = async (userId: string) => {
    return Review.find({user: userId});
};

export const getReviewsByProductIdAndUserId = async (productId: string, userId: string) => {
    return Review.find({product: productId, user: userId});
};

export const getReviewsByRating = async (rating: number) => {
    return Review.find({rating});
};

export const getReviewsByRatingAndProductId = async (rating: number, productId: string) => {
    return Review.find({rating, product: productId});
};

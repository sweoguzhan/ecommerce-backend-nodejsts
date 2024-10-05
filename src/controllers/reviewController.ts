// src/controllers/reviewController.ts
import { Request, Response } from 'express';
import * as reviewService from '../services/reviewService';

export const getReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviews();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getReviewById = async (req: Request, res: Response) => {
    try {
        const review = await reviewService.getReviewById(req.params.id);
        res.json(review);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const deleteReview = async (req: Request, res: Response) => {
    try {
        const message = await reviewService.deleteReview(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createReview = async (req: Request, res: Response) => {
    try {
        const createdReview = await reviewService.createReview(req.user._id, req.params.id, req.body);
        res.status(201).json(createdReview);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updateReview = async (req: Request, res: Response) => {
    try {
        const updatedReview = await reviewService.updateReview(req.params.id, req.body);
        res.json(updatedReview);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const getReviewsByProductId = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviewsByProductId(req.params.id);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getReviewsByUserId = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviewsByUserId(req.params.id);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getReviewsByProductIdAndUserId = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviewsByProductIdAndUserId(req.params.productId, req.params.userId);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getReviewsByRating = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviewsByRating(Number(req.params.rating));
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getReviewsByRatingAndProductId = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewService.getReviewsByRatingAndProductId(Number(req.params.rating), req.params.productId);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

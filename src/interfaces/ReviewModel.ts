export interface IReview {
    _id: string;
    rating: number;
    comment: string;
    user: object;
    product: string;
    createdAt: string;
    updatedAt: string;
}

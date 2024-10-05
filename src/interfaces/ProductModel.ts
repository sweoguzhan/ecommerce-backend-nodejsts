import {Document} from "mongoose";

export interface IProduct extends Document {
    _id: string;
    name: string;
    price: number;
    description: string;
    countInStock: number;
    imageUrl: string;
    category: string;
    rating: number;
    numReviews: number;
}

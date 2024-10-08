import mongoose , { Schema } from 'mongoose';
import { IProduct } from '../interfaces/ProductModel';

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
}, { timestamps: true });

const Product = mongoose.model<IProduct>('Product', productSchema);
export default Product;


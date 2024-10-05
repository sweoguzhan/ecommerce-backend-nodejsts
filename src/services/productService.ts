// src/services/productService.ts
import Product from '../models/Product';
import { IProduct } from '../interfaces/ProductModel';

export const getProducts = async () => {
    return await Product.find({});
};

export const getProductById = async (id: string) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

export const deleteProduct = async (id: string) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    await product.deleteOne();
    return { message: 'Product removed' };
};

export const createProduct = async (userId: string) => {
    const product = new Product({
        name: 'Sample name',
        price: 0,
        user: userId,
        imageUrl: '/images/sample.jpg',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    });
    return await product.save();
};

export const updateProduct = async (id: string, updateData: Partial<IProduct>) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }

    product.name = updateData.name || product.name;
    product.price = updateData.price || product.price;
    product.description = updateData.description || product.description;
    product.imageUrl = updateData.imageUrl || product.imageUrl;
    product.category = updateData.category || product.category;
    product.countInStock = updateData.countInStock || product.countInStock;

    return await product.save();
};

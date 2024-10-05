import { Request, Response } from 'express';
import productService from '../services/productService';
import paymentService from '../services/paymentService';
import { IUserRequest } from '../interfaces/UserRequest';

export const createPaymentRequest = async (req: IUserRequest, res: Response) => {
    try {
        const { productId } = req.body; // Assuming the product ID comes in the request body

        const product = await productService.getProductById(productId);

        if (!product || product.countInStock === 0) {
            return res.status(400).json({ message: 'Product not available or out of stock' });
        }

        const paymentData = {
            user: req.user,
            name: req.user?.name,
            email: req.user?.email,
            productTitle: product.name,
            productPrice: product.price,
        };

        const paymentResponse = await paymentService.processPayment(paymentData);

        res.status(200).json(paymentResponse);
    } catch (error) {
        res.status(500).json({ message: 'Payment failed', error });
    }
};

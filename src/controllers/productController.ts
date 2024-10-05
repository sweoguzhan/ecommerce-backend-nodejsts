// src/controllers/productController.ts
import { Request, Response } from 'express';
import * as productService from '../services/productService';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const message = await productService.deleteProduct(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const createdProduct = await productService.createProduct(req.user._id);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updatedProduct = await productService.updateProduct(req.params.id, req.body);
        res.json(updatedProduct);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

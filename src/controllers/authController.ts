// src/controllers/authController.ts
import { Request, Response } from 'express';
import * as authService from '../services/authService';
import { IUserRequest } from '../interfaces/UserRequest';

export const registerUser = async (req: Request<{}, {}, IUserRequest>, res: Response) => {
    try {
        const userData = req.body;
        const user = await authService.registerUser(userData);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error });
    }
};

export const loginUser = async (req: Request<{}, {}, IUserRequest>, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await authService.loginUser(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: error });
    }
};

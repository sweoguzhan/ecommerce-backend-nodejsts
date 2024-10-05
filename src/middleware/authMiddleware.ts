import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import User from '../models/User';
import {IUserRequest} from "../interfaces/UserRequest"; // Doğru interface'i ekleyin

export const protect = async (req: IUserRequest, res: Response, next: NextFunction): Promise<void> => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default_secret') as { id: string };

            req.user = await User.findById(decoded.id).select('-password'); // req.user'ı burada ayarlıyoruz
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// src/middleware/adminMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import {IUser} from "../interfaces/UserModel";

interface IUserRequest extends Request {
    user?: IUser;
}

export const adminProtect = (req: IUserRequest, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

// src/middleware/adminMiddleware.ts
import { Request, Response, NextFunction } from 'express';

export const adminProtect = (req: Request, res: Response, next: NextFunction) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Bu işlemi sadece admin yetkisine sahip olanlar gerçekleştirebilir.' });
    }
};

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import {adminProtect} from "./middleware/adminMiddleware";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import {protect} from "./middleware/authMiddleware";

dotenv.config();

connectDB().then(() => console.log('Connected to MongoDB'));

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin',adminProtect ,adminRoutes);
// @ts-ignore
app.use('/api/products',protect,userRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

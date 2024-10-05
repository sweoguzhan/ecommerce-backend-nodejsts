// src/models/User.ts
import mongoose, {Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/UserModel';



const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    surname: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const user = this as unknown as IUser;
    if (!user.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);
export default User;

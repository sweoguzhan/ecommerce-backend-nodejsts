// src/models/User.ts
import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    _id: string;  // _id'yi string olarak belirledik
    name: string;
    email: string;
    password: string;
    surname: string;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    surname: { type: String, required: true },
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

// src/services/authService.ts
import User from '../models/User';
import generateToken from '../utils/generateToken';
import { IUserRequest } from '../interfaces/UserRequest';

// Kullanıcı kayıt işlemi
export const registerUser = async (userData: IUserRequest) => {
    const { name, surname, email, password } = userData;

    const userExists = await User.findOne({ email });
    if (userExists) {
        throw new Error('User already exists');
    }

    const user = await User.create({
        name,
        surname,
        email,
        password,
    });

    if (!user) {
        throw new Error('Invalid user data');
    }

    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id.toString()), // JWT token oluştur
    };
};

// Kullanıcı giriş işlemi
export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
        throw new Error('Invalid email or password');
    }

    return {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        token: generateToken(user._id.toString()), // JWT token
    };
};

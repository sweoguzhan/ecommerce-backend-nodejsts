import {Document} from "mongoose";

export interface IUser extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    surname: string;
    isAdmin: boolean;
    matchPassword(enteredPassword: string): Promise<boolean>;
}

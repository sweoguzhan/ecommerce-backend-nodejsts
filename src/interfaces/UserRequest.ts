// src/interfaces/UserRequest.ts

import {IUser} from "./UserModel";

export interface IUserRequest {
    headers: any;
    name: string;
    body:any;
    surname: string;
    email: string;
    password: string;
    isAdmin: boolean;
    user: IUser;

}

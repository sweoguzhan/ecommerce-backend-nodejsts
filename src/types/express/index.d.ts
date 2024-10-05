// src/types/express/index.d.ts
import {IUser} from "../../interfaces/UserModel";  // Kendi user modelinizi import edin

declare global {
    namespace Express {
        interface Request {
            user?: IUser;  // user özelliğini ekliyoruz
        }
    }
}
